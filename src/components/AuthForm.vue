<script setup lang="ts">
import { i18n } from '@/assets/i18n';
import { ref } from 'vue';

  const emit = defineEmits(['onToken', 'onError']);

  const token = ref('');
  const persist = ref(false);

  // TODO: very basic validation, update this later
  function isValid(token: string): Promise<boolean> {
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
    } else {
      const confirm = window.confirm(
          i18n('AUTH_CONFIRM')
      );
      window.setTimeout(() => persist.value = confirm, 1); // hack necessary to set negative answer when user checked checkbox and said no in prompt
    }
  }
</script>

<template>
  <form action="#">
    <div class="token-box">
      <input type="text" v-model="token" placeholder="Bitte gib dein BeeChat Token ein" style="width: 100%"></input>
      <button @click="setToken" type="submit" :disabled="token.length == 0">
        {{ i18n('SAVE').toUpperCase() }}
      </button>
    </div>
    <div class="persist-box">
      <input type="checkbox" v-model="persist" @click="togglePersist">{{ i18n('AUTH_PERSIST') }}</input>
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
