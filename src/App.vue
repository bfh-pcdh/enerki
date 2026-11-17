<script setup lang="ts">
import { ref } from "vue";
import ConnectModal from "./components/ConnectModal.vue";
import Settings from "./components/Settings.vue";
import Chat from "./components/Chat.vue";
import { LANG, store } from "./store";
import PowerSimulator from "./components/PowerSimulator.vue";
import QuizCardModal from "./components/QuizCardModal.vue";
import { i18n } from "./assets/i18n";

const version = require("../package.json").version;

const error = ref<string | undefined>();

const percent = ref<number>(0);

const showCardModal = ref(false);

const showSettings = ref(false);

document.addEventListener("keydown", function (event) {
  if (showCardModal.value && event.key == "Enter") {
    showCardModal.value = false;
  } else if (event.key == "Enter" && store.textInput == "") {
    showCard();
  }
});

/**
 * Calculates the header buttons
 * <div
        class="toggle-button"
        @click="store.toggleUseTools()"
        :class="{ active: store.getUseTools() }"
        :title="store.getUseTools() ? i18n('TOOL_USE_OFF') : i18n('TOOL_USE_ON')"
      >
        🔍
      </div>
 */
function getHeaderButtons() {
  const CARD = {
    icon: "🀙",
    title: store.cardDrawn ? i18n("NEW_CARD") : i18n("SHOW_CARD"),
    action: showCard,
    style: store.cardDrawn
      ? "text-shadow: #fac300 0px 0 3px; line-height: 1.8em;"
      : "line-height: 1.8em;",
  };
  const RESET = {
    icon: "⟲",
    title: i18n("RESET"),
    action: resetUser,
    style: "",
  };
  const TOOL = {
    icon: "🔍",
    title: store.getUseTools() ? i18n("TOOL_USE_OFF") : i18n("TOOL_USE_ON"),
    action: () => store.toggleUseTools(),
    style: store.getUseTools()
      ? "line-height: 2.8em; font-size: 1.5em; text-shadow: rgb(250, 195, 0) 0px 0px 3px; margin-right: 0.2em;"
      : "line-height: 2.8em; font-size: 1.5em; filter: saturate(0); margin-right: 0.2em;",
  };
  const LANGUAGE = {
    icon: store.lang === LANG.DE ? "🇩🇪" : "🇫🇷",
    title: i18n("LANGUAGE"),
    action: toggleLanguage,
    style: "filter: saturate(0)",
  };
  const SETTINGS = {
    icon: "⚙︎",
    title: i18n("SETTINGS"),
    action: () => (showSettings.value = !showSettings.value),
    style: "",
  };
  return store.connection.SEARCH_URL == ""
    ? [CARD, RESET, LANGUAGE, SETTINGS]
    : [CARD, RESET, TOOL, LANGUAGE, SETTINGS];
}

/**
 * Toggles the language between DE and FR
 */
function toggleLanguage() {
  switch (store.lang) {
    case LANG.DE:
      store.lang = LANG.FR;
      break;
    case LANG.FR:
      store.lang = LANG.DE;
      break;
  }
}

/**
 * Resets the app to start with a new user
 */
function resetUser() {
  if (confirm(i18n("RESET_USER"))) {
    store.resetUser();
  }
}

/**
 * Resets the whole app
 */
function reset() {
  store.resetUser();
  error.value = undefined;
}

/**
 * Draws a new quiz card and sets the example prompts.
 */
function showCard() {
  store.drawQuizCard();
  store.setExamplePromptsVisible(true);
  showCardModal.value = true;
}

/**
 * Closes the settings window
 */
function closeSettings() {
  showSettings.value = false;
}

/**
 * Handles an error and displays it to the user
 * @param error   the error message to display to the user
 */
function handleError(e: string = i18n("UNKNOWN_ERROR")) {
  error.value = e;
}

/**
 * Calculates the css opacity for a given toast message
 * @param i the position of the toast message
 */
function getToastOpacity(i: number): string {
  return "opacity: " + (i + 1) / store.toasts.length;
}
</script>

<template>
  <header>
    <img
      :src="require('@/assets/logo.png')"
      alt="Logo Berner Fachhochschule"
      class="logo"
      :title="
        'enerKI Version: ' +
        version +
        '\nModel: ' +
        store.connection.BASE_URL +
        ' > ' +
        store.connection.MODEL
      "
    />
    <h1>enerKI</h1>
    <div class="header-buttons">
      <a
        v-for="b of getHeaderButtons()"
        @click="b.action"
        :title="b.title"
        class="header-button"
        :style="b.style"
        >{{ b.icon }}</a
      >
    </div>
  </header>
  <Settings v-if="showSettings" @on-close="closeSettings" />

  <main v-else>
    <!-- display error message -->
    <div class="error" v-if="error">
      <h2>{{ i18n("ERROR") }}</h2>
      {{ error }}
      <br />
      <div class="error-buttons">
        <button @click="reset">{{ i18n("RESET") }}</button>
        <button @click="error = ''">{{ i18n("OK") }}</button>
      </div>
    </div>

    <!-- chat window -->
    <chat v-else :percent="percent" @on-error="handleError" />

    <!-- window for power simulation / debug -->
    <PowerSimulator
      v-if="store.connected && store.isPedalling() && !error"
      :debug="store.isDebug"
      :watt="Math.round(store.power.getValues().value)"
    />
  </main>

  <ConnectModal v-if="!store.connected" @on-error="handleError" />
  <QuizCardModal
    v-if="store.activeCard && showCardModal"
    :card="store.activeCard"
    @on-close="showCardModal = false"
  />

  <ul class="toast-list">
    <!--li v-for="(toast, i) of store.toasts" :style="getToastOpacity(i)">
        <div class="alert alert-info" role="alert">
          {{ toast }}
        </div>
      </li-->
    <li v-if="store.toasts.length > 0">
      <div class="alert alert-info" role="alert">
        {{ store.toasts.at(-1) }}
      </div>
    </li>
  </ul>
</template>

<style scoped>
.error {
  background-color: salmon;
  color: white;
  margin: 1em;
  padding: 0.5em;
  border-radius: 0.5em;
}
.alert {
  box-shadow: 0 0 20px lightgray;
}
header {
  color: #697d91;
  display: flex;
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

.error-buttons {
  width: fit-content;
  margin: 0 auto;
  display: block;
}

.error button {
  margin: 0.2em;
}

.header-buttons {
  margin-left: auto;
  justify-content: space-evenly;
  display: flex;
}

.header-button {
  cursor: pointer;
  text-decoration: none;
  color: #c1c9d1;
  font-size: 2em;
  line-height: 2em;
  margin-left: 0.2em;
}

.glow {
  text-shadow: #fac300 0px 0 3px;
}

.header-button:hover {
  color: #697d91;
  filter: saturate(1) !important;
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
