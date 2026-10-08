<script setup lang="ts">
  import { i18n } from '@/assets/i18n';
  import { ref } from "vue";
  import { ENV } from "../../env";
  import { Connection, store } from "../store";
  const PACKAGE = require('../../package.json');
  const version = PACKAGE.version;
  const emit = defineEmits(['onClose']);

  const settings: Connection[] = ENV;
  let selected = ref<{ [key: string]: string }>(store.connection);

  function close(): void {
    emit('onClose');
  }

  function select(c: Connection): void {
    selected.value = c;
    c && store.setConnection(c);
  }

  function isSelected(c: Connection): boolean {
    return c.NAME === selected.value?.NAME;
  }

  function getField(key: string) {
    return selected.value[key];
  }

</script>


<template>
    <h1>{{i18n("SETTINGS")}}</h1>
    <p>{{i18n("VERSION_LABEL")}} {{ version }}</p> 
    <ul>
      <li v-for="connection of settings" @click="select(connection)" :class="{selected: isSelected(connection)}">
        {{ connection.NAME }}
      </li>
    </ul>
    <ul class="connection-info">
      <li v-for="key of Object.keys(selected)">
        {{ key }}: {{ getField(key) }}
      </li>
    </ul>

    <button @click="close">{{i18n("CLOSE")}} </button>
</template>

<style scoped>
  h1 {
    margin-top: 3em;
    margin-left: 2em;
  }
  p {
    margin-left: 5em;
  }
  ul {
    list-style: none;
    margin: 0 5em 1em;
    padding-left: 0;
  }
  li {
    margin: 2px;
    padding: 2px;
    cursor: pointer;
  }
  .connection-info {
    font-size: smaller;
    margin-left: 8em;
  }
  .selected {
    background-color:  #697d91;
    color: #fac300
  }
  button {
    margin-left: 5em;
  }
</style>
