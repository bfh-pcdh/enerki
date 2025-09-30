<script setup lang="ts">
  import { ref } from "vue";
  import { ENV } from "../env";
  import AuthForm from "./components/AuthForm.vue";
  import ConnectModal from "./components/ConnectModal.vue";
  import Settings from "./components/Settings.vue";
  import Chat from "./components/Chat.vue";
  import { getPersisted, persist, store, STORE_KEY } from "./store";
  import PowerSimulator from './components/PowerSimulator.vue';
  import QuizCardModal from "./components/QuizCardModal.vue";
  import QuizService from "./quizService";
  import { QuizCard } from "./models";

  const token = ref(getPersisted<string>(STORE_KEY.TOKEN) || ENV.TOKEN);

  const error = ref<string | undefined>();

  const percent = ref<number>(0);

  const activeCard = ref<QuizCard | undefined>();
  const showCardModal = ref(false);

  const showSettings = ref(false);

  const HEADER_BUTTONS = [
    {
      icon: '🀙',
      title: 'Neue Karte ziehen',
      action: drawCard,
      style: 'line-height: 1.8em;'
    },
    {
      icon: '⚙︎',
      title: 'Einstellungen',
      action: toggleSettings,
      style: ''
    }
  ];

    document.addEventListener('keydown', function(event) {
      if (showCardModal.value && event.key == 'Enter') {
        showCardModal.value = false;
      }
    });

  /**
   * Resets the app
   */
  function reset() {
    error.value = undefined;
    token.value = ENV.TOKEN;
  }

  /**
   * Sets the token recieved from authentication
   * @param t    object with the new token and a boolean value
   *             that defines if the token should be persistet to local storage
   */
  function setToken(t: {token: string, persist: boolean}) {
    token.value = t.token;
    if (t.persist) {
      persist(STORE_KEY.TOKEN, token.value);
    }
  }

  function toggleSettings() {
    showSettings.value = !showSettings.value;
  }

  function drawCard() {
    activeCard.value = QuizService.drawRandomQuizCard();
    showCardModal.value = true;
    store.examplePrompts = activeCard.value.prompts;
  }

  /**
   * Handles an error and displays it to the user
   * @param error   the error message to display to the user
   */
  function handleError(e: string = "Unbekannter Fehler.") {
    error.value = e;
  }
</script>

<template>
  <header>
    <img :src="require('@/assets/logo.png')" alt="Logo Berner Fachhochschule" class="logo" />
    <h1>enerKI</h1>
    <div class="header-buttons">
      <a v-for="b of HEADER_BUTTONS" @click="b.action" :title="b.title" class="header-button" :style="b.style">{{ b.icon }}</a>
    </div>
  </header>
  <Settings v-if="showSettings" @on-close="showSettings = false"/>
  <div v-else>
    <!-- if no token is set, we show the auth form -->
    <auth-form v-if="token?.length == 0" @on-token="setToken" @on-error="handleError" />

    <main v-else>
      <!-- display error message -->
      <div class="error" v-if="error">
        <h2>Leider ist etwas schief gegangen:</h2>
        {{ error }}
        <button @click="reset">OK</button>
      </div>

      <!-- chat window -->
      <chat v-else 
        :token="token" 
        :percent="percent"
        @on-error="handleError" 
      />  

      <!-- window for power simulation / debug -->
      <PowerSimulator v-if="store.connected && store.isPedalling()" :debug="store.isDebug" :watt="Math.round(store.power.getValues().value)"/>
    </main>

    <ConnectModal v-if="!store.connected" @on-error="handleError" />
    <QuizCardModal v-if="activeCard && showCardModal" :card="activeCard"/>

    <ul class="toast-list">
      <li
        v-for="(toast, i) of store.toasts"
        :style="'opacity: ' + (i + 1) / store.toasts.length"
      >
        <div class="alert alert-info" role="alert">
          {{ toast }}
        </div>
      </li>
    </ul>
  </div>
 
</template>

<style scoped>
.error {
  background-color: salmon;
  color: white;
  margin: 1em;
  width: 100%;
  padding: 0.5em;
  border-radius: 0.5em;
}
header {
  color: #697d91;
  display:flex;
  flex-direction: row;
}

header h1 {
  line-height: 1.6em;
  margin-left: 1em;
}

.error h2 {
  font-size: 1.5em;
  font-weight: bold;
}
.header-buttons {
  width: 4em;
  margin-left: auto;
  justify-content: space-evenly;
  display: flex
;
}
.header-button {
  cursor: pointer;
  text-decoration: none;
  color: #c1c9d1;
  font-size: 2em;
  line-height: 2em;
}

.header-button:hover {
  color: #697d91
}

.logo {
  height: 2.5em;
  margin: 0.75em;
}

.toast-list {
  list-style-type: none;
  position: fixed;
  bottom: 30%;
  width: 60%;
  margin-left: 20%;
}
</style>
