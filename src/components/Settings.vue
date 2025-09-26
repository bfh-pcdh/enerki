<script setup lang="ts">
  import { store } from '../store';
  const PACKAGE = require('../../package.json');
  const version = PACKAGE.version;
  const emit = defineEmits(['onClose']);

  function reset() {
    if (
      confirm('Soll enerKI für eine·n Benutzer·in zurückgesetz werden?')
    ) {
      store.resetUser();
      emit('onClose');
    }

  }
</script>

<template>
    <h1>🏗️ TO DO: Einstellungen 🏗️</h1>
    <p>enerKI Version: {{ version }}</p> 
    <button @click="reset">Neue·r Benutzer·in</button>
</template>

<style scoped>
  h1 {
    margin-top: 3em;
    margin-left: 2em;
  }
  p {
    margin-left: 5em;
  }
  button {
    margin-left: 5em;
  }
</style>
