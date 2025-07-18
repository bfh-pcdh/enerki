<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue';
  import axios from 'axios';
  import { ENV } from '../env.js';
  import markdownit from 'markdown-it'

  enum USER_ROLE {
    USER = 'user',
    AI = 'assistant'
  };

  interface Message {
    role: USER_ROLE;
    content: string;
    loading: boolean;
  };

  const token = ref(ENV.TOKEN);
  const messages = ref<Message[]>([]);
  const input = ref('');
  const computeTime = ref(0);
  const error = ref<string | undefined>();
  const inputForm = useTemplateRef('input-form');
  const markdown = markdownit();

  function reset() {
    error.value = undefined;
    messages.value = [];
    computeTime.value = 0;
    input.value = '';
  }

  function send() {
    if (input.value == '') return;

    const message: Message = {
      role: USER_ROLE.USER,
      content: input.value,
      loading: false
    };

    messages.value.push(message);

    const body = {
      model: ENV.MODEL,
      messages: [...messages.value]
    }
    input.value = '';

    messages.value.push({
      role: USER_ROLE.AI,
      content: '...',
      loading: true
    });

    axios.post(
      ENV.BASE_URL + '/api/chat/completions', 
      body, 
      {
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + token.value
        },
      }
    ).then((result) => {
      computeTime.value += result.data.usage.total_duration;
      messages.value[messages.value.length - 1] = {
        ...result.data.choices[0].message,
        loading: false
      };
      inputForm.value?.scrollIntoView({ behavior: 'smooth' });
    }).catch((error) => {
      error.value = JSON.stringify(error);
    });
  }
</script>

<template>
  <header>
    <h1>enerKI</h1>
  </header>

  <!-- ASK for token if not set (e.g. on deployed website) -->
  <form action="#" ref="token-form" v-if="token?.length == 0">
    <input type="text" v-model="token" placeholder="Gib hier dein BeeChat Token ein" style="width: 100%"></input>
  </form>

  <main v-else>
    <div class="error" v-if="error">
      <h2>Leider ist etwas schief gegangen:</h2>
      {{ error }}
      <button @click="reset">OK</button>
    </div>

    <div class="chat" v-else>
      <ul>
        <li v-for="message of messages" :class="'message-bubble chat-' + message.role">
        <div v-if="message.loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else v-html="markdown.render(message.content)"></div>
        </li>
      </ul>
      <form action="#" ref="input-form">
        <input type="text" v-model="input" placeholder="Gib hier deinen Text ein"></input>
        <button @click="send" type="submit" :disabled="messages[messages.length -1]?.loading">
          SENDEN
        </button>
      </form>
    <span class="usage" v-if="computeTime > 0">Gesamthaft verbrauchte Zeit: {{ (computeTime / 1000000000).toFixed(2) }} Sekunden</span>
    </div>
    
  </main>
</template>

<style scoped>
ul {
  margin: 2em 0;
  padding: 0;
}
.message-bubble p {
  margin-bottom: 0;
}
.message-bubble {
  list-style: none;
  padding: 0.25em 1em;
  border-radius: 1em;
  width: 75%;
  margin-top: 0.5em;
}
.chat-user {
  background-color: azure;
  margin-left: 25%
}
.chat-assistant {
  background-color: aquamarine;
  margin-right: 25%
}
.spinner-border {
  display: block;
  height: 1em;
  width: 1em;
  margin-left: auto;
  margin-right: auto;
}

.chat input {
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 0.5em;
  width: 75%;
}

.chat button {
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

.error {
  background-color: salmon;
  margin: 1em;
  width: 100%;
  padding: 0.5em;
  border-radius: 0.5em;
  color: white;
}

.error h2 {
  font-size: 1.5em;
  font-weight: bold;
}
</style>