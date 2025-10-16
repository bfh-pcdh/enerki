<script setup lang="ts">
  import { computed, ref, ShallowRef, useTemplateRef } from 'vue';
  import { ENV } from '../../env';
  import { type Message, USER_ROLE } from '@/models';
  import axios from 'axios';
  import markdownit from 'markdown-it';
  import { store } from '../store';
  import { AntSubscription } from '@/antService';
  import ToastService from '@/toastService';
  import PromptExamples from './PromptExamples.vue';

  // define props
  const props = defineProps<{
    token: string,
    percent: number
  }>();

  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
  });

  // define events
  const emit = defineEmits(['onAnswer','onError']);

  const chat: ShallowRef = useTemplateRef('chat-list');

  const loadingPercent = ref(0);
  
  const userInput = ref(false);
  const chatInput = ref(null);
  let usage = -1;
  let inputTimeout = -1;

  const loadingStyle = computed(() => {
    return 'filter: blur(' + (10 - Math.round(loadingPercent.value / 10)) + 'px);opacity:' + (0.009 * loadingPercent.value + 0.1).toFixed(2)  + ';';
  })

  const input = ref('');

  /**
   * Estimates the energy usage for an answer, based on the number of output tokens. Samsi et al. estimated the energy usage with 3 - 4 Joule per token, which equals to ~0.001 Wh
   * @see Paper       Samsi et al. (2023): From Words to Watts: Benchmarking the Energy Costs of Large Language Model Inference. https://doi.org/10.48550/arXiv.2310.03003 
   * @param tokens    number of output tokens of the answer
   * @returns         an estimation of energy (in Wh), based on the number of output tokens
   */
  function estimateEnergyUsage(tokens: number) {
    return tokens * 3.5 / 3600; // 3.5 joules per token; 3600 J = 1 Wh
  }

  /**
   * Estimates the energy usage before knowing the answer
   * @returns         an estimation of energy (in Wh)
   */
  function preEstimateUsage() {
    return 1;
  }

  /**
   * Checks if a message is currently the last
   * @param index   the index of the message
   * @returns       TRUE if the message is the last in the array
   *                FALSE if there are more messages after it in the array
   */
  function isLastMessage(index: number): boolean {
    return store.chatMessages.length - index === 1;
  } 
  
  /**
   * Sends a message to the model, with all previous messages as context
   */
  function send() {
    if (input.value == '') return;

    const message: Message = {
      role: USER_ROLE.USER,
      content: input.value,
      loading: false
    };
    loadingPercent.value = 0;

    store.chatMessages.push(message);

    const body = {
      model: ENV.MODEL,
      messages: [...store.chatMessages]
    }
    input.value = '';

    const answerMessage = {
      role: USER_ROLE.AI,
      content: '...',
      loading: true,
      percent: 0
    };

    ToastService.startToast();

    store.chatMessages.push(answerMessage);
    usage = -1;

    chat.value.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });

    store.startAndSubscribe(
      preEstimateUsage(), 
      (ant: AntSubscription) => {
        answerMessage.percent = Math.min(ant.percent, 100);
        loadingPercent.value = Math.min(ant.percent, 100);

        ToastService.progressToast(
          answerMessage.percent,
          answerMessage.content !== '...',
          ant.value
        );
        if (ant.percent >= 100 && usage > 0) {
          ToastService.energyToast(usage);
        }
      }
    );

    const time = Date.now();
    axios.post(
      ENV.BASE_URL + ENV.ENDPOINT, 
      body, 
      {
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + props.token
        },
      }
    ).then((result) => {
      const duration = Math.round((Date.now() - time) / 1000);
      usage = estimateEnergyUsage(result.data.usage.completion_tokens);
      store.setTarget(usage);    

      console.log('Energie verbraucht: ' + usage.toFixed(2) + ' Wh in ' + duration + ' Sekunden. \nDas benötigt eine Durchschnittsleistung von ' + Math.round(3600 * usage / duration) + ' Watt.');

      answerMessage.content = (result.data.choices[0].message.content as string).replaceAll('ß', 'ss');
      answerMessage.loading = false;

      // we need to do this, or vue won't detect the update...
      store.chatMessages = [...store.chatMessages]

      chat.value.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      emit('onAnswer', answerMessage);
    }).catch((e) => {
      console.error(e);
      emit('onError', JSON.stringify(e, null, 2));
    });
  }

  /**
   * Sets a 1 second timeout in which we don't listen to hotkey inputs
   */
  function inputting() {
    userInput.value = true;
    if (inputTimeout > 0) {
      window.clearTimeout(inputTimeout);
    }
    inputTimeout = window.setTimeout(() => {
      userInput.value = false;
    }, 1000);
  }

  function setPrompt(prompt: string) {
    if (!store.chatMessages[store.chatMessages.length -1]?.loading) {
      input.value = prompt;
      (chatInput.value as any)?.focus();
    }
  }
</script>

<template>
  <ul ref="chat-list" class="chat-list">
    <li v-for="message, i of store.chatMessages" 
        :class="'message-bubble chat-' + message.role" 
        :style="message.percent != undefined && message.percent < 100 && isLastMessage(i) ? loadingStyle : ''"
    >
      <div v-if="message.loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else v-html="md.render(message.content)" />
    </li>
    <li style="height: 10em; color: white"></li>
  </ul>
  
  <PromptExamples @on-select-prompt="setPrompt" :user-inputting="userInput" v-if="!store.isPedalling() && store.examplePrompts.length > 0"/>

  <form action="#" ref="input-form">
    <input autofocus type="text" v-model="input" :placeholder="'Gib hier deinen Text ein' + (store.examplePrompts.length > 0 ? ' oder wähle einen der Prompts oben aus':'')" @input="inputting" ref="chatInput"/>
    <button @click="send" type="submit" :disabled="store.isPedalling()">
      SENDEN
    </button>
  </form>
</template>

<style scoped>
ul.chat-list {
  overflow: scroll;
  height: 100vh;
  margin-bottom: 0;
  padding: 1em;
  padding-top: 10em;
}
li:first-child {
  margin-top: 3em;
}
.message-bubble {
  list-style: none;
  padding: 0.25em 1em;
  border-radius: 1em;
  width: 75%;
  margin-top: 0.5em;
  transition: opacity 1.2s ease, filter 1.2s ease;
}
.chat-user {
  background-color: #64788b;
  color: #eff1f3;
  margin-left: 25%
}
.chat-assistant {
  background-color: #e0e4e8;
  color: #4b647d;
  margin-right: 25%
}
.chat-developer {
  display: none;
}
.spinner-border {
  display: block;
  height: 1em;
  width: 1em;
  margin-left: auto;
  margin-right: auto;
}

input {
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 0.5em;
  width: 75%;
}

button {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;
  padding-right: 0.5em;
  width: 25%;
}

.usage {
  width: 100%;
  margin-top: 1em;
  display: block;
  text-align: center;
  color: darkgray
}

.spinner-border {
  margin-top: 2em;
  margin-bottom: 2em;
}
.scroll-target {
  height: 4em;
  color: white;
}
</style>
