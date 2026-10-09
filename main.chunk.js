/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.error[data-v-7ba5bd90] {
  background-color: salmon;
  color: white;
  margin: 1em;
  padding: 0.5em;
  border-radius: 0.5em;
}
header[data-v-7ba5bd90] {
  color: #697d91;
  display: flex;
  flex-direction: row;
}
header h1[data-v-7ba5bd90] {
  line-height: 1.6em;
  margin-left: 1em;
}
.error h2[data-v-7ba5bd90] {
  font-size: 1.5em;
  font-weight: bold;
}
.error-buttons[data-v-7ba5bd90] {
  width: fit-content;
  margin: 0 auto;
  display: block;
}
.error button[data-v-7ba5bd90] {
  margin: 0.2em;
}
.header-buttons[data-v-7ba5bd90] {
  width: 6em;
  margin-left: auto;
  justify-content: space-evenly;
  display: flex;
}
.header-button[data-v-7ba5bd90] {
  cursor: pointer;
  text-decoration: none;
  color: #c1c9d1;
  font-size: 2em;
  line-height: 2em;
  margin-left: 0.2em;
}
.glow[data-v-7ba5bd90] {
  text-shadow: #fac300 0px 0 3px;
}
.header-button[data-v-7ba5bd90]:hover {
  color: #697d91;
  filter: saturate(1) !important;
}
.logo[data-v-7ba5bd90] {
  height: 2.5em;
  margin: 0.75em;
}
.toast-list[data-v-7ba5bd90] {
  list-style-type: none;
  position: fixed;
  bottom: 30%;
  width: 60%;
  margin-left: 20%;
}
`, "",{"version":3,"sources":["webpack://./src/App.vue"],"names":[],"mappings":";AA2NA;EACE,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,cAAc;EACd,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,6BAA6B;EAC7B,aAAa;AACf;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,8BAA8B;AAChC;AAEA;EACE,cAAc;EACd,8BAA8B;AAChC;AAEA;EACE,aAAa;EACb,cAAc;AAChB;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,UAAU;EACV,gBAAgB;AAClB","sourcesContent":["<script setup lang=\"ts\">\nimport { ref } from 'vue';\nimport { ENV } from '../env';\nimport AuthForm from './components/AuthForm.vue';\nimport ConnectModal from './components/ConnectModal.vue';\nimport Settings from './components/Settings.vue';\nimport Chat from './components/Chat.vue';\nimport { getPersisted, LANG, persist, store, STORE_KEY } from './store';\nimport PowerSimulator from './components/PowerSimulator.vue';\nimport QuizCardModal from './components/QuizCardModal.vue';\nimport { i18n } from './assets/i18n';\n\nconst version = require('../package.json').version;\n\nconst token = ref(getPersisted<string>(STORE_KEY.TOKEN) || ENV[0].TOKEN);\n\nconst error = ref<string | undefined>();\n\nconst percent = ref<number>(0);\n\nconst showCardModal = ref(false);\n\nconst showSettings = ref(false);\n\ndocument.addEventListener('keydown', function (event) {\n  if (showCardModal.value && event.key == 'Enter') {\n    showCardModal.value = false;\n  } else if (event.key == 'Enter' && store.textInput == '') {\n    showCard();\n  }\n});\n\n// fast hack for displaying settings\nshowSettings.value = window.location.search.includes('settings=true');\n\n/**\n * Calculates the header buttons\n */\nfunction getHeaderButtons() {\n  return [\n    {\n      icon: '🀙',\n      title: store.cardDrawn ? i18n('NEW_CARD') : i18n('SHOW_CARD'),\n      action: showCard,\n      style: store.cardDrawn\n        ? 'text-shadow: #fac300 0px 0 3px; line-height: 1.8em;'\n        : 'line-height: 1.8em;'\n    },\n    {\n      icon: '⟲',\n      title: i18n('RESET'),\n      action: resetUser,\n      style: ''\n    },\n    {\n      icon: store.lang === LANG.DE ? '🇩🇪' : '🇫🇷',\n      title: i18n('LANGUAGE'),\n      action: toggleLanguage,\n      style: 'filter: saturate(0)'\n    }\n    // {\n    //   icon: '⚙︎',\n    //   title: 'Einstellungen',\n    //   action: () => (showSettings.value = !showSettings.value),\n    //   style: '',\n    // },\n  ];\n}\n\n/**\n * Sets the token recieved from authentication\n * @param t    object with the new token and a boolean value\n *             that defines if the token should be persistet to local storage\n */\nfunction setToken(t: { token: string; persist: boolean }) {\n  token.value = t.token;\n  if (t.persist) {\n    persist(STORE_KEY.TOKEN, token.value);\n  }\n}\n\n/**\n * Toggles the language between DE and FR\n */\nfunction toggleLanguage() {\n  switch (store.lang) {\n    case LANG.DE:\n      store.lang = LANG.FR;\n      break;\n    case LANG.FR:\n      store.lang = LANG.DE;\n      break;\n  }\n}\n\n/**\n * Resets the app to start with a new user\n */\nfunction resetUser() {\n  if (confirm(i18n('RESET_USER'))) {\n    store.resetUser();\n  }\n}\n\n/**\n * Resets the whole app\n */\nfunction reset() {\n  store.resetUser();\n  error.value = undefined;\n  token.value = ENV[0].TOKEN;\n}\n\n/**\n * Draws a new quiz card and sets the example prompts.\n */\nfunction showCard() {\n  store.drawQuizCard();\n  showCardModal.value = true;\n}\n\n/**\n * Closes the settings window\n */\nfunction closeSettings() {\n  showSettings.value = false;\n  window.location.search = 'settings=' + showSettings.value;\n}\n\n/**\n * Handles an error and displays it to the user\n * @param error   the error message to display to the user\n */\nfunction handleError(e: string = i18n('UNKNOWN_ERROR')) {\n  error.value = e;\n}\n\n/**\n * Calculates the css opacity for a given toast message\n * @param i the position of the toast message\n */\nfunction getToastOpacity(i: number): string {\n  return 'opacity: ' + (i + 1) / store.toasts.length;\n}\n</script>\n\n<template>\n  <header>\n    <img\n      :src=\"require('@/assets/logo.png')\"\n      alt=\"Logo Berner Fachhochschule\"\n      class=\"logo\"\n      :title=\"\n        'enerKI Version: ' +\n        version +\n        '\\nModel: ' +\n        store.connection.BASE_URL +\n        ' > ' +\n        store.connection.MODEL\n      \"\n    />\n    <h1>enerKI</h1>\n    <div class=\"header-buttons\">\n      <a\n        v-for=\"b of getHeaderButtons()\"\n        @click=\"b.action\"\n        :title=\"b.title\"\n        class=\"header-button\"\n        :style=\"b.style\"\n        >{{ b.icon }}</a\n      >\n    </div>\n  </header>\n  <Settings v-if=\"showSettings\" @on-close=\"closeSettings\" />\n  <div v-else>\n    <!-- if no token is set, we show the auth form -->\n    <auth-form v-if=\"token?.length == 0\" @on-token=\"setToken\" @on-error=\"handleError\" />\n\n    <main v-else>\n      <!-- display error message -->\n      <div class=\"error\" v-if=\"error\">\n        <h2>{{ i18n('ERROR') }}</h2>\n        {{ error }}\n        <br />\n        <div class=\"error-buttons\">\n          <button @click=\"reset\">{{ i18n('RESET') }}</button>\n          <button @click=\"error = ''\">{{ i18n('OK') }}</button>\n        </div>\n      </div>\n\n      <!-- chat window -->\n      <chat v-else :token=\"token\" :percent=\"percent\" @on-error=\"handleError\" />\n\n      <!-- window for power simulation / debug -->\n      <PowerSimulator\n        v-if=\"store.connected && store.isPedalling() && !error\"\n        :debug=\"store.isDebug\"\n        :watt=\"Math.round(store.power.getValues().value)\"\n      />\n    </main>\n\n    <ConnectModal v-if=\"!store.connected\" @on-error=\"handleError\" />\n    <QuizCardModal\n      v-if=\"store.activeCard && showCardModal\"\n      :card=\"store.activeCard\"\n      @on-close=\"showCardModal = false\"\n    />\n\n    <ul class=\"toast-list\">\n      <li v-for=\"(toast, i) of store.toasts\" :style=\"getToastOpacity(i)\">\n        <div class=\"alert alert-info\" role=\"alert\">\n          {{ toast }}\n        </div>\n      </li>\n    </ul>\n  </div>\n</template>\n\n<style scoped>\n.error {\n  background-color: salmon;\n  color: white;\n  margin: 1em;\n  padding: 0.5em;\n  border-radius: 0.5em;\n}\nheader {\n  color: #697d91;\n  display: flex;\n  flex-direction: row;\n}\n\nheader h1 {\n  line-height: 1.6em;\n  margin-left: 1em;\n}\n\n.error h2 {\n  font-size: 1.5em;\n  font-weight: bold;\n}\n.error-buttons {\n  width: fit-content;\n  margin: 0 auto;\n  display: block;\n}\n.error button {\n  margin: 0.2em;\n}\n.header-buttons {\n  width: 6em;\n  margin-left: auto;\n  justify-content: space-evenly;\n  display: flex;\n}\n.header-button {\n  cursor: pointer;\n  text-decoration: none;\n  color: #c1c9d1;\n  font-size: 2em;\n  line-height: 2em;\n  margin-left: 0.2em;\n}\n.glow {\n  text-shadow: #fac300 0px 0 3px;\n}\n\n.header-button:hover {\n  color: #697d91;\n  filter: saturate(1) !important;\n}\n\n.logo {\n  height: 2.5em;\n  margin: 0.75em;\n}\n\n.toast-list {\n  list-style-type: none;\n  position: fixed;\n  bottom: 30%;\n  width: 60%;\n  margin-left: 20%;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
form[data-v-2bd044bc] {
  display: flex;
  margin: 5em 1em !important;
  flex-direction: column;
}
div[data-v-2bd044bc] {
  display: flex;
  width: 100%;
  margin-top: 1em;
}
.token-box input[data-v-2bd044bc] {
  width: 80%;
}
.persist-box[data-v-2bd044bc] {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.persist-box input[data-v-2bd044bc] {
  margin-right: 0.5em;
}
button[data-v-2bd044bc] {
  width: 20%;
}
`, "",{"version":3,"sources":["webpack://./src/components/AuthForm.vue"],"names":[],"mappings":";AAuDA;EACE,aAAa;EACb,0BAA0B;EAC1B,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,WAAW;EACX,eAAe;AACjB;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ","sourcesContent":["<script setup lang=\"ts\">\nimport { i18n } from '@/assets/i18n';\nimport { ref } from 'vue';\nimport { store } from '../store';\n\nconst emit = defineEmits(['onToken', 'onError']);\n\nconst token = ref('');\nconst persist = ref(false);\n\n// TODO: very basic validation, update this later\nfunction isValid(token: string): Promise<boolean> {\n  return Promise.resolve(token.length > 0);\n}\n\nfunction setToken() {\n  isValid(token.value).then((valid) => {\n    if (valid) {\n      emit('onToken', {\n        token: token.value,\n        persist: persist.value\n      });\n    }\n  });\n}\nfunction togglePersist() {\n  if (persist.value) {\n    persist.value = false;\n  } else {\n    const confirm = window.confirm(i18n('AUTH_CONFIRM'));\n    window.setTimeout(() => (persist.value = confirm), 1); // hack necessary to set negative answer when user checked checkbox and said no in prompt\n  }\n}\n</script>\n\n<template>\n  <form action=\"#\">\n    <div class=\"token-box\">\n      <input\n        type=\"text\"\n        v-model=\"token\"\n        :placeholder=\"i18n('ENTER_TOKEN') + store.connection.NAME\"\n        style=\"width: 100%\"\n      />\n      <button @click=\"setToken\" type=\"submit\" :disabled=\"token.length == 0\">\n        {{ i18n('SAVE').toUpperCase() }}\n      </button>\n    </div>\n    <div class=\"persist-box\">\n      <input type=\"checkbox\" v-model=\"persist\" @click=\"togglePersist\" />{{ i18n('AUTH_PERSIST') }}\n    </div>\n  </form>\n</template>\n\n<style scoped>\nform {\n  display: flex;\n  margin: 5em 1em !important;\n  flex-direction: column;\n}\ndiv {\n  display: flex;\n  width: 100%;\n  margin-top: 1em;\n}\n.token-box input {\n  width: 80%;\n}\n.persist-box {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.persist-box input {\n  margin-right: 0.5em;\n}\nbutton {\n  width: 20%;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
ul.chat-list[data-v-2bc3d388] {
  overflow: scroll;
  height: 100vh;
  margin-bottom: 0;
  padding: 1em;
  padding-top: 10em;
}
li[data-v-2bc3d388]:first-child {
  margin-top: 3em;
}
.message-bubble[data-v-2bc3d388] {
  list-style: none;
  padding: 0.25em 1em;
  border-radius: 1em;
  width: 75%;
  margin-top: 0.5em;
  transition:
    opacity 1.2s ease,
    filter 1.2s ease;
}
.chat-user[data-v-2bc3d388] {
  background-color: #64788b;
  color: #eff1f3;
  margin-left: 25%;
}
.chat-assistant[data-v-2bc3d388] {
  background-color: #e0e4e8;
  color: #4b647d;
  margin-right: 25%;
}
.chat-developer[data-v-2bc3d388] {
  display: none;
}
.spinner-border[data-v-2bc3d388] {
  display: block;
  height: 1em;
  width: 1em;
  margin-left: auto;
  margin-right: auto;
}
input[data-v-2bc3d388] {
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 0.5em;
  width: 75%;
}
button[data-v-2bc3d388] {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;
  padding-right: 0.5em;
  width: 25%;
}
.usage[data-v-2bc3d388] {
  width: 100%;
  margin-top: 1em;
  display: block;
  text-align: center;
  color: darkgray;
}
.spinner-border[data-v-2bc3d388] {
  margin-top: 2em;
  margin-bottom: 2em;
}
.scroll-target[data-v-2bc3d388] {
  height: 4em;
  color: white;
}
`, "",{"version":3,"sources":["webpack://./src/components/Chat.vue"],"names":[],"mappings":";AAiOA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,iBAAiB;EACjB;;oBAEkB;AACpB;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;AAEA;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,6BAA6B;EAC7B,0BAA0B;EAC1B,mBAAmB;EACnB,UAAU;AACZ;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,+BAA+B;EAC/B,4BAA4B;EAC5B,oBAAoB;EACpB,UAAU;AACZ;AAEA;EACE,WAAW;EACX,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["<script setup lang=\"ts\">\nimport { computed, ref, ShallowRef, useTemplateRef } from 'vue';\nimport { type Message, USER_ROLE } from '@/models';\nimport axios from 'axios';\nimport markdownit from 'markdown-it';\nimport { store } from '../store';\nimport { AntSubscription } from '@/antService';\nimport ToastService from '@/toastService';\nimport PromptExamples from './PromptExamples.vue';\nimport { i18n } from '@/assets/i18n';\n\n// define props\nconst props = defineProps<{\n  token: string;\n  percent: number;\n}>();\n\nconst md = markdownit({\n  html: true,\n  linkify: true,\n  typographer: true\n});\n\n// define events\nconst emit = defineEmits(['onAnswer', 'onError']);\n\nconst chat: ShallowRef = useTemplateRef('chat-list');\n\nconst loadingPercent = ref(0);\n\nconst userInput = ref(false);\nconst chatInput = ref(null);\nlet usage = -1;\nlet inputTimeout = -1;\n\nconst loadingStyle = computed(() => {\n  return (\n    'filter: blur(' +\n    (10 - Math.round(loadingPercent.value / 10)) +\n    'px);opacity:' +\n    (0.009 * loadingPercent.value + 0.1).toFixed(2) +\n    ';'\n  );\n});\n\n/**\n * Estimates the energy usage for an answer, based on the number of output tokens. Samsi et al. estimated the energy usage with 3 - 4 Joule per token, which equals to ~0.001 Wh\n * @see Paper       Samsi et al. (2023): From Words to Watts: Benchmarking the Energy Costs of Large Language Model Inference. https://doi.org/10.48550/arXiv.2310.03003\n * @param tokens    number of output tokens of the answer\n * @returns         an estimation of energy (in Wh), based on the number of output tokens\n */\nfunction estimateEnergyUsage(tokens: number) {\n  return (tokens * 3.5) / 3600; // 3.5 joules per token; 3600 J = 1 Wh\n}\n\n/**\n * Estimates the energy usage before knowing the answer\n * @returns         an estimation of energy (in Wh)\n */\nfunction preEstimateUsage() {\n  return 1;\n}\n\n/**\n * Checks if a message is currently the last\n * @param index   the index of the message\n * @returns       TRUE if the message is the last in the array\n *                FALSE if there are more messages after it in the array\n */\nfunction isLastMessage(index: number): boolean {\n  return store.chatMessages.length - index === 1;\n}\n\n/**\n * Sends a message to the model, with all previous messages as context\n */\nfunction send() {\n  if (store.textInput == '') return;\n\n  const message: Message = {\n    role: USER_ROLE.USER,\n    content: store.textInput,\n    loading: false\n  };\n  loadingPercent.value = 0;\n\n  store.chatMessages.push(message);\n\n  const body = {\n    model: store.connection.MODEL,\n    messages: [...store.chatMessages]\n  };\n  store.textInput = '';\n\n  const answerMessage = {\n    role: USER_ROLE.AI,\n    content: '...',\n    loading: true,\n    percent: 0\n  };\n\n  ToastService.startToast();\n\n  store.chatMessages.push(answerMessage);\n  usage = -1;\n\n  chat.value.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });\n\n  store.startAndSubscribe(preEstimateUsage(), (ant: AntSubscription) => {\n    answerMessage.percent = Math.min(ant.percent, 100);\n    loadingPercent.value = Math.min(ant.percent, 100);\n\n    ToastService.progressToast(answerMessage.percent, answerMessage.content !== '...', ant.value);\n    if (ant.percent >= 100 && usage > 0) {\n      ToastService.energyToast(usage);\n    }\n  });\n\n  const time = Date.now();\n  axios\n    .post(store.connection.BASE_URL + store.connection.ENDPOINT, body, {\n      headers: {\n        'Content-Type': 'application/json',\n        Authorization: 'Bearer ' + props.token\n      }\n    })\n    .then((result) => {\n      const duration = Math.round((Date.now() - time) / 1000);\n      usage = estimateEnergyUsage(result.data.usage.completion_tokens);\n      store.setTarget(usage);\n\n      console.log(\n        'Energie verbraucht: ' +\n          usage.toFixed(2) +\n          ' Wh in ' +\n          duration +\n          ' Sekunden. \\nDas benötigt eine Durchschnittsleistung von ' +\n          Math.round((3600 * usage) / duration) +\n          ' Watt.'\n      );\n\n      answerMessage.content = (result.data.choices[0].message.content as string).replaceAll(\n        'ß',\n        'ss'\n      );\n      answerMessage.loading = false;\n\n      // we need to do this, or vue won't detect the update...\n      store.chatMessages.pop();\n      store.chatMessages.push(answerMessage);\n\n      chat.value.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });\n      emit('onAnswer', answerMessage);\n    })\n    .catch((e) => {\n      console.error(e);\n      ToastService.abort();\n      emit('onError', JSON.stringify(e, null, 2));\n    });\n}\n\n/**\n * Sets a 1 second timeout in which we don't listen to hotkey inputs\n */\nfunction inputting() {\n  userInput.value = true;\n  if (inputTimeout > 0) {\n    window.clearTimeout(inputTimeout);\n  }\n  inputTimeout = window.setTimeout(() => {\n    userInput.value = false;\n  }, 1000);\n}\n\nfunction setPrompt(prompt: string) {\n  if (!store.chatMessages[store.chatMessages.length - 1]?.loading) {\n    store.textInput = prompt;\n    (chatInput.value as any)?.focus();\n  }\n}\n</script>\n\n<template>\n  <ul ref=\"chat-list\" class=\"chat-list\">\n    <li\n      v-for=\"(message, i) of store.chatMessages\"\n      :class=\"'message-bubble chat-' + message.role\"\n      :style=\"\n        message.percent != undefined && message.percent < 100 && isLastMessage(i)\n          ? loadingStyle\n          : ''\n      \"\n    >\n      <div v-if=\"message.loading\" class=\"spinner-border\" role=\"status\">\n        <span class=\"visually-hidden\">Loading...</span>\n      </div>\n      <div v-else v-html=\"md.render(message.content)\" />\n    </li>\n    <li style=\"height: 10em; color: white\"></li>\n  </ul>\n\n  <PromptExamples\n    @on-select-prompt=\"setPrompt\"\n    :user-inputting=\"userInput\"\n    v-if=\"!store.isPedalling() && store.getExamplePrompts().length > 0\"\n  />\n\n  <form action=\"#\" ref=\"input-form\">\n    <input\n      autofocus\n      type=\"text\"\n      v-model=\"store.textInput\"\n      :placeholder=\"\n        i18n(store.getExamplePrompts().length > 0 ? 'CHAT_PLACEHOLDER_PROMPTS' : 'CHAT_PLACEHOLDER')\n      \"\n      @input=\"inputting\"\n      ref=\"chatInput\"\n    />\n    <button @click=\"send\" type=\"submit\" :disabled=\"store.isPedalling()\">\n      {{ i18n('SEND').toUpperCase() }}\n    </button>\n  </form>\n</template>\n\n<style scoped>\nul.chat-list {\n  overflow: scroll;\n  height: 100vh;\n  margin-bottom: 0;\n  padding: 1em;\n  padding-top: 10em;\n}\nli:first-child {\n  margin-top: 3em;\n}\n.message-bubble {\n  list-style: none;\n  padding: 0.25em 1em;\n  border-radius: 1em;\n  width: 75%;\n  margin-top: 0.5em;\n  transition:\n    opacity 1.2s ease,\n    filter 1.2s ease;\n}\n.chat-user {\n  background-color: #64788b;\n  color: #eff1f3;\n  margin-left: 25%;\n}\n.chat-assistant {\n  background-color: #e0e4e8;\n  color: #4b647d;\n  margin-right: 25%;\n}\n.chat-developer {\n  display: none;\n}\n.spinner-border {\n  display: block;\n  height: 1em;\n  width: 1em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\ninput {\n  border-bottom-left-radius: 1em;\n  border-top-left-radius: 1em;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-left: 0.5em;\n  width: 75%;\n}\n\nbutton {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 1em;\n  border-top-right-radius: 1em;\n  padding-right: 0.5em;\n  width: 25%;\n}\n\n.usage {\n  width: 100%;\n  margin-top: 1em;\n  display: block;\n  text-align: center;\n  color: darkgray;\n}\n\n.spinner-border {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.scroll-target {\n  height: 4em;\n  color: white;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.background[data-v-5a6a7e93] {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 15 !important;
}
.connect-button[data-v-5a6a7e93] {
  width: 10em;
  display: block;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
}
.modal[data-v-5a6a7e93] {
  display: contents;
}
.modal-content[data-v-5a6a7e93] {
  top: 10vh;
}
.modal-dialog[data-v-5a6a7e93] {
  z-index: 20 !important;
}
.button-container[data-v-5a6a7e93] {
  display: flex;
}
h1[data-v-5a6a7e93] {
  font-size: 1.2em;
}
`, "",{"version":3,"sources":["webpack://./src/components/ConnectModal.vue"],"names":[],"mappings":";AA4DA;EACE,0BAA0B;EAC1B,kCAAkC;EAClC,0CAA0C;EAC1C,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,SAAS;AACX;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB","sourcesContent":["<script setup lang=\"ts\">\nimport { store } from '../store';\nimport { i18n } from '@/assets/i18n';\n\nconst emit = defineEmits(['onError']);\n\nfunction connect(type: 'heartRate' | 'power' | 'debug') {\n  try {\n    store.connect(type);\n  } catch (e) {\n    emit('onError', JSON.stringify(e, null, 2));\n  }\n}\n</script>\n\n<template>\n  <div class=\"background\" />\n  <div class=\"modal fade\" id=\"connect-modal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\">{{ i18n('CONNECT_TITLE') }}</h1>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{ i18n('CONNECT_NOTCONNECTED') }}</p>\n          <p>\n            <a href=\"https://github.com/bfh-pcdh/enerki/blob/main/SETUP.md\" target=\"_blank\">{{\n              i18n('CONNECT_INSTRUCTIONS')\n            }}</a>\n          </p>\n          <div class=\"button-container\">\n            <!-- button \n              @click=\"connect('heartRate')\"\n              :disabled=\"!store.heartRate.stickAvailable()\"\n              class=\"connect-button\">\n              Pulssensor verbinden\n            </button-->\n            <button\n              @click=\"connect('power')\"\n              class=\"connect-button\"\n              :disabled=\"!store.power.stickAvailable()\"\n              :title=\"i18n('CONNECT_POWERMETER_TOOLTIP')\"\n            >\n              {{ i18n('CONNECT_POWERMETER') }}\n            </button>\n            <button\n              @click=\"connect('debug')\"\n              class=\"connect-button\"\n              :title=\"i18n('CONNECT_DEBUG_TOOLTIP')\"\n            >\n              {{ i18n('CONNECT_DEBUG') }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.background {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  background-color: rgba(255, 255, 255, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: 15 !important;\n}\n.connect-button {\n  width: 10em;\n  display: block;\n  margin-top: 2em;\n  margin-left: auto;\n  margin-right: auto;\n}\n.modal {\n  display: contents;\n}\n.modal-content {\n  top: 10vh;\n}\n.modal-dialog {\n  z-index: 20 !important;\n}\n.button-container {\n  display: flex;\n}\nh1 {\n  font-size: 1.2em;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.power[data-v-743f672f] {
  position: absolute;
  right: 2em;
  bottom: 5em;
  width: 12em;
  border-radius: 0.5em;
}
.watts[data-v-743f672f] {
  width: 100%;
  text-align: center;
  display: block;
  font-size: 1.5em;
  font-weight: 700;
  padding: 0.2em;
}
input[data-v-743f672f] {
  width: 90%;
  margin: 5%;
}
h3[data-v-743f672f] {
  width: 100%;
  font-size: 0.7em;
  text-align: center;
  margin-top: 0.5em;
}
`, "",{"version":3,"sources":["webpack://./src/components/PowerSimulator.vue"],"names":[],"mappings":";AAoDA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,WAAW;EACX,oBAAoB;AACtB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,UAAU;EACV,UAAU;AACZ;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":["<script setup lang=\"ts\">\nimport { store } from '@/store';\nimport { ref, watch } from 'vue';\nimport { i18n } from '@/assets/i18n';\n\nconst MIN_WATT = 0;\nconst MAX_WATT = 500;\n\nconst props = defineProps({\n  debug: Boolean,\n  watt: Number\n});\n\nconst simulatedWatt = ref(MIN_WATT);\n\nwatch(simulatedWatt, () => store.power.setDebugWatt(simulatedWatt.value));\n\nfunction getBackgroundColor(): string {\n  const calcWatt = (props.debug ? simulatedWatt.value : props.watt) || 0;\n  const clamped = Math.max(0, Math.min(MAX_WATT, calcWatt));\n\n  const green = { r: 182, g: 242, b: 195 };\n  const yellow = { r: 255, g: 255, b: 102 };\n  const red = { r: 139, g: 0, b: 0 };\n\n  let start, end, t;\n\n  if (clamped <= MAX_WATT / 2) {\n    start = green;\n    end = yellow;\n    t = clamped / (MAX_WATT / 2);\n  } else {\n    start = yellow;\n    end = red;\n    t = (clamped - MAX_WATT / 2) / (MAX_WATT / 2);\n  }\n\n  return `background-color: rgba(${Math.round(start.r + (end.r - start.r) * t)}, ${Math.round(\n    start.g + (end.g - start.g) * t\n  )}, ${Math.round(start.b + (end.b - start.b) * t)}, 0.5)`;\n}\n</script>\n\n<template>\n  <div class=\"power\" :style=\"getBackgroundColor()\">\n    <h3>{{ i18n('POWERSIM_LABEL') }}</h3>\n    <span class=\"watts\">{{ watt + ' ' + i18n('POWERSIM_WATT') }}</span>\n    <input type=\"range\" v-if=\"debug\" v-model=\"simulatedWatt\" :min=\"MIN_WATT\" :max=\"MAX_WATT\" />\n  </div>\n</template>\n\n<style scoped>\n.power {\n  position: absolute;\n  right: 2em;\n  bottom: 5em;\n  width: 12em;\n  border-radius: 0.5em;\n}\n.watts {\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 1.5em;\n  font-weight: 700;\n  padding: 0.2em;\n}\ninput {\n  width: 90%;\n  margin: 5%;\n}\nh3 {\n  width: 100%;\n  font-size: 0.7em;\n  text-align: center;\n  margin-top: 0.5em;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
ul[data-v-510f157d] {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 2.9em;
  padding: 0.5em;
  background-color: aliceblue;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1);
}
li[data-v-510f157d] {
  display: inline-block;
  cursor: pointer;
  background-color: #eff1f3;
  border-radius: 0.2rem;
  padding: 0.4rem;
  font-size: 0.5em;
  width: 30%;
  margin: 0 1em;
  color: #4b647d;
}
li[data-v-510f157d]:hover {
  background-color: #e0e4e8;
}
.prompt-number[data-v-510f157d] {
  font-size: 2em;
  color: #c1c9d1;
  display: block;
  position: relative;
  top: -1rem;
  right: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  border-radius: 50%;
  background-color: #e0e4e8;
}
p[data-v-510f157d] {
  margin-bottom: 0;
  margin-top: -1.5rem;
  position: relative;
  font-size: 1.7em;
  z-index: 10;
}
`, "",{"version":3,"sources":["webpack://./src/components/PromptExamples.vue"],"names":[],"mappings":";AA0CA;EACE,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,2BAA2B;EAC3B,0BAA0B;EAC1B,kCAAkC;EAClC,0CAA0C;AAC5C;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,cAAc;AAChB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb","sourcesContent":["<script setup lang=\"ts\">\nimport { store } from '@/store';\n\nconst props = defineProps({\n  userInputting: Boolean\n});\n\nconst emit = defineEmits(['onSelectPrompt']);\n\ndocument.addEventListener('keydown', function (event) {\n  const key = Number(event.key);\n  if (\n    !props.userInputting &&\n    event.key != ' ' &&\n    !isNaN(key) &&\n    key <= store.getExamplePrompts().length\n  ) {\n    selectPrompt(key - 1);\n  }\n});\n\nfunction selectPrompt(index: number) {\n  const prompt = store.getExamplePrompts()[index];\n\n  window.setTimeout(() => emit('onSelectPrompt', prompt), 50);\n}\n</script>\n\n<template>\n  <ul>\n    <li v-for=\"(prompt, i) of store.getExamplePrompts()\" @click=\"selectPrompt(i)\">\n      <span class=\"prompt-number\">\n        {{ i + 1 }}\n      </span>\n      <p>\n        {{ prompt }}\n      </p>\n    </li>\n  </ul>\n</template>\n\n<style scoped>\nul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  bottom: 2.9em;\n  padding: 0.5em;\n  background-color: aliceblue;\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  background-color: rgba(255, 255, 255, 0.1);\n}\nli {\n  display: inline-block;\n  cursor: pointer;\n  background-color: #eff1f3;\n  border-radius: 0.2rem;\n  padding: 0.4rem;\n  font-size: 0.5em;\n  width: 30%;\n  margin: 0 1em;\n  color: #4b647d;\n}\nli:hover {\n  background-color: #e0e4e8;\n}\n.prompt-number {\n  font-size: 2em;\n  color: #c1c9d1;\n  display: block;\n  position: relative;\n  top: -1rem;\n  right: 1rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  text-align: center;\n  border-radius: 50%;\n  background-color: #e0e4e8;\n}\np {\n  margin-bottom: 0;\n  margin-top: -1.5rem;\n  position: relative;\n  font-size: 1.7em;\n  z-index: 10;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.background[data-v-48ed92b0] {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 15 !important;
}
.modal[data-v-48ed92b0] {
  display: contents;
  border-color: #4b647d;
}
p[data-v-48ed92b0] {
  color: #4b647d;
}
p.additional[data-v-48ed92b0] {
  font-size: 0.8em;
  margin-bottom: 0;
}
p.question[data-v-48ed92b0] {
  margin: 1em;
}
.modal-content[data-v-48ed92b0] {
  top: 10vh;
}
.modal-header[data-v-48ed92b0] {
  background-color: #fac300;
  color: #4b647d;
}
.modal-dialog[data-v-48ed92b0] {
  z-index: 20 !important;
}
h1[data-v-48ed92b0] {
  font-size: 1.2em;
}
.close-button[data-v-48ed92b0] {
  cursor: pointer;
  text-decoration: none;
  width: 1em;
  margin-left: auto;
}
.close-button[data-v-48ed92b0]:hover {
  opacity: 0.8;
}
`, "",{"version":3,"sources":["webpack://./src/components/QuizCardModal.vue"],"names":[],"mappings":";AA+BA;EACE,0BAA0B;EAC1B,kCAAkC;EAClC,0CAA0C;EAC1C,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,UAAU;EACV,iBAAiB;AACnB;AACA;EACE,YAAY;AACd","sourcesContent":["<script setup lang=\"ts\">\nimport { QuizCard } from '@/models';\nimport { i18n } from '@/assets/i18n';\nimport { store } from '@/store';\n\nconst emit = defineEmits(['onClose']);\nconst props = defineProps<{\n  card: QuizCard;\n}>();\n</script>\n\n<template>\n  <div class=\"background\" />\n  <div class=\"modal fade\" id=\"quizcard-modal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\">{{ i18n('QUIZCARD_TITLE') + card.id }}</h1>\n          <span class=\"close-button\" @click=\"emit('onClose')\">×</span>\n        </div>\n        <div class=\"modal-body\">\n          <p class=\"additional\">{{ i18n('QUIZCARD_DESCRIPTION') }}</p>\n          <p class=\"question\">{{ card.question[store.lang] }}</p>\n          <p class=\"additional\">{{ i18n('QUIZCARD_INSTRUCTION') }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n.background {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  background-color: rgba(255, 255, 255, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: 15 !important;\n}\n.modal {\n  display: contents;\n  border-color: #4b647d;\n}\np {\n  color: #4b647d;\n}\np.additional {\n  font-size: 0.8em;\n  margin-bottom: 0;\n}\np.question {\n  margin: 1em;\n}\n.modal-content {\n  top: 10vh;\n}\n.modal-header {\n  background-color: #fac300;\n  color: #4b647d;\n}\n.modal-dialog {\n  z-index: 20 !important;\n}\nh1 {\n  font-size: 1.2em;\n}\n.close-button {\n  cursor: pointer;\n  text-decoration: none;\n  width: 1em;\n  margin-left: auto;\n}\n.close-button:hover {\n  opacity: 0.8;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
h1[data-v-47aa12d3] {
  margin-top: 3em;
  margin-left: 2em;
}
p[data-v-47aa12d3] {
  margin-left: 5em;
}
ul[data-v-47aa12d3] {
  list-style: none;
  margin: 0 5em 1em;
  padding-left: 0;
  flex: 3;
}
li[data-v-47aa12d3] {
  margin: 2px;
  padding: 2px;
  cursor: pointer;
}
#connections[data-v-47aa12d3] {
  max-width: 800px;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}
.connection-info[data-v-47aa12d3] {
  font-size: smaller;
  flex: 5;
}
button[data-v-47aa12d3] {
  margin: 0.5em auto;
  width: 10em;
  display: block;
}
`, "",{"version":3,"sources":["webpack://./src/components/Settings.vue"],"names":[],"mappings":";AAgDA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,OAAO;AACT;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,QAAQ;EACR,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,OAAO;AACT;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;AAChB","sourcesContent":["<script setup lang=\"ts\">\nimport { i18n } from '@/assets/i18n';\nimport { ref } from 'vue';\nimport { ENV } from '../../env';\nimport { Connection, store } from '../store';\nconst PACKAGE = require('../../package.json');\nconst version = PACKAGE.version;\nconst emit = defineEmits(['onClose']);\n\nconst settings: Connection[] = ENV;\nlet selected = ref<{ [key: string]: string }>(store.connection);\n\nfunction close(): void {\n  emit('onClose');\n}\n\nfunction select(c: Connection): void {\n  selected.value = c;\n  c && store.setConnection(c);\n}\n\nfunction isSelected(c: Connection): boolean {\n  return c.NAME === selected.value?.NAME;\n}\n\nfunction getField(key: string) {\n  return selected.value[key];\n}\n</script>\n\n<template>\n  <h1>{{ i18n('SETTINGS') }}</h1>\n  <p>{{ i18n('VERSION_LABEL') }} {{ version }}</p>\n  <div id=\"connections\">\n    <ul>\n      <li v-for=\"connection of settings\" @click=\"select(connection)\">\n        <input type=\"radio\" :checked=\"isSelected(connection)\" /> {{ connection.NAME }}\n      </li>\n    </ul>\n    <ul class=\"connection-info\">\n      <li v-for=\"key of Object.keys(selected)\">{{ key }}: {{ getField(key) }}</li>\n    </ul>\n  </div>\n\n  <button @click=\"close\">{{ i18n('CLOSE') }}</button>\n</template>\n\n<style scoped>\nh1 {\n  margin-top: 3em;\n  margin-left: 2em;\n}\np {\n  margin-left: 5em;\n}\nul {\n  list-style: none;\n  margin: 0 5em 1em;\n  padding-left: 0;\n  flex: 3;\n}\nli {\n  margin: 2px;\n  padding: 2px;\n  cursor: pointer;\n}\n#connections {\n  max-width: 800px;\n  display: flex;\n  gap: 1em;\n  flex-wrap: wrap;\n}\n.connection-info {\n  font-size: smaller;\n  flex: 5;\n}\nbutton {\n  margin: 0.5em auto;\n  width: 10em;\n  display: block;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./env.ts"
/*!****************!*\
  !*** ./env.ts ***!
  \****************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENV: () => (/* binding */ ENV)
/* harmony export */ });
const ENV = [
    {
        NAME: 'BeeChat',
        BASE_URL: 'https://inference.mlmp.ti.bfh.ch',
        ENDPOINT: '/api/v1/chat/completions',
        MODEL: 'gpt-oss:120b',
        TOKEN: '' // insert your TOKEN here
    },
    {
        NAME: 'LM Studio (lokal)',
        BASE_URL: 'http://localhost:1234',
        ENDPOINT: '/v1/chat/completions',
        MODEL: 'gpt-oss:120b',
        TOKEN: '' // 'not_needed_for_localhost'
    },
    {
        NAME: 'OpenAI (ChatGPT)',
        BASE_URL: 'https://api.openai.com',
        ENDPOINT: '/v1/chat/completions',
        MODEL: 'gpt-5.6-luna', // 'gpt-3.5-turbo',
        TOKEN: '' // insert token here
    }
];


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=script&setup=true&lang=ts"
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ "./env.ts");
/* harmony import */ var _components_AuthForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AuthForm.vue */ "./src/components/AuthForm.vue");
/* harmony import */ var _components_ConnectModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ConnectModal.vue */ "./src/components/ConnectModal.vue");
/* harmony import */ var _components_Settings_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Settings.vue */ "./src/components/Settings.vue");
/* harmony import */ var _components_Chat_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Chat.vue */ "./src/components/Chat.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store.ts");
/* harmony import */ var _components_PowerSimulator_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PowerSimulator.vue */ "./src/components/PowerSimulator.vue");
/* harmony import */ var _components_QuizCardModal_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/QuizCardModal.vue */ "./src/components/QuizCardModal.vue");
/* harmony import */ var _assets_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/i18n */ "./src/assets/i18n.ts");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'App',
    setup(__props, { expose: __expose }) {
        __expose();
        const version = (__webpack_require__(/*! ../package.json */ "./package.json").version);
        const token = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,_store__WEBPACK_IMPORTED_MODULE_6__.getPersisted)(_store__WEBPACK_IMPORTED_MODULE_6__.STORE_KEY.TOKEN) || _env__WEBPACK_IMPORTED_MODULE_1__.ENV[0].TOKEN);
        const error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        const percent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const showCardModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const showSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        document.addEventListener('keydown', function (event) {
            if (showCardModal.value && event.key == 'Enter') {
                showCardModal.value = false;
            }
            else if (event.key == 'Enter' && _store__WEBPACK_IMPORTED_MODULE_6__.store.textInput == '') {
                showCard();
            }
        });
        // fast hack for displaying settings
        showSettings.value = window.location.search.includes('settings=true');
        /**
         * Calculates the header buttons
         */
        function getHeaderButtons() {
            return [
                {
                    icon: '🀙',
                    title: _store__WEBPACK_IMPORTED_MODULE_6__.store.cardDrawn ? (0,_assets_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n)('NEW_CARD') : (0,_assets_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n)('SHOW_CARD'),
                    action: showCard,
                    style: _store__WEBPACK_IMPORTED_MODULE_6__.store.cardDrawn
                        ? 'text-shadow: #fac300 0px 0 3px; line-height: 1.8em;'
                        : 'line-height: 1.8em;'
                },
                {
                    icon: '⟲',
                    title: (0,_assets_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n)('RESET'),
                    action: resetUser,
                    style: ''
                },
                {
                    icon: _store__WEBPACK_IMPORTED_MODULE_6__.store.lang === _store__WEBPACK_IMPORTED_MODULE_6__.LANG.DE ? '🇩🇪' : '🇫🇷',
                    title: (0,_assets_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n)('LANGUAGE'),
                    action: toggleLanguage,
                    style: 'filter: saturate(0)'
                }
                // {
                //   icon: '⚙︎',
                //   title: 'Einstellungen',
                //   action: () => (showSettings.value = !showSettings.value),
                //   style: '',
                // },
            ];
        }
        /**
         * Sets the token recieved from authentication
         * @param t    object with the new token and a boolean value
         *             that defines if the token should be persistet to local storage
         */
        function setToken(t) {
            token.value = t.token;
            if (t.persist) {
                (0,_store__WEBPACK_IMPORTED_MODULE_6__.persist)(_store__WEBPACK_IMPORTED_MODULE_6__.STORE_KEY.TOKEN, token.value);
            }
        }
        /**
         * Toggles the language between DE and FR
         */
        function toggleLanguage() {
            switch (_store__WEBPACK_IMPORTED_MODULE_6__.store.lang) {
                case _store__WEBPACK_IMPORTED_MODULE_6__.LANG.DE:
                    _store__WEBPACK_IMPORTED_MODULE_6__.store.lang = _store__WEBPACK_IMPORTED_MODULE_6__.LANG.FR;
                    break;
                case _store__WEBPACK_IMPORTED_MODULE_6__.LANG.FR:
                    _store__WEBPACK_IMPORTED_MODULE_6__.store.lang = _store__WEBPACK_IMPORTED_MODULE_6__.LANG.DE;
                    break;
            }
        }
        /**
         * Resets the app to start with a new user
         */
        function resetUser() {
            if (confirm((0,_assets_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n)('RESET_USER'))) {
                _store__WEBPACK_IMPORTED_MODULE_6__.store.resetUser();
            }
        }
        /**
         * Resets the whole app
         */
        function reset() {
            _store__WEBPACK_IMPORTED_MODULE_6__.store.resetUser();
            error.value = undefined;
            token.value = _env__WEBPACK_IMPORTED_MODULE_1__.ENV[0].TOKEN;
        }
        /**
         * Draws a new quiz card and sets the example prompts.
         */
        function showCard() {
            _store__WEBPACK_IMPORTED_MODULE_6__.store.drawQuizCard();
            showCardModal.value = true;
        }
        /**
         * Closes the settings window
         */
        function closeSettings() {
            showSettings.value = false;
            window.location.search = 'settings=' + showSettings.value;
        }
        /**
         * Handles an error and displays it to the user
         * @param error   the error message to display to the user
         */
        function handleError(e = (0,_assets_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n)('UNKNOWN_ERROR')) {
            error.value = e;
        }
        /**
         * Calculates the css opacity for a given toast message
         * @param i the position of the toast message
         */
        function getToastOpacity(i) {
            return 'opacity: ' + (i + 1) / _store__WEBPACK_IMPORTED_MODULE_6__.store.toasts.length;
        }
        const __returned__ = { version, token, error, percent, showCardModal, showSettings, getHeaderButtons, setToken, toggleLanguage, resetUser, reset, showCard, closeSettings, handleError, getToastOpacity, AuthForm: _components_AuthForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"], ConnectModal: _components_ConnectModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"], Settings: _components_Settings_vue__WEBPACK_IMPORTED_MODULE_4__["default"], Chat: _components_Chat_vue__WEBPACK_IMPORTED_MODULE_5__["default"], get store() { return _store__WEBPACK_IMPORTED_MODULE_6__.store; }, PowerSimulator: _components_PowerSimulator_vue__WEBPACK_IMPORTED_MODULE_7__["default"], QuizCardModal: _components_QuizCardModal_vue__WEBPACK_IMPORTED_MODULE_8__["default"], get i18n() { return _assets_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=script&setup=true&lang=ts"
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/i18n */ "./src/assets/i18n.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'AuthForm',
    emits: ['onToken', 'onError'],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const emit = __emit;
        const token = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
        const persist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        // TODO: very basic validation, update this later
        function isValid(token) {
            return Promise.resolve(token.length > 0);
        }
        function setToken() {
            isValid(token.value).then((valid) => {
                if (valid) {
                    emit('onToken', {
                        token: token.value,
                        persist: persist.value
                    });
                }
            });
        }
        function togglePersist() {
            if (persist.value) {
                persist.value = false;
            }
            else {
                const confirm = window.confirm((0,_assets_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n)('AUTH_CONFIRM'));
                window.setTimeout(() => (persist.value = confirm), 1); // hack necessary to set negative answer when user checked checkbox and said no in prompt
            }
        }
        const __returned__ = { emit, token, persist, isValid, setToken, togglePersist, get i18n() { return _assets_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n; }, get store() { return _store__WEBPACK_IMPORTED_MODULE_2__.store; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=script&setup=true&lang=ts"
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models */ "./src/models.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/dist/markdown-it.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store.ts");
/* harmony import */ var _toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/toastService */ "./src/toastService.ts");
/* harmony import */ var _PromptExamples_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PromptExamples.vue */ "./src/components/PromptExamples.vue");
/* harmony import */ var _assets_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/i18n */ "./src/assets/i18n.ts");









// define props
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'Chat',
    props: {
        token: { type: String, required: true },
        percent: { type: Number, required: true }
    },
    emits: ['onAnswer', 'onError'],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const props = __props;
        const md = (0,markdown_it__WEBPACK_IMPORTED_MODULE_3__["default"])({
            html: true,
            linkify: true,
            typographer: true
        });
        // define events
        const emit = __emit;
        const chat = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef)('chat-list');
        const loadingPercent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const userInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const chatInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        let usage = -1;
        let inputTimeout = -1;
        const loadingStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return ('filter: blur(' +
                (10 - Math.round(loadingPercent.value / 10)) +
                'px);opacity:' +
                (0.009 * loadingPercent.value + 0.1).toFixed(2) +
                ';');
        });
        /**
         * Estimates the energy usage for an answer, based on the number of output tokens. Samsi et al. estimated the energy usage with 3 - 4 Joule per token, which equals to ~0.001 Wh
         * @see Paper       Samsi et al. (2023): From Words to Watts: Benchmarking the Energy Costs of Large Language Model Inference. https://doi.org/10.48550/arXiv.2310.03003
         * @param tokens    number of output tokens of the answer
         * @returns         an estimation of energy (in Wh), based on the number of output tokens
         */
        function estimateEnergyUsage(tokens) {
            return (tokens * 3.5) / 3600; // 3.5 joules per token; 3600 J = 1 Wh
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
        function isLastMessage(index) {
            return _store__WEBPACK_IMPORTED_MODULE_4__.store.chatMessages.length - index === 1;
        }
        /**
         * Sends a message to the model, with all previous messages as context
         */
        function send() {
            if (_store__WEBPACK_IMPORTED_MODULE_4__.store.textInput == '')
                return;
            const message = {
                role: _models__WEBPACK_IMPORTED_MODULE_1__.USER_ROLE.USER,
                content: _store__WEBPACK_IMPORTED_MODULE_4__.store.textInput,
                loading: false
            };
            loadingPercent.value = 0;
            _store__WEBPACK_IMPORTED_MODULE_4__.store.chatMessages.push(message);
            const body = {
                model: _store__WEBPACK_IMPORTED_MODULE_4__.store.connection.MODEL,
                messages: [..._store__WEBPACK_IMPORTED_MODULE_4__.store.chatMessages]
            };
            _store__WEBPACK_IMPORTED_MODULE_4__.store.textInput = '';
            const answerMessage = {
                role: _models__WEBPACK_IMPORTED_MODULE_1__.USER_ROLE.AI,
                content: '...',
                loading: true,
                percent: 0
            };
            _toastService__WEBPACK_IMPORTED_MODULE_5__["default"].startToast();
            _store__WEBPACK_IMPORTED_MODULE_4__.store.chatMessages.push(answerMessage);
            usage = -1;
            chat.value.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });
            _store__WEBPACK_IMPORTED_MODULE_4__.store.startAndSubscribe(preEstimateUsage(), (ant) => {
                answerMessage.percent = Math.min(ant.percent, 100);
                loadingPercent.value = Math.min(ant.percent, 100);
                _toastService__WEBPACK_IMPORTED_MODULE_5__["default"].progressToast(answerMessage.percent, answerMessage.content !== '...', ant.value);
                if (ant.percent >= 100 && usage > 0) {
                    _toastService__WEBPACK_IMPORTED_MODULE_5__["default"].energyToast(usage);
                }
            });
            const time = Date.now();
            axios__WEBPACK_IMPORTED_MODULE_2__["default"]
                .post(_store__WEBPACK_IMPORTED_MODULE_4__.store.connection.BASE_URL + _store__WEBPACK_IMPORTED_MODULE_4__.store.connection.ENDPOINT, body, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + props.token
                }
            })
                .then((result) => {
                const duration = Math.round((Date.now() - time) / 1000);
                usage = estimateEnergyUsage(result.data.usage.completion_tokens);
                _store__WEBPACK_IMPORTED_MODULE_4__.store.setTarget(usage);
                console.log('Energie verbraucht: ' +
                    usage.toFixed(2) +
                    ' Wh in ' +
                    duration +
                    ' Sekunden. \nDas benötigt eine Durchschnittsleistung von ' +
                    Math.round((3600 * usage) / duration) +
                    ' Watt.');
                answerMessage.content = result.data.choices[0].message.content.replaceAll('ß', 'ss');
                answerMessage.loading = false;
                // we need to do this, or vue won't detect the update...
                _store__WEBPACK_IMPORTED_MODULE_4__.store.chatMessages.pop();
                _store__WEBPACK_IMPORTED_MODULE_4__.store.chatMessages.push(answerMessage);
                chat.value.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });
                emit('onAnswer', answerMessage);
            })
                .catch((e) => {
                console.error(e);
                _toastService__WEBPACK_IMPORTED_MODULE_5__["default"].abort();
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
        function setPrompt(prompt) {
            if (!_store__WEBPACK_IMPORTED_MODULE_4__.store.chatMessages[_store__WEBPACK_IMPORTED_MODULE_4__.store.chatMessages.length - 1]?.loading) {
                _store__WEBPACK_IMPORTED_MODULE_4__.store.textInput = prompt;
                chatInput.value?.focus();
            }
        }
        const __returned__ = { props, md, emit, chat, loadingPercent, userInput, chatInput, get usage() { return usage; }, set usage(v) { usage = v; }, get inputTimeout() { return inputTimeout; }, set inputTimeout(v) { inputTimeout = v; }, loadingStyle, estimateEnergyUsage, preEstimateUsage, isLastMessage, send, inputting, setPrompt, get store() { return _store__WEBPACK_IMPORTED_MODULE_4__.store; }, PromptExamples: _PromptExamples_vue__WEBPACK_IMPORTED_MODULE_6__["default"], get i18n() { return _assets_i18n__WEBPACK_IMPORTED_MODULE_7__.i18n; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=script&setup=true&lang=ts"
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=script&setup=true&lang=ts ***!
  \***************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store.ts");
/* harmony import */ var _assets_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/i18n */ "./src/assets/i18n.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'ConnectModal',
    emits: ['onError'],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const emit = __emit;
        function connect(type) {
            try {
                _store__WEBPACK_IMPORTED_MODULE_1__.store.connect(type);
            }
            catch (e) {
                emit('onError', JSON.stringify(e, null, 2));
            }
        }
        const __returned__ = { emit, connect, get store() { return _store__WEBPACK_IMPORTED_MODULE_1__.store; }, get i18n() { return _assets_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=script&setup=true&lang=ts"
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./src/store.ts");
/* harmony import */ var _assets_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/i18n */ "./src/assets/i18n.ts");




const MIN_WATT = 0;
const MAX_WATT = 500;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'PowerSimulator',
    props: {
        debug: Boolean,
        watt: Number
    },
    setup(__props, { expose: __expose }) {
        __expose();
        const props = __props;
        const simulatedWatt = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(MIN_WATT);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(simulatedWatt, () => _store__WEBPACK_IMPORTED_MODULE_1__.store.power.setDebugWatt(simulatedWatt.value));
        function getBackgroundColor() {
            const calcWatt = (props.debug ? simulatedWatt.value : props.watt) || 0;
            const clamped = Math.max(0, Math.min(MAX_WATT, calcWatt));
            const green = { r: 182, g: 242, b: 195 };
            const yellow = { r: 255, g: 255, b: 102 };
            const red = { r: 139, g: 0, b: 0 };
            let start, end, t;
            if (clamped <= MAX_WATT / 2) {
                start = green;
                end = yellow;
                t = clamped / (MAX_WATT / 2);
            }
            else {
                start = yellow;
                end = red;
                t = (clamped - MAX_WATT / 2) / (MAX_WATT / 2);
            }
            return `background-color: rgba(${Math.round(start.r + (end.r - start.r) * t)}, ${Math.round(start.g + (end.g - start.g) * t)}, ${Math.round(start.b + (end.b - start.b) * t)}, 0.5)`;
        }
        const __returned__ = { MIN_WATT, MAX_WATT, props, simulatedWatt, getBackgroundColor, get i18n() { return _assets_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=script&setup=true&lang=ts"
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./src/store.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'PromptExamples',
    props: {
        userInputting: Boolean
    },
    emits: ['onSelectPrompt'],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const props = __props;
        const emit = __emit;
        document.addEventListener('keydown', function (event) {
            const key = Number(event.key);
            if (!props.userInputting &&
                event.key != ' ' &&
                !isNaN(key) &&
                key <= _store__WEBPACK_IMPORTED_MODULE_1__.store.getExamplePrompts().length) {
                selectPrompt(key - 1);
            }
        });
        function selectPrompt(index) {
            const prompt = _store__WEBPACK_IMPORTED_MODULE_1__.store.getExamplePrompts()[index];
            window.setTimeout(() => emit('onSelectPrompt', prompt), 50);
        }
        const __returned__ = { props, emit, selectPrompt, get store() { return _store__WEBPACK_IMPORTED_MODULE_1__.store; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=script&setup=true&lang=ts"
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/i18n */ "./src/assets/i18n.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./src/store.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'QuizCardModal',
    props: {
        card: { type: Object, required: true }
    },
    emits: ['onClose'],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const emit = __emit;
        const props = __props;
        const __returned__ = { emit, props, get i18n() { return _assets_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n; }, get store() { return _store__WEBPACK_IMPORTED_MODULE_2__.store; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=script&setup=true&lang=ts"
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/i18n */ "./src/assets/i18n.ts");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../env */ "./env.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/store.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'Settings',
    emits: ['onClose'],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const PACKAGE = __webpack_require__(/*! ../../package.json */ "./package.json");
        const version = PACKAGE.version;
        const emit = __emit;
        const settings = _env__WEBPACK_IMPORTED_MODULE_2__.ENV;
        let selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(_store__WEBPACK_IMPORTED_MODULE_3__.store.connection);
        function close() {
            emit('onClose');
        }
        function select(c) {
            selected.value = c;
            c && _store__WEBPACK_IMPORTED_MODULE_3__.store.setConnection(c);
        }
        function isSelected(c) {
            return c.NAME === selected.value?.NAME;
        }
        function getField(key) {
            return selected.value[key];
        }
        const __returned__ = { PACKAGE, version, emit, settings, get selected() { return selected; }, set selected(v) { selected = v; }, close, select, isSelected, getField, get i18n() { return _assets_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&ts=true"
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["src", "title"];
const _hoisted_2 = { class: "header-buttons" };
const _hoisted_3 = ["onClick", "title"];
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = {
    key: 0,
    class: "error"
};
const _hoisted_7 = { class: "error-buttons" };
const _hoisted_8 = { class: "toast-list" };
const _hoisted_9 = {
    class: "alert alert-info",
    role: "alert"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                src: __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png"),
                alt: "Logo Berner Fachhochschule",
                class: "logo",
                title: 'enerKI Version: ' +
                    $setup.version +
                    '\nModel: ' +
                    $setup.store.connection.BASE_URL +
                    ' > ' +
                    $setup.store.connection.MODEL
            }, null, 8 /* PROPS */, _hoisted_1),
            _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "enerKI", -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.getHeaderButtons(), (b) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
                        onClick: b.action,
                        title: b.title,
                        class: "header-button",
                        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(b.style)
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(b.icon), 13 /* TEXT, STYLE, PROPS */, _hoisted_3));
                }), 256 /* UNKEYED_FRAGMENT */))
            ])
        ]),
        ($setup.showSettings)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Settings"], {
                key: 0,
                onOnClose: $setup.closeSettings
            }))
            : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" if no token is set, we show the auth form "),
                ($setup.token?.length == 0)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AuthForm"], {
                        key: 0,
                        onOnToken: $setup.setToken,
                        onOnError: $setup.handleError
                    }))
                    : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_5, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" display error message "),
                        ($setup.error)
                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('ERROR')), 1 /* TEXT */),
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.error) + " ", 1 /* TEXT */),
                                _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)),
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", { onClick: $setup.reset }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('RESET')), 1 /* TEXT */),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                                        onClick: _cache[0] || (_cache[0] = ($event) => ($setup.error = ''))
                                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('OK')), 1 /* TEXT */)
                                ])
                            ]))
                            : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" chat window "),
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Chat"], {
                                    token: $setup.token,
                                    percent: $setup.percent,
                                    onOnError: $setup.handleError
                                }, null, 8 /* PROPS */, ["token", "percent"])
                            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" window for power simulation / debug "),
                        ($setup.store.connected && $setup.store.isPedalling() && !$setup.error)
                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["PowerSimulator"], {
                                key: 2,
                                debug: $setup.store.isDebug,
                                watt: Math.round($setup.store.power.getValues().value)
                            }, null, 8 /* PROPS */, ["debug", "watt"]))
                            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                    ])),
                (!$setup.store.connected)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ConnectModal"], {
                        key: 2,
                        onOnError: $setup.handleError
                    }))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                ($setup.store.activeCard && $setup.showCardModal)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["QuizCardModal"], {
                        key: 3,
                        card: $setup.store.activeCard,
                        onOnClose: _cache[1] || (_cache[1] = ($event) => ($setup.showCardModal = false))
                    }, null, 8 /* PROPS */, ["card"]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.store.toasts, (toast, i) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.getToastOpacity(i))
                        }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(toast), 1 /* TEXT */)
                        ], 4 /* STYLE */));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ])
            ]))
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=template&id=2bd044bc&scoped=true&ts=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=template&id=2bd044bc&scoped=true&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { action: "#" };
const _hoisted_2 = { class: "token-box" };
const _hoisted_3 = ["placeholder"];
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "persist-box" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.token) = $event)),
                placeholder: $setup.i18n('ENTER_TOKEN') + $setup.store.connection.NAME,
                style: { "width": "100%" }
            }, null, 8 /* PROPS */, _hoisted_3), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.token]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: $setup.setToken,
                type: "submit",
                disabled: $setup.token.length == 0
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('SAVE').toUpperCase()), 9 /* TEXT, PROPS */, _hoisted_4)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.persist) = $event)),
                onClick: $setup.togglePersist
            }, null, 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.persist]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('AUTH_PERSIST')), 1 /* TEXT */)
        ])
    ]));
}


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=template&id=2bc3d388&scoped=true&ts=true"
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=template&id=2bc3d388&scoped=true&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
    ref: "chat-list",
    class: "chat-list"
};
const _hoisted_2 = {
    key: 0,
    class: "spinner-border",
    role: "status"
};
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
    action: "#",
    ref: "input-form"
};
const _hoisted_5 = ["placeholder"];
const _hoisted_6 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_1, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.store.chatMessages, (message, i) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('message-bubble chat-' + message.role),
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(message.percent != undefined && message.percent < 100 && $setup.isLastMessage(i)
                        ? $setup.loadingStyle
                        : '')
                }, [
                    (message.loading)
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [...(_cache[1] || (_cache[1] = [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "visually-hidden" }, "Loading...", -1 /* CACHED */)
                            ]))]))
                        : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                            key: 1,
                            innerHTML: $setup.md.render(message.content)
                        }, null, 8 /* PROPS */, _hoisted_3))
                ], 6 /* CLASS, STYLE */));
            }), 256 /* UNKEYED_FRAGMENT */)),
            _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", { style: { "height": "10em", "color": "white" } }, null, -1 /* CACHED */))
        ], 512 /* NEED_PATCH */),
        (!$setup.store.isPedalling() && $setup.store.getExamplePrompts().length > 0)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["PromptExamples"], {
                key: 0,
                onOnSelectPrompt: $setup.setPrompt,
                "user-inputting": $setup.userInput
            }, null, 8 /* PROPS */, ["user-inputting"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_4, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                autofocus: "",
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.store.textInput) = $event)),
                placeholder: $setup.i18n($setup.store.getExamplePrompts().length > 0 ? 'CHAT_PLACEHOLDER_PROMPTS' : 'CHAT_PLACEHOLDER'),
                onInput: $setup.inputting,
                ref: "chatInput"
            }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_5), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.store.textInput]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: $setup.send,
                type: "submit",
                disabled: $setup.store.isPedalling()
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('SEND').toUpperCase()), 9 /* TEXT, PROPS */, _hoisted_6)
        ], 512 /* NEED_PATCH */)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=template&id=5a6a7e93&scoped=true&ts=true"
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=template&id=5a6a7e93&scoped=true&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
    class: "modal fade",
    id: "connect-modal"
};
const _hoisted_2 = { class: "modal-dialog" };
const _hoisted_3 = { class: "modal-content" };
const _hoisted_4 = { class: "modal-header" };
const _hoisted_5 = { class: "modal-title" };
const _hoisted_6 = { class: "modal-body" };
const _hoisted_7 = {
    href: "https://github.com/bfh-pcdh/enerki/blob/main/SETUP.md",
    target: "_blank"
};
const _hoisted_8 = { class: "button-container" };
const _hoisted_9 = ["disabled", "title"];
const _hoisted_10 = ["title"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "background" }, null, -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('CONNECT_TITLE')), 1 /* TEXT */)
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('CONNECT_NOTCONNECTED')), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('CONNECT_INSTRUCTIONS')), 1 /* TEXT */)
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" button \n              @click=\"connect('heartRate')\"\n              :disabled=\"!store.heartRate.stickAvailable()\"\n              class=\"connect-button\">\n              Pulssensor verbinden\n            </button"),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                                onClick: _cache[0] || (_cache[0] = ($event) => ($setup.connect('power'))),
                                class: "connect-button",
                                disabled: !$setup.store.power.stickAvailable(),
                                title: $setup.i18n('CONNECT_POWERMETER_TOOLTIP')
                            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('CONNECT_POWERMETER')), 9 /* TEXT, PROPS */, _hoisted_9),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                                onClick: _cache[1] || (_cache[1] = ($event) => ($setup.connect('debug'))),
                                class: "connect-button",
                                title: $setup.i18n('CONNECT_DEBUG_TOOLTIP')
                            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('CONNECT_DEBUG')), 9 /* TEXT, PROPS */, _hoisted_10)
                        ])
                    ])
                ])
            ])
        ])
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=template&id=743f672f&scoped=true&ts=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=template&id=743f672f&scoped=true&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "watts" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        class: "power",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.getBackgroundColor())
    }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('POWERSIM_LABEL')), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.watt + ' ' + $setup.i18n('POWERSIM_WATT')), 1 /* TEXT */),
        ($props.debug)
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                key: 0,
                type: "range",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.simulatedWatt) = $event)),
                min: $setup.MIN_WATT,
                max: $setup.MAX_WATT
            }, null, 512 /* NEED_PATCH */)), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.simulatedWatt]
            ])
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 4 /* STYLE */));
}


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=template&id=510f157d&scoped=true&ts=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=template&id=510f157d&scoped=true&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["onClick"];
const _hoisted_2 = { class: "prompt-number" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", null, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.store.getExamplePrompts(), (prompt, i) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                onClick: ($event) => ($setup.selectPrompt(i))
            }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i + 1), 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(prompt), 1 /* TEXT */)
            ], 8 /* PROPS */, _hoisted_1));
        }), 256 /* UNKEYED_FRAGMENT */))
    ]));
}


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=template&id=48ed92b0&scoped=true&ts=true"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=template&id=48ed92b0&scoped=true&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
    class: "modal fade",
    id: "quizcard-modal"
};
const _hoisted_2 = { class: "modal-dialog" };
const _hoisted_3 = { class: "modal-content" };
const _hoisted_4 = { class: "modal-header" };
const _hoisted_5 = { class: "modal-title" };
const _hoisted_6 = { class: "modal-body" };
const _hoisted_7 = { class: "additional" };
const _hoisted_8 = { class: "question" };
const _hoisted_9 = { class: "additional" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "background" }, null, -1 /* CACHED */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('QUIZCARD_TITLE') + $props.card.id), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                            class: "close-button",
                            onClick: _cache[0] || (_cache[0] = ($event) => ($setup.emit('onClose')))
                        }, "×")
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('QUIZCARD_DESCRIPTION')), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.card.question[$setup.store.lang]), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('QUIZCARD_INSTRUCTION')), 1 /* TEXT */)
                    ])
                ])
            ])
        ])
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ },

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { id: "connections" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["checked"];
const _hoisted_4 = { class: "connection-info" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('SETTINGS')), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('VERSION_LABEL')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.version), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.settings, (connection) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                        onClick: ($event) => ($setup.select(connection))
                    }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            type: "radio",
                            checked: $setup.isSelected(connection)
                        }, null, 8 /* PROPS */, _hoisted_3),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(connection.NAME), 1 /* TEXT */)
                    ], 8 /* PROPS */, _hoisted_2));
                }), 256 /* UNKEYED_FRAGMENT */))
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(Object.keys($setup.selected), (key) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(key) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getField(key)), 1 /* TEXT */));
                }), 256 /* UNKEYED_FRAGMENT */))
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", { onClick: $setup.close }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.i18n('CLOSE')), 1 /* TEXT */)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ },

/***/ "./src/antService.ts"
/*!***************************!*\
  !*** ./src/antService.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntService: () => (/* binding */ AntService),
/* harmony export */   HeartRateService: () => (/* binding */ HeartRateService),
/* harmony export */   PowerService: () => (/* binding */ PowerService)
/* harmony export */ });
/* harmony import */ var ant_plus_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ant-plus-next */ "./node_modules/ant-plus-next/dist/index.mjs");

/**
 * Abstract class as base for the actual ANT+ services
 *  -> see PowerService for bicycle power meter
 *  -> see HeartRateService for Heart rate sensor
 */
class AntService {
    stick;
    subscriptions = new Array();
    target = 0; // the target value
    total = 0; // the total effort since last reset
    value = 0; // the current effort
    constructor() {
        try {
            this.stick = new ant_plus_next__WEBPACK_IMPORTED_MODULE_0__.WebUsbStick();
            this.stick.on('shutdown', () => {
                console.log('Stick shutdown detected');
            });
            this.stick.on('unhandled', (data) => {
                console.warn('Unhandled event received:', data);
            });
        }
        catch (e) {
            console.log('caught an error', e);
        }
    }
    /**
     * Method to check if WebUSB is available in the browser and thus the
     * stick was initialized.
     * @returns     TRUE if the stick has been initialized
     *              FALSE if the stick could not have been initialized
     *                    (usually the case if the browser does not
     *                     support WebUSB (only Chrome does))
     */
    stickAvailable() {
        return this.stick != undefined;
    }
    /**
     * Launch sensor and connect stick
     * ⚠️ Keep in mind that this method MUST be called by user action!
     */
    connect() {
        try {
            this.stick?.on('startup', () => {
                console.log('Stick initialized successfully with sensor of type ' + typeof this.sensor + '.');
                this.sensor?.attach(0, 0);
            });
            this.stick?.open().then((o) => {
                console.log('stick opened', o);
                return () => {
                    if (this.stick) {
                        this.stick.close();
                    }
                };
            });
        }
        catch (e) {
            console.error('USB Connection failed', e);
        }
    }
    /**
     * Starts a new measurement and subscribes to it.
     * Cave: Resets existing subscriptions!
     * @param target            the target value, in the same unit as the total value for the respective sensor
     * @param callback          a function that is triggered every time the sensor delivers a new value
     *                          the callback function is called with these parameters:
     *                            - target:     the currently set target
     *                            - total:      the current accumulated total of effort
     *                            - value:      the current value reported by the sensor
     *                            - percent:    the percentage of the target reached yet
     * @param autoUnsubscribe?  if the subscription should end when more than 100% is reached
     * @returns                 the index of the subscription (use to unsubscribe)
     */
    startAndSubscribe(target, callback, autoUnsubscribe) {
        if (this.total < this.target) {
            console.warn('Reset existing measurement that was not completed yet!');
        }
        this.reset(target);
        const subscriptionID = this.subscribe((e) => {
            if (autoUnsubscribe) {
                if (e.percent > 100) {
                    this.unsubscribe(subscriptionID);
                }
                callback({
                    ...e,
                    percent: Math.min(e.percent, 100)
                });
            }
            else {
                callback(e);
            }
        });
        return subscriptionID;
    }
    /**
     * Set a new target value
     * @param target    the target value, in the same unit as the total value for the respective sensor
     */
    setTarget(target) {
        this.target = target;
    }
    /**
     * Subscribe to updates on the sensor.
     * @param callback  a function that is triggered every time the sensor delivers a new value
     *                  the callback function is called with these parameters:
     *                   - target:     the currently set target
     *                   - total:      the current accumulated total of effort
     *                   - value:      the current value reported by the sensor
     *                   - percent:    the percentage of the target reached yet
     * @returns         the index of the subscription (use to unsubscribe)
     */
    subscribe(callback) {
        return this.subscriptions.push(callback) - 1;
    }
    /**
     * Get the current values of the sensor (from last update)
     * @returns target:     the currently set target
     *          total:      the current accumulated total of effort
     *          value:      the current value reported by the sensor
     *          percent:    the percentage of the target reached yet
     */
    getValues() {
        return {
            target: this.target,
            total: this.total,
            value: this.value,
            percent: this.total / this.target * 100
        };
    }
    /**
     * Unsubscribe from a sensor
     * @param subscriptionIndex the index of your subscription (as returned by subscribe())
     */
    unsubscribe(subscriptionIndex) {
        this.subscriptions.splice(subscriptionIndex, 1);
    }
    /**
     * Updates the value and total and notifies the subscribers (only if a total is set, to avoid division by 0)
     * @param newValue  new current value
     * @param newTotal  new total value
     */
    updateValue(newValue, newTotal) {
        this.value = newValue;
        this.total = newTotal;
        if (this.target > 0) {
            this.subscriptions.forEach((sub) => sub({
                target: this.target,
                total: this.total,
                value: this.value,
                percent: Math.round(this.total / this.target * 1000) / 10
            }));
        }
        else {
            console.warn('No target set yet, do not notify subscribers!');
        }
    }
    /**
     * Reset the measurements
     * @param target?   Optional value to set new target (default is resetting target to 0)
     */
    reset(target = 0) {
        this.total = 0;
        this.value = 0;
        this.target = target;
    }
}
;
/**
 * Service for reading a bicycle power meter.
 * @param settings?     optional parameter, set it to {debug: true} to use generated data instead of real bicycle sensor data
 *                      for when no sensor is connected to the usb stick (stick needs to be present nonetheless)
 */
class PowerService extends AntService {
    debug = false;
    debugWatt = 0;
    sensor;
    unit = 'Wh';
    lastBeat = 0; // Timestamp in milliseconds
    accumulatedPower = 0; // accumulated power
    /**
     * @param settings?  optional parameter, set it to {debug: true} to use generated data instead of real bicycle sensor data
     *                   for when no sensor is connected to the usb stick (stick needs to be present nonetheless)
     */
    constructor(settings) {
        super();
        if (settings) {
            this.debug = settings.debug;
        }
        if (this.stick) {
            this.sensor = new ant_plus_next__WEBPACK_IMPORTED_MODULE_0__.BicyclePowerSensor(this.stick);
        }
    }
    /**
     * Resets the measurements
     */
    reset(target = 0) {
        super.reset(target);
        this.lastBeat = 0;
        this.accumulatedPower = 0;
        this.debugWatt = 0;
    }
    /**
     * Update the debug watt value. Only use if in debug mode, not when a real sensor is connected.
     * This value is then used for generating fake data.
     * @param watt  the amount of watt to be used
     */
    setDebugWatt(watt) {
        if (this.debug) {
            this.debugWatt = watt;
        }
        else {
            console.warn('Tried to set watt, but not in debug mode. This is ignored.');
        }
    }
    /**
     * Updates the settings
     * @param settings debug: set to true if you are debugging without a real sensor
     */
    setSettings(settings) {
        this.debug = settings.debug;
    }
    /**
     * Fakes data based on the current set debugWatt value
     * Updates every 1250 ms
     */
    fakeData() {
        if (this.lastBeat > 0) {
            this.updateValue(this.debugWatt, this.total + this.getWattHours(this.debugWatt));
        }
        this.lastBeat = Date.now();
        setTimeout(() => this.fakeData(), 1250);
    }
    /**
     * Launch sensor and connect stick (or use test data if in debug mode)
     * ⚠️ Keep in mind that this method MUST be called by user action!
     */
    connect() {
        console.log('connect', this.debug, this.sensor);
        if (this.debug) { // debug mode with fake data
            this.fakeData();
        }
        else if (this.sensor) { // prod mode with actual data from power sensor
            super.connect();
            this.sensor.on('powerData', (data) => {
                // the pedals keep sending previous watt value if they are idling (instead of 0), so we have to check if the 
                // user is actually pedalling
                const idle = (this.accumulatedPower == data.AccumulatedPower);
                const actualPower = idle
                    ? 0
                    : data.Power;
                this.accumulatedPower = data.AccumulatedPower;
                if (this.lastBeat > 0) {
                    this.updateValue(actualPower, this.total + this.getWattHours(actualPower));
                }
                this.lastBeat = Date.now();
            });
        }
    }
    /**
     * Calculates the effort in watthours since the last update (assuming watt was constant)
     * @param watts     the power measured since the last update in watt
     * @returns         the watt hours that were generated since the last update
     */
    getWattHours(watts) {
        const timeDiff = (Date.now() - this.lastBeat) / 1000 / 60 / 60; // hours passed
        return timeDiff * watts;
    }
}
/**
 * Service for reading a heart rate monitor.
 * ⚠️ Please mind, that the constructor must be triggered by an user action to work in the Browser
 */
class HeartRateService extends AntService {
    sensor;
    unit = 'beats';
    /**
     * Service for reading a heart rate monitor.
     */
    constructor() {
        super();
        if (this.stick) {
            this.sensor = new ant_plus_next__WEBPACK_IMPORTED_MODULE_0__.HeartRateSensor(this.stick);
            this.sensor.on('heartRateData', (data) => {
                this.updateValue(data.ComputedHeartRate, data.BeatCount);
            });
        }
    }
}


/***/ },

/***/ "./src/assets/i18n.ts"
/*!****************************!*\
  !*** ./src/assets/i18n.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i18n: () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store.ts");

function i18n(key) {
    return Object.hasOwn(KEYS, key)
        ? KEYS[key][_store__WEBPACK_IMPORTED_MODULE_0__.store.lang]
        : KEYS.NOTFOUND[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang];
}
const KEYS = {
    NOTFOUND: {
        de: '[nicht übersetzt]',
        fr: '[non traduit]'
    },
    RESET_USER: {
        de: 'Soll enerKI für eine·n neue·n Benutzer·in zurückgesetzt werden?',
        fr: 'Faut-il réinitialiser enerKI pour un·e utilisateur·rice ?'
    },
    ENTER_TOKEN: {
        de: 'Bitte gib das Token ein für: ',
        fr: 'Veuillez saisir le token correspondant à : '
    },
    NEW_CARD: {
        de: 'Neue Karte ziehen',
        fr: 'Tirer une nouvelle carte'
    },
    SHOW_CARD: {
        de: 'Karte nochmal anzeigen',
        fr: 'Afficher la carte à nouveau'
    },
    RESET: {
        de: 'zurücksetzen',
        fr: 'réinitialiser'
    },
    LANGUAGE: {
        de: 'Sprache',
        fr: 'Langue'
    },
    ERROR: {
        de: 'Leider ist etwas schief gegangen:',
        fr: 'Une erreur s’est produite :'
    },
    UNKNOWN_ERROR: {
        de: 'Unbekannter Fehler',
        fr: 'Erreur inconnue'
    },
    OK: {
        de: 'OK',
        fr: 'OK'
    },
    SAVE: {
        de: 'Speichern',
        fr: 'Enregistrer'
    },
    SEND: {
        de: 'Senden',
        fr: 'Envoyer'
    },
    QUIZCARD_TITLE: {
        de: 'Quiz-Karte #',
        fr: 'Carte Quiz #'
    },
    QUIZCARD_DESCRIPTION: {
        de: 'Versuche, diese Frage zu beantworten:',
        fr: 'Essaie de répondre à cette question :'
    },
    QUIZCARD_INSTRUCTION: {
        de: 'Drücke [Enter] um einen Prompt auszuwählen oder einen eigenen Prompt einzugeben.',
        fr: 'Appuie sur [Enter] pour choisir un prompt ou en saisir un personnalisé.'
    },
    POWERSIM_LABEL: {
        de: 'Wie stark trittst du in die Pedale?',
        fr: 'À quelle intensité pédales-tu ?'
    },
    POWERSIM_WATT: {
        de: 'Watt',
        fr: 'Watt'
    },
    CONNECT_TITLE: {
        de: 'Sensor verbinden',
        fr: 'Connecter le capteur'
    },
    CONNECT_NOTCONNECTED: {
        de: 'Es ist noch kein Sensor verbunden.',
        fr: 'Aucun capteur n’est encore connecté.'
    },
    CONNECT_INSTRUCTIONS: {
        de: 'Anleitung zum Einrichten',
        fr: 'Instructions de configuration'
    },
    CONNECT_POWERMETER: {
        de: 'Powermeter verbinden',
        fr: 'Connecter le powermètre'
    },
    CONNECT_POWERMETER_TOOLTIP: {
        de: 'Powermeter verbinden: Benötigt einen ANT+ USB-Adapter und kompatible Powermeter-Pedale',
        fr: 'Connecter le powermètre : nécessite un adaptateur USB ANT+ et des pédales powermètre compatibles'
    },
    CONNECT_DEBUG: {
        de: 'Ohne Sensor verwenden',
        fr: 'Utiliser sans capteur'
    },
    CONNECT_DEBUG_TOOLTIP: {
        de: 'Ohne Sensor verwenden: Im Debug-Modus wird ein Powermeter simuliert, um enerKI auch ohne Ergometer-Infrastruktur testen zu können.',
        fr: 'Utiliser sans capteur : en mode débogage, un powermètre est simulé pour tester enerKI sans infrastructure d’ergomètre.'
    },
    AUTH_CONFIRM: {
        de: '⚠️ Das Token wird unverschlüsselt gespeichert. Andere Websiten, die du mit diesem Browser besuchst, können das Token potenziell auslesen.' +
            '\n\nMöchtest du es trotzdem speichern?',
        fr: '⚠️ Le token sera stocké sans chiffrement. D’autres sites visités avec ce navigateur pourraient potentiellement le lire.' +
            '\n\nVeux-tu quand même l’enregistrer ?'
    },
    AUTH_PERSIST: {
        de: 'Das Token auf diesem Computer speichern',
        fr: 'Enregistrer le token sur cet ordinateur'
    },
    CHAT_PLACEHOLDER: {
        de: 'Gib hier deinen Text ein',
        fr: 'Saisis ton texte ici'
    },
    CHAT_PLACEHOLDER_PROMPTS: {
        de: 'Gib hier deinen Text ein oder wähle einen der Prompts oben aus',
        fr: 'Saisis ton texte ici ou choisis un des prompts ci-dessus'
    },
    SETTINGS: {
        de: 'Einstellungen (beta)',
        fr: 'Paramètres (beta)'
    },
    VERSION_LABEL: {
        de: 'enerKI Version:',
        fr: 'enerKI version :'
    },
    CLOSE: {
        de: 'schliessen',
        fr: 'fermer'
    }
};


/***/ },

/***/ "./src/assets/quizcards.ts"
/*!*********************************!*\
  !*** ./src/assets/quizcards.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUIZ: () => (/* binding */ QUIZ)
/* harmony export */ });
const QUIZ = [
    {
        id: '1',
        question: {
            de: 'Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
            fr: 'Combien d’énergie consomme en moyenne une requête ChatGPT ?'
        },
        prompts: {
            de: [
                'Kurze Antwort: Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
                'Ausführliche Antwort: Wie viel Energie verbraucht ein ChatGPT-Prompt im Durchschnitt?',
                'Verbraucht ein ChatGPT-Prompt so viel Energie wie eine LED-Lampe in einer Sekunde, ein Smartphone in zehn Sekunden oder ein Laptop in einer Minute?'
            ],
            fr: [
                'Réponse courte : Combien d’énergie consomme en moyenne une requête ChatGPT ?',
                'Réponse détaillée : Combien d’énergie consomme en moyenne une requête ChatGPT ?',
                'Une requête ChatGPT consomme-t-elle autant d’énergie qu’une ampoule LED en une seconde, qu’un smartphone en dix secondes ou qu’un ordinateur portable en une minute ?'
            ]
        }
    },
    {
        id: '2',
        question: {
            de: 'Wieviel CO₂ verursacht eine Google-Suche?',
            fr: 'Combien de CO₂ génère une recherche Google ?'
        },
        prompts: {
            de: [
                'Wie viel CO₂ entsteht bei einer durchschnittlichen Google-Suche?',
                'Was erzeugt mehr CO₂: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Erstelle eine Tabelle mit den wichtigsten Einfluss-Faktoren.',
                'Was erzeugt mehr CO₂: Eine Frage durch Google zu beantworten, oder mit einem KI-Modell? Halte die Antwort kurz.'
            ],
            fr: [
                'Combien de CO₂ est généré par une recherche Google moyenne ?',
                'Qu’est-ce qui génère plus de CO₂ : répondre à une question via Google ou via un modèle d’IA ? Crée un tableau avec les principaux facteurs d’influence.',
                'Qu’est-ce qui génère plus de CO₂ : répondre à une question via Google ou via un modèle d’IA ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '3',
        question: {
            de: 'Wie wirkt sich die steigende Nutzung energieintensiver digitaler Technologien langfristig auf die Gesundheit aus?',
            fr: 'Quel est l’impact à long terme de l’utilisation croissante des technologies numériques énergivores sur la santé ?'
        },
        prompts: {
            de: [
                'Neben dem ökologischen Fussabdruck: Welches Gesundheitsrisiko ist mit exzessiver digitaler Nutzung verbunden?',
                'Neben dem ökologischen Fussabdruck: Welches Gesundheitsrisiko ist mit exzessiver digitaler Nutzung verbunden? Mache mir eine ausführliche Analyse.',
                'Neben dem ökologischen Fussabdruck: Welches Gesundheitsrisiko ist mit exzessiver digitaler Nutzung verbunden? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'En dehors de l’empreinte écologique : quel risque pour la santé est lié à une utilisation excessive du numérique ?',
                'En dehors de l’empreinte écologique : quel risque pour la santé est lié à une utilisation excessive du numérique ? Fais une analyse détaillée.',
                'En dehors de l’empreinte écologique : quel risque pour la santé est lié à une utilisation excessive du numérique ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '4',
        question: {
            de: 'Um wie viel Grad hat sich die durchschnittliche Erdtemperatur seit der vorindustriellen Zeit erhöht?',
            fr: 'De combien de degrés la température moyenne de la Terre a-t-elle augmenté depuis l’époque préindustrielle ?'
        },
        prompts: {
            de: [
                'Um wie viel Grad hat sich die durchschnittliche Erdtemperatur seit der vorindustriellen Zeit erhöht?',
                'Um wie viel Grad hat sich die durchschnittliche Erdtemperatur seit der vorindustriellen Zeit erhöht? Mache mir eine ausführliche Analyse.',
                'Um wie viel Grad hat sich die durchschnittliche Erdtemperatur seit der vorindustriellen Zeit erhöht? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'De combien de degrés la température moyenne de la Terre a-t-elle augmenté depuis l’époque préindustrielle ?',
                'De combien de degrés la température moyenne de la Terre a-t-elle augmenté depuis l’époque préindustrielle ? Fais une analyse détaillée.',
                'De combien de degrés la température moyenne de la Terre a-t-elle augmenté depuis l’époque préindustrielle ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '5',
        question: {
            de: 'Was ist laut der WHO die grösste Gesundheitsbedrohung für die Menschheit im 21. Jahrhundert?',
            fr: 'Selon l’OMS, quelle est la plus grande menace pour la santé de l’humanité au XXIe siècle ?'
        },
        prompts: {
            de: [
                'Was ist laut der WHO die grösste Gesundheitsbedrohung für die Menschheit im 21. Jahrhundert?',
                'Was ist laut der WHO die grösste Gesundheitsbedrohung für die Menschheit im 21. Jahrhundert? Mache mir eine ausführliche Analyse.',
                'Was ist laut der WHO die grösste Gesundheitsbedrohung für die Menschheit im 21. Jahrhundert? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'Selon l’OMS, quelle est la plus grande menace pour la santé de l’humanité au XXIe siècle ?',
                'Selon l’OMS, quelle est la plus grande menace pour la santé de l’humanité au XXIe siècle ? Fais une analyse détaillée.',
                'Selon l’OMS, quelle est la plus grande menace pour la santé de l’humanité au XXIe siècle ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '6',
        question: {
            de: 'Welche Transportmittel sollen laut WHO in Städten priorisiert werden?',
            fr: 'Quels moyens de transport doivent être prioritaires dans les villes selon l’OMS ?'
        },
        prompts: {
            de: [
                'Welche Transportmittel sollen laut WHO in Städten priorisiert werden?',
                'Welche Transportmittel sollen laut WHO in Städten priorisiert werden? Mache mir eine ausführliche Analyse.',
                'Welche Transportmittel sollen laut WHO in Städten priorisiert werden? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'Quels moyens de transport doivent être prioritaires dans les villes selon l’OMS ?',
                'Quels moyens de transport doivent être prioritaires dans les villes selon l’OMS ? Fais une analyse détaillée.',
                'Quels moyens de transport doivent être prioritaires dans les villes selon l’OMS ? Donne une réponse courte.'
            ]
        }
    },
    {
        id: '7',
        question: {
            de: 'Schätze, wie viel Prozent der Menschen atmen laut WHO-Daten ungesunde Aussenluft ein, die grösstenteils durch die Verbrennung fossiler Brennstoffe verursacht wird?',
            fr: 'Estimez quel pourcentage de personnes respirent un air extérieur malsain, principalement causé par la combustion de combustibles fossiles, selon les données de l’OMS ?'
        },
        prompts: {
            de: [
                'Wie viel Prozent der Menschen atmen laut WHO-Daten ungesunde Aussenluft ein, die grösstenteils durch die Verbrennung fossiler Brennstoffe verursacht wird?',
                'Wie viel Prozent der Menschen atmen laut WHO-Daten ungesunde Aussenluft ein, die grösstenteils durch die Verbrennung fossiler Brennstoffe verursacht wird? Mache mir eine ausführliche Analyse.',
                'Wie viel Prozent der Menschen atmen laut WHO-Daten ungesunde Aussenluft ein, die grösstenteils durch die Verbrennung fossiler Brennstoffe verursacht wird? Gib mir eine möglichst kurze Antwort.'
            ],
            fr: [
                'Quel pourcentage de personnes respirent un air extérieur malsain, principalement causé par la combustion de combustibles fossiles, selon les données de l’OMS ?',
                'Quel pourcentage de personnes respirent un air extérieur malsain, principalement causé par la combustion de combustibles fossiles, selon les données de l’OMS ? Fais une analyse détaillée.',
                'Quel pourcentage de personnes respirent un air extérieur malsain, principalement causé par la combustion de combustibles fossiles, selon les données de l’OMS ? Donne une réponse courte.'
            ]
        }
    }
];


/***/ },

/***/ "./src/main.ts"
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);


// Bootstrap CSS

const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.mount('#app');


/***/ },

/***/ "./src/models.ts"
/*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USER_ROLE: () => (/* binding */ USER_ROLE)
/* harmony export */ });
var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE["USER"] = "user";
    USER_ROLE["AI"] = "assistant";
    USER_ROLE["DEV"] = "developer";
})(USER_ROLE || (USER_ROLE = {}));
;
;
;


/***/ },

/***/ "./src/quizService.ts"
/*!****************************!*\
  !*** ./src/quizService.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuizService)
/* harmony export */ });
/* harmony import */ var _assets_quizcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/quizcards */ "./src/assets/quizcards.ts");

class QuizService {
    static lastQuizCard = -1;
    constructor() { }
    static drawRandomQuizCard() {
        let i = Math.floor(Math.random() * _assets_quizcards__WEBPACK_IMPORTED_MODULE_0__.QUIZ.length);
        // don't draw the same card twice in a row
        while (i == this.lastQuizCard) {
            i = Math.floor(Math.random() * _assets_quizcards__WEBPACK_IMPORTED_MODULE_0__.QUIZ.length);
        }
        this.lastQuizCard = i;
        return _assets_quizcards__WEBPACK_IMPORTED_MODULE_0__.QUIZ[i];
    }
}


/***/ },

/***/ "./src/store.ts"
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LANG: () => (/* binding */ LANG),
/* harmony export */   STORE_KEY: () => (/* binding */ STORE_KEY),
/* harmony export */   getPersisted: () => (/* binding */ getPersisted),
/* harmony export */   hasPersisted: () => (/* binding */ hasPersisted),
/* harmony export */   persist: () => (/* binding */ persist),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _antService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./antService */ "./src/antService.ts");
/* harmony import */ var _quizService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quizService */ "./src/quizService.ts");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./env.ts");




let activeSubscriptions = new Array();
var LANG;
(function (LANG) {
    LANG["DE"] = "de";
    LANG["FR"] = "fr";
})(LANG || (LANG = {}));
;
var STORE_KEY;
(function (STORE_KEY) {
    STORE_KEY["TOKEN"] = "enerki-token";
    STORE_KEY["TEMP"] = "enerki-temp-";
})(STORE_KEY || (STORE_KEY = {}));
;
;
const storeObj = {
    power: new _antService__WEBPACK_IMPORTED_MODULE_1__.PowerService({ debug: false }),
    heartRate: new _antService__WEBPACK_IMPORTED_MODULE_1__.HeartRateService(),
    connected: false,
    activeCard: _quizService__WEBPACK_IMPORTED_MODULE_2__["default"].drawRandomQuizCard(),
    cardDrawn: false,
    connectedType: undefined,
    toasts: new Array(),
    textInput: '',
    isDebug: false,
    chatMessages: new Array(),
    lang: LANG.DE,
    connection: { ..._env__WEBPACK_IMPORTED_MODULE_3__.ENV[0] },
    getExamplePrompts() {
        if (!this.cardDrawn)
            return [];
        return this.activeCard.prompts[this.lang];
    },
    isPedalling() {
        const lastMessage = this.chatMessages[this.chatMessages.length - 1];
        if (lastMessage) {
            return lastMessage.loading || (lastMessage.percent !== undefined && lastMessage.percent < 100);
        }
        return false;
    },
    /**
     * Connect a new sensor.
     * @param type  Either 'heartRate' or 'power'
     */
    connect(type) {
        if (type === 'debug') {
            this.isDebug = true;
            this.power.setSettings({ debug: true });
            this.power.connect();
            this.connectedType = 'power';
        }
        else {
            this.isDebug = false;
            this[type].connect();
            this.connectedType = type;
        }
        this.connected = true;
    },
    /**
     * Resets the chat log and everything, when a new user is using the device
     */
    resetUser() {
        this.chatMessages = [];
        this.toasts = [];
        this.activeCard = _quizService__WEBPACK_IMPORTED_MODULE_2__["default"].drawRandomQuizCard();
        this.cardDrawn = false;
        this.textInput = '';
        sessionStorage.clear();
        this.resetSubscriptions();
    },
    /**
     * Draws a new Quizcard
     */
    drawQuizCard(newCard = false) {
        if (newCard || !this.cardDrawn) {
            const card = _quizService__WEBPACK_IMPORTED_MODULE_2__["default"].drawRandomQuizCard();
            this.activeCard = card;
        }
        this.cardDrawn = true;
    },
    /**
     * Starts a new measurement and subscribes to it.
     * Subscription stops when 100% is reached, pass autoUnsubscribe = false when you want to avoid this behaviour.
     * Cave: Resets existing subscriptions!
     * @param target            the target value, in the same unit as the total value for the respective sensor
     * @param callback          a function that is triggered every time the sensor delivers a new value
     *                          the callback function is called with these parameters:
     *                            - target:     the currently set target
     *                            - total:      the current accumulated total of effort
     *                            - value:      the current value reported by the sensor
     *                            - percent:    the percentage of the target reached yet
     * @param autoUnsubscribe   Optional. Defines if the subscription should end when more than 100% is reached. defaults to true.
     * @returns                 the index of the subscription (use to unsubscribe)
     */
    startAndSubscribe(target, callback, autoUnsubscribe = true) {
        if (this.connectedType) {
            const subscription = this[this.connectedType].startAndSubscribe(target, callback, autoUnsubscribe);
            activeSubscriptions.push(subscription);
            return subscription;
        }
        else {
            console.warn('No sensor connected yet!');
            return -1;
        }
    },
    resetSubscriptions() {
        if (this.connectedType) {
            while (activeSubscriptions.length > 0) {
                this[this.connectedType].unsubscribe(activeSubscriptions.pop());
            }
        }
        else {
            console.warn('No sensor connected yet!');
            return -1;
        }
    },
    /**
     * Set a new target value
     * @param target    the target value, in the same unit as the total value for the respective sensor
     */
    setTarget(target) {
        if (!this.connectedType) {
            console.warn('No sensor connected yet!');
        }
        else {
            this[this.connectedType].setTarget(target);
        }
    },
    /**
     * Adds a toast to the toast array
     * @param text      The text to display
     * @param timeout   The timeout (in ms) after which the toast is deleted (default: 1250 ms)
     */
    addToast(text, timeout = 3000) {
        this.toasts.push(text);
        if (timeout) {
            setTimeout(() => this.removeToast(text), timeout);
        }
    },
    /**
     * Removes a toast by text
     * @param text  the text of the toast to remove
     * @returns     TRUE if the toast was found and removed
     *              FALSE if the toast was not found
     */
    removeToast(text) {
        const i = this.toasts.findIndex((t) => t === text);
        if (i > -1) {
            this.toasts.splice(i, 1);
            return true;
        }
        else {
            return false;
        }
    },
    setConnection(newConnection) {
        console.log('set connection', newConnection);
        this.connection = newConnection;
        console.log(this);
    }
};
const store = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(storeObj);
const storePropsToPersist = [
    'activeCard',
    'cardDrawn',
    'textInput',
    'connection'
];
reloadFromStorage();
storePropsToPersist.forEach((key) => {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => store[key], (m) => {
        if (m == '')
            return; // so we don't reset the textInput on send
        // if user hits send and we have to reload
        // the textInput is restored and the user can
        // just hit send again
        sessionStorage.setItem(STORE_KEY.TEMP + key, JSON.stringify(m));
    }, { deep: true });
});
function reloadFromStorage() {
    console.log('reload from storage');
    storePropsToPersist.forEach((key) => {
        const prop = sessionStorage.getItem(STORE_KEY.TEMP + key);
        if (prop != undefined) {
            try {
                store[key] = JSON.parse(prop); // it makes me cry to do this, but if it makes TS happy...
            }
            catch (e) {
                store[key] = prop;
            }
        }
    });
}
function persist(key, value) {
    window.localStorage.setItem(key, typeof value === 'string'
        ? value
        : JSON.stringify(value));
}
function hasPersisted(key) {
    return Object.hasOwn(window.localStorage, key);
}
function getPersisted(key) {
    const storageString = window.localStorage.getItem(key);
    if (storageString === null)
        return undefined;
    try {
        return JSON.parse(storageString);
    }
    catch (e) {
        return storageString;
    }
}


/***/ },

/***/ "./src/toastService.ts"
/*!*****************************!*\
  !*** ./src/toastService.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.ts");

var Replacer;
(function (Replacer) {
    Replacer["PERCENT"] = "%percent%";
    Replacer["WATTHOUR"] = "%watthours%";
    Replacer["WATT"] = "%watts";
    Replacer["KCAL"] = "%calories";
})(Replacer || (Replacer = {}));
;
const MINIMAL_TIME_BETWEEN_TOASTS = 2000;
const start = {
    de: [
        'Gute Frage! Nun gilt es aktiv zu werden: Tritt in die Pedale, um die Energie für die KI zu erzeugen!',
        'Los gehts! Tritt in die Pedale und erzeuge die Energie für deine KI-Anfrage!'
    ],
    fr: [
        'Bonne question ! Il est temps de passer à l’action : pédale pour générer l’énergie nécessaire à l’IA !',
        'C’est parti ! Pédale pour produire l’énergie de ta requête IA !'
    ]
};
const startDebug = {
    de: [
        'Gute Frage! DEMO-MODUS: Mit dem Regler unten rechts kannst du simulieren, wie stark in die Pedale getreten wird.',
    ],
    fr: [
        'Bonne question ! MODE DÉMO : Avec le curseur en bas à droite, tu peux simuler la force de pédalage.'
    ]
};
const end = {
    de: [
        'Geschafft! Du hast gerade ' + Replacer.WATTHOUR + ' Wattstunden Energie produziert!'
    ],
    fr: [
        'Bravo ! Tu viens de produire ' + Replacer.WATTHOUR + ' wattheures d’énergie !'
    ]
};
const tooFast = {
    de: [
        'Wow! Du hast die Energie schneller erzeugt, als die KI gebraucht hat um die Antwort zu generieren. 💪',
        'Du hast so kräftig in die Pedale getreten - die KI ist noch nicht ganz fertig mit der Antwort. ⚡️'
    ],
    fr: [
        'Wow ! Tu as généré l’énergie plus vite que l’IA n’a mis pour répondre. 💪',
        'Tu as pédalé tellement fort – l’IA n’a pas encore fini sa réponse. ⚡️'
    ]
};
const lowPercents = {
    de: [
        'Gut gestartet! Du hast schon ' + Replacer.PERCENT + '% der Energie generiert.',
        'Du hast bereits ' + Replacer.PERCENT + '% der Energie erzeugt.',
    ],
    fr: [
        'Bien commencé ! Tu as déjà généré ' + Replacer.PERCENT + '% de l’énergie.',
        'Tu as déjà produit ' + Replacer.PERCENT + '% de l’énergie.'
    ]
};
const highPercents = {
    de: [
        'Du hast bereits ' + Replacer.PERCENT + '% der Energie erzeugt.',
        'Du hast schon ' + Replacer.PERCENT + '% der benötigten Leistung erbracht.'
    ],
    fr: [
        'Tu as déjà produit ' + Replacer.PERCENT + '% de l’énergie.',
        'Tu as déjà atteint ' + Replacer.PERCENT + '% de la puissance nécessaire.'
    ]
};
const lastPercents = {
    de: [
        'Endspurt! Nur noch ' + Replacer.PERCENT + '% und du hast es geschafft!',
        'Go Go Go! Du bist schon fast fertig!',
        'Die letzten ' + Replacer.PERCENT + '% warten! Das schaffst du!'
    ],
    fr: [
        'Dernière ligne droite ! Plus que ' + Replacer.PERCENT + '% et c’est gagné !',
        'Allez, allez ! Tu es presque arrivé !',
        'Les derniers ' + Replacer.PERCENT + '% t’attendent ! Tu peux le faire !'
    ]
};
const halfPercents = {
    de: [
        'Gut die Hälfte ist geschafft. Bleib dran!',
        'Du hast bereits die Hälfte hinter dir. Weiter so!'
    ],
    fr: [
        'Tu as fait la moitié. Continue comme ça !',
        'La moitié est derrière toi. Courage !'
    ]
};
const highPower = {
    de: [
        'Heisst du Tadej Pogačar? Du drückst grad eindrückliche ' + Replacer.WATT + ' Watt!',
        'Wow! ' + Replacer.WATT + ' Watt! Bist du gedopt?',
        'Du sitzt nicht das erste Mal auf dem Velo, oder? ' + Replacer.WATT + ' Watt sind eindrücklich!'
    ],
    fr: [
        'Tu t’appelles Tadej Pogačar ? Tu pousses ' + Replacer.WATT + ' watts impressionnants !',
        'Wow ! ' + Replacer.WATT + ' watts ! Tu es dopé ?',
        'Ce n’est pas ta première fois sur un vélo, hein ? ' + Replacer.WATT + ' watts, c’est énorme !'
    ]
};
const notLoaded = {
    de: [
        'Bleib dran, du machst das gut!',
        'Weiter so!',
        'Du leistest gerade ' + Replacer.WATT + ' Watt!'
    ],
    fr: [
        'Continue, tu t’en sors bien !',
        'Ne lâche rien !',
        'Tu produis actuellement ' + Replacer.WATT + ' watts !'
    ]
};
const getStarted = {
    de: [
        'Tritt in die Pedale, um die Energie für die KI zu erzeugen.',
        'Von alleine passiert nichts. Trete auf dem Home-Trainer, um die Antwort zu sehen.',
        'Los, ich weiss du kannst das!',
        'Lege jetzt los und tritt in die Pedale!'
    ],
    fr: [
        'Pédale pour générer l’énergie nécessaire à l’IA.',
        'Rien ne se passe tout seul. Pédale sur le vélo pour voir la réponse.',
        'Allez, je sais que tu peux le faire !',
        'C’est parti, pédale maintenant !'
    ]
};
const done = {
    de: [
        'Fertig! Du kannst aufhören zu treten!',
        'Gratuliere, du hast es geschafft!',
    ],
    fr: [
        'Terminé ! Tu peux arrêter de pédaler !',
        'Félicitations, tu as réussi !'
    ]
};
const reallyDone = {
    de: [
        'Du hast kannst aufhören zu treten, du hast es geschafft!',
        'Du hast die benötigte Energie erzeugt und kannst aufhören zu treten.'
    ],
    fr: [
        'Tu peux arrêter de pédaler, c’est gagné !',
        'Tu as produit l’énergie nécessaire, tu peux t’arrêter.'
    ]
};
const energyUsed = {
    de: [
        'Fertig! Du hast mehr als ' + Replacer.KCAL + ' kcal verbraucht, um diese Antwort anzuzeigen!',
        'Uff! Das waren gerade über ' + Replacer.KCAL + ' kcal, die du verbraucht hast!',
    ],
    fr: [
        'Terminé ! Tu as dépensé plus de ' + Replacer.KCAL + ' kcal pour afficher cette réponse !',
        'Ouf ! Tu viens de brûler plus de ' + Replacer.KCAL + ' kcal !'
    ]
};
let lastToast = 0;
function lastToastExpired(override = false) {
    const expired = Date.now() - MINIMAL_TIME_BETWEEN_TOASTS > lastToast;
    if (expired)
        lastToast = Date.now();
    return expired || override;
}
function getRandom(arr, replacer, replacement = '') {
    const i = Math.floor(Math.random() * arr.length);
    return replacer
        ? arr[i].replace(replacer, replacement)
        : arr[i];
}
function getKiloCalsFromWatthour(wh) {
    const kcalWhFactor = 0.8598452279;
    const bodyEfficiencyFactor = 0.25;
    return (wh * kcalWhFactor / bodyEfficiencyFactor).toFixed(1);
}
class ToastService {
    static highPowerTimeout = false;
    static lowPowerTimeout = false;
    static notLoadedTimeout = false;
    static done = false;
    static startToast() {
        this.done = false;
        lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(_store__WEBPACK_IMPORTED_MODULE_0__.store.isDebug ? startDebug[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang] : start[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang]), 3000);
    }
    static stillPedalingToast() {
        lastToastExpired(true) && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(reallyDone[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang]), 3000);
    }
    static progressToast(percent, loaded, currentWatts) {
        if (this.done)
            return;
        if (currentWatts > 400 && !this.highPowerTimeout) {
            this.highPowerTimeout = true;
            // wait 20 seconds before we trigger this toast again
            window.setTimeout(() => this.highPowerTimeout = false, 20000);
            return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(highPower[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang], Replacer.WATT, currentWatts.toString()), 3000);
        }
        else if (currentWatts < 10) {
            if (!this.lowPowerTimeout) {
                this.lowPowerTimeout = true;
                // wait 10 seconds before we trigger this toast again
                window.setTimeout(() => this.lowPowerTimeout = false, 10000);
                return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(getStarted[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang]), 5000);
            }
        }
        else if (!loaded) {
            if (percent >= 100) {
                // user completed before response from AI arrived
                return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(tooFast[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang]), 5000);
            }
            else if (!this.notLoadedTimeout) {
                this.notLoadedTimeout = true;
                // wait 6 seconds before we trigger this toast again
                window.setTimeout(() => this.notLoadedTimeout = false, 6000);
                return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(notLoaded[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang], Replacer.WATT, currentWatts.toString()), 3000);
            }
        }
        else {
            if (percent == 100 && !this.done) {
                this.done = true;
                return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(done[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang]), 5000);
            }
            else if (percent > 80) {
                return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(lastPercents[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang], Replacer.PERCENT, (100 - percent).toFixed(0)));
            }
            else if (percent > 55) {
                return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(highPercents[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang], Replacer.PERCENT, percent.toFixed(0)));
            }
            else if (percent > 45) {
                return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(halfPercents[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang], Replacer.PERCENT, percent.toFixed(0)));
            }
            else {
                return lastToastExpired() && _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(lowPercents[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang], Replacer.PERCENT, percent.toFixed(0)));
            }
        }
    }
    static abort() {
        this.done = true;
    }
    static energyToast(wh) {
        _store__WEBPACK_IMPORTED_MODULE_0__.store.addToast(getRandom(energyUsed[_store__WEBPACK_IMPORTED_MODULE_0__.store.lang], Replacer.KCAL, getKiloCalsFromWatthour(wh)), 10000);
    }
}


/***/ },

/***/ "./src/App.vue"
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&scoped=true&ts=true */ "./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&ts=true");
/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&setup=true&lang=ts */ "./src/App.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css */ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_7ba5bd90_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7ba5bd90"],['__file',"src/App.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./src/components/AuthForm.vue"
/*!*************************************!*\
  !*** ./src/components/AuthForm.vue ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthForm_vue_vue_type_template_id_2bd044bc_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthForm.vue?vue&type=template&id=2bd044bc&scoped=true&ts=true */ "./src/components/AuthForm.vue?vue&type=template&id=2bd044bc&scoped=true&ts=true");
/* harmony import */ var _AuthForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthForm.vue?vue&type=script&setup=true&lang=ts */ "./src/components/AuthForm.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _AuthForm_vue_vue_type_style_index_0_id_2bd044bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css */ "./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AuthForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AuthForm_vue_vue_type_template_id_2bd044bc_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2bd044bc"],['__file',"src/components/AuthForm.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./src/components/Chat.vue"
/*!*********************************!*\
  !*** ./src/components/Chat.vue ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_2bc3d388_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=2bc3d388&scoped=true&ts=true */ "./src/components/Chat.vue?vue&type=template&id=2bc3d388&scoped=true&ts=true");
/* harmony import */ var _Chat_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&setup=true&lang=ts */ "./src/components/Chat.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _Chat_vue_vue_type_style_index_0_id_2bc3d388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css */ "./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Chat_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Chat_vue_vue_type_template_id_2bc3d388_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2bc3d388"],['__file',"src/components/Chat.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./src/components/ConnectModal.vue"
/*!*****************************************!*\
  !*** ./src/components/ConnectModal.vue ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConnectModal_vue_vue_type_template_id_5a6a7e93_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConnectModal.vue?vue&type=template&id=5a6a7e93&scoped=true&ts=true */ "./src/components/ConnectModal.vue?vue&type=template&id=5a6a7e93&scoped=true&ts=true");
/* harmony import */ var _ConnectModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectModal.vue?vue&type=script&setup=true&lang=ts */ "./src/components/ConnectModal.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _ConnectModal_vue_vue_type_style_index_0_id_5a6a7e93_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css */ "./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ConnectModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ConnectModal_vue_vue_type_template_id_5a6a7e93_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5a6a7e93"],['__file',"src/components/ConnectModal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./src/components/PowerSimulator.vue"
/*!*******************************************!*\
  !*** ./src/components/PowerSimulator.vue ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PowerSimulator_vue_vue_type_template_id_743f672f_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PowerSimulator.vue?vue&type=template&id=743f672f&scoped=true&ts=true */ "./src/components/PowerSimulator.vue?vue&type=template&id=743f672f&scoped=true&ts=true");
/* harmony import */ var _PowerSimulator_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PowerSimulator.vue?vue&type=script&setup=true&lang=ts */ "./src/components/PowerSimulator.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _PowerSimulator_vue_vue_type_style_index_0_id_743f672f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css */ "./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PowerSimulator_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PowerSimulator_vue_vue_type_template_id_743f672f_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-743f672f"],['__file',"src/components/PowerSimulator.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./src/components/PromptExamples.vue"
/*!*******************************************!*\
  !*** ./src/components/PromptExamples.vue ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PromptExamples_vue_vue_type_template_id_510f157d_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PromptExamples.vue?vue&type=template&id=510f157d&scoped=true&ts=true */ "./src/components/PromptExamples.vue?vue&type=template&id=510f157d&scoped=true&ts=true");
/* harmony import */ var _PromptExamples_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PromptExamples.vue?vue&type=script&setup=true&lang=ts */ "./src/components/PromptExamples.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _PromptExamples_vue_vue_type_style_index_0_id_510f157d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css */ "./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PromptExamples_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PromptExamples_vue_vue_type_template_id_510f157d_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-510f157d"],['__file',"src/components/PromptExamples.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./src/components/QuizCardModal.vue"
/*!******************************************!*\
  !*** ./src/components/QuizCardModal.vue ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizCardModal_vue_vue_type_template_id_48ed92b0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizCardModal.vue?vue&type=template&id=48ed92b0&scoped=true&ts=true */ "./src/components/QuizCardModal.vue?vue&type=template&id=48ed92b0&scoped=true&ts=true");
/* harmony import */ var _QuizCardModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizCardModal.vue?vue&type=script&setup=true&lang=ts */ "./src/components/QuizCardModal.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _QuizCardModal_vue_vue_type_style_index_0_id_48ed92b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css */ "./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_QuizCardModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuizCardModal_vue_vue_type_template_id_48ed92b0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-48ed92b0"],['__file',"src/components/QuizCardModal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./src/components/Settings.vue"
/*!*************************************!*\
  !*** ./src/components/Settings.vue ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_47aa12d3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true */ "./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true");
/* harmony import */ var _Settings_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&setup=true&lang=ts */ "./src/components/Settings.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _Settings_vue_vue_type_style_index_0_id_47aa12d3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css */ "./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Settings_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Settings_vue_vue_type_template_id_47aa12d3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-47aa12d3"],['__file',"src/components/Settings.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./src/App.vue?vue&type=script&setup=true&lang=ts"
/*!********************************************************!*\
  !*** ./src/App.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader/index.js??clonedRuleSet-1!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./App.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./src/components/AuthForm.vue?vue&type=script&setup=true&lang=ts"
/*!************************************************************************!*\
  !*** ./src/components/AuthForm.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./AuthForm.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./src/components/Chat.vue?vue&type=script&setup=true&lang=ts"
/*!********************************************************************!*\
  !*** ./src/components/Chat.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Chat.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./src/components/ConnectModal.vue?vue&type=script&setup=true&lang=ts"
/*!****************************************************************************!*\
  !*** ./src/components/ConnectModal.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./ConnectModal.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./src/components/PowerSimulator.vue?vue&type=script&setup=true&lang=ts"
/*!******************************************************************************!*\
  !*** ./src/components/PowerSimulator.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PowerSimulator.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./src/components/PromptExamples.vue?vue&type=script&setup=true&lang=ts"
/*!******************************************************************************!*\
  !*** ./src/components/PromptExamples.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PromptExamples.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./src/components/QuizCardModal.vue?vue&type=script&setup=true&lang=ts"
/*!*****************************************************************************!*\
  !*** ./src/components/QuizCardModal.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./QuizCardModal.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./src/components/Settings.vue?vue&type=script&setup=true&lang=ts"
/*!************************************************************************!*\
  !*** ./src/components/Settings.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Settings.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=script&setup=true&lang=ts");
 

/***/ },

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&ts=true"
/*!***********************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&ts=true ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_template_id_7ba5bd90_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_template_id_7ba5bd90_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader/index.js??clonedRuleSet-1!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./App.vue?vue&type=template&id=7ba5bd90&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&ts=true");


/***/ },

/***/ "./src/components/AuthForm.vue?vue&type=template&id=2bd044bc&scoped=true&ts=true"
/*!***************************************************************************************!*\
  !*** ./src/components/AuthForm.vue?vue&type=template&id=2bd044bc&scoped=true&ts=true ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_template_id_2bd044bc_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_template_id_2bd044bc_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./AuthForm.vue?vue&type=template&id=2bd044bc&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=template&id=2bd044bc&scoped=true&ts=true");


/***/ },

/***/ "./src/components/Chat.vue?vue&type=template&id=2bc3d388&scoped=true&ts=true"
/*!***********************************************************************************!*\
  !*** ./src/components/Chat.vue?vue&type=template&id=2bc3d388&scoped=true&ts=true ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_template_id_2bc3d388_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_template_id_2bc3d388_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Chat.vue?vue&type=template&id=2bc3d388&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=template&id=2bc3d388&scoped=true&ts=true");


/***/ },

/***/ "./src/components/ConnectModal.vue?vue&type=template&id=5a6a7e93&scoped=true&ts=true"
/*!*******************************************************************************************!*\
  !*** ./src/components/ConnectModal.vue?vue&type=template&id=5a6a7e93&scoped=true&ts=true ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_template_id_5a6a7e93_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_template_id_5a6a7e93_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./ConnectModal.vue?vue&type=template&id=5a6a7e93&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=template&id=5a6a7e93&scoped=true&ts=true");


/***/ },

/***/ "./src/components/PowerSimulator.vue?vue&type=template&id=743f672f&scoped=true&ts=true"
/*!*********************************************************************************************!*\
  !*** ./src/components/PowerSimulator.vue?vue&type=template&id=743f672f&scoped=true&ts=true ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_template_id_743f672f_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_template_id_743f672f_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PowerSimulator.vue?vue&type=template&id=743f672f&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=template&id=743f672f&scoped=true&ts=true");


/***/ },

/***/ "./src/components/PromptExamples.vue?vue&type=template&id=510f157d&scoped=true&ts=true"
/*!*********************************************************************************************!*\
  !*** ./src/components/PromptExamples.vue?vue&type=template&id=510f157d&scoped=true&ts=true ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_template_id_510f157d_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_template_id_510f157d_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PromptExamples.vue?vue&type=template&id=510f157d&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=template&id=510f157d&scoped=true&ts=true");


/***/ },

/***/ "./src/components/QuizCardModal.vue?vue&type=template&id=48ed92b0&scoped=true&ts=true"
/*!********************************************************************************************!*\
  !*** ./src/components/QuizCardModal.vue?vue&type=template&id=48ed92b0&scoped=true&ts=true ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_template_id_48ed92b0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_template_id_48ed92b0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./QuizCardModal.vue?vue&type=template&id=48ed92b0&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=template&id=48ed92b0&scoped=true&ts=true");


/***/ },

/***/ "./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true"
/*!***************************************************************************************!*\
  !*** ./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_template_id_47aa12d3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_template_id_47aa12d3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true");


/***/ },

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css"
/*!*****************************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css"
/*!*********************************************************************************************!*\
  !*** ./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_style_index_0_id_2bd044bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_style_index_0_id_2bd044bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_style_index_0_id_2bd044bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_style_index_0_id_2bd044bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_AuthForm_vue_vue_type_style_index_0_id_2bd044bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css"
/*!*****************************************************************************************!*\
  !*** ./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_style_index_0_id_2bc3d388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_style_index_0_id_2bc3d388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_style_index_0_id_2bc3d388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_style_index_0_id_2bc3d388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Chat_vue_vue_type_style_index_0_id_2bc3d388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css"
/*!*************************************************************************************************!*\
  !*** ./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_style_index_0_id_5a6a7e93_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_style_index_0_id_5a6a7e93_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_style_index_0_id_5a6a7e93_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_style_index_0_id_5a6a7e93_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_ConnectModal_vue_vue_type_style_index_0_id_5a6a7e93_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css"
/*!***************************************************************************************************!*\
  !*** ./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_style_index_0_id_743f672f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_style_index_0_id_743f672f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_style_index_0_id_743f672f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_style_index_0_id_743f672f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PowerSimulator_vue_vue_type_style_index_0_id_743f672f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css"
/*!***************************************************************************************************!*\
  !*** ./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_style_index_0_id_510f157d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_style_index_0_id_510f157d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_style_index_0_id_510f157d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_style_index_0_id_510f157d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PromptExamples_vue_vue_type_style_index_0_id_510f157d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css"
/*!**************************************************************************************************!*\
  !*** ./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_style_index_0_id_48ed92b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_style_index_0_id_48ed92b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_style_index_0_id_48ed92b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_style_index_0_id_48ed92b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_QuizCardModal_vue_vue_type_style_index_0_id_48ed92b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css"
/*!*********************************************************************************************!*\
  !*** ./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("45d7b290", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/AuthForm.vue?vue&type=style&index=0&id=2bd044bc&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("4be7fbf9", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Chat.vue?vue&type=style&index=0&id=2bc3d388&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("309b5d9f", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/ConnectModal.vue?vue&type=style&index=0&id=5a6a7e93&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("e831a676", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PowerSimulator.vue?vue&type=style&index=0&id=743f672f&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("33f67eb7", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/PromptExamples.vue?vue&type=style&index=0&id=510f157d&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("5540fb96", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/QuizCardModal.vue?vue&type=style&index=0&id=48ed92b0&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("15e2bf26", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("7330a991", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e"
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414%27/%3e%3c/svg%3e"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0%27/%3e%3c/svg%3e"
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e"
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e"
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1%27/%3e%3c/svg%3e"
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1%27/%3e%3c/svg%3e";

/***/ },

/***/ "./src/assets/logo.png"
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/logo.5d5014ba3e4201b16ddb.png";

/***/ },

/***/ "?8cd6"
/*!*********************!*\
  !*** usb (ignored) ***!
  \*********************/
() {

/* (ignored) */

/***/ },

/***/ "./package.json"
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"enerki","version":"0.8.1","private":true,"license":"MIT","scripts":{"dev":"webpack serve --config webpack.config.js","build":"webpack --config webpack.config.js","lint":"eslint ./src --ext .js,.vue","ignore-env":"git update-index --assume-unchanged env.ts","lint:fix":"eslint ./src --ext .js,.vue --fix","format":"prettier \'src/**/*.{js,vue,css,md,json}\' --write","chrome":"open -n -a \\"Google Chrome\\" --args --disable-web-security --user-data-dir=\\"/tmp/chrome_dev_test\\" http://localhost:4200/enerki/","start":"npm run dev & npm run chrome"},"dependencies":{"ant-plus-next":"^0.4.0","axios":"^1.11.0","bootstrap":"^5.3.7","file-loader":"^6.2.0","markdown-it":"^15.0.2","vue":"^3.4.26"},"devDependencies":{"@babel/core":"^7.24.5","@babel/preset-env":"^7.24.5","@types/markdown-it":"^14.2.0","@types/node":"^26.6.4","@vue/compiler-sfc":"^3.5.18","babel-loader":"^10.0.0","css-loader":"^7.1.2","globals":"^16.0.0","html-webpack-plugin":"^5.6.8","prettier":"^3.9.9","ts-loader":"^9.5.2","typescript":"^5.8.3","vue-loader":"^17.4.2","vue-style-loader":"^4.1.3","vue-tsc":"^3.0.3","webpack":"^5.91.0","webpack-bundle-analyzer":"^5.4.0","webpack-cli":"^7.2.3","webpack-dev-server":"^6.0.0"}}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	// set .name for anonymous default exports per ES spec
/******/ 	// skipped when the property is non-configurable (pre-ES2015 engines),
/******/ 	// where Object.defineProperty would throw
/******/ 	__webpack_require__.dn = (x) => {
/******/ 		var descriptor = Object.getOwnPropertyDescriptor(x, "name");
/******/ 		if (!descriptor || (!descriptor.writable && descriptor.configurable)) Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	__webpack_require__.p = "/enerki/";
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunkenerki"] = self["webpackChunkenerki"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_bootstrap_dist_css_bootstra-d97b5a"], () => (__webpack_require__("./src/main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.chunk.js.map