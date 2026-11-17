<script setup lang="ts">
import { i18n } from "@/assets/i18n";
import { ref } from "vue";
import { store, persist, STORE_KEY, getPersisted } from "../store";

const llm_token = ref(getPersisted<string>(STORE_KEY.TOKEN) || "");
const search_token = ref(getPersisted<string>(STORE_KEY.SEARCH_TOKEN) || "");

function setTokens() {
  persist(STORE_KEY.TOKEN, llm_token.value);
  persist(STORE_KEY.SEARCH_TOKEN, search_token.value);
}
</script>

<template>
  <form action="#">
    <div>
      <input
        type="text"
        v-model="llm_token"
        :placeholder="i18n('ENTER_TOKEN') + store.connection.NAME"
        style="width: 80%"
      />
      <input
        type="text"
        v-model="search_token"
        :placeholder="i18n('ENTER_TOKEN') + ' TAVILY'"
        style="width: 80%"
      />
      <button @click="setTokens" type="submit" :disabled="llm_token.length == 0">
        {{ i18n("SAVE").toUpperCase() }}
      </button>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  margin: 5em 1em !important;
  flex-direction: column;
}
div {
  display: flex;
  width: 100%;
  margin-top: 1em;
}
.token-box input {
  width: 80%;
}
.persist-box {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.persist-box input {
  margin-right: 0.5em;
}
button {
  width: 20%;
}
</style>
