<script setup lang="ts">
import { store } from '../store';
import { i18n } from '@/assets/i18n';

const emit = defineEmits(['onError']);

function connect(type: 'heartRate' | 'power' | 'debug') {
  try {
    store.connect(type);
  } catch (e) {
    emit('onError', JSON.stringify(e, null, 2));
  }
}
</script>

<template>
  <div class="background" />
  <div class="modal fade" id="connect-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">{{ i18n('CONNECT_TITLE') }}</h1>
        </div>
        <div class="modal-body">
          <p>{{ i18n('CONNECT_NOTCONNECTED') }}</p>
          <p><a href="https://github.com/bfh-pcdh/enerki/blob/main/SETUP.md" target="_blank">{{ i18n('CONNECT_INSTRUCTIONS') }}</a></p>
          <div class="button-container">
            <!-- button 
              @click="connect('heartRate')"
              :disabled="!store.heartRate.stickAvailable()"
              class="connect-button">
              Pulssensor verbinden
            </button-->
            <button 
              @click="connect('power')"
              class="connect-button"
              :disabled="!store.power.stickAvailable()"
              :title="i18n('CONNECT_POWERMETER_TOOLTIP')">
              {{ i18n('CONNECT_POWERMETER') }}
            </button>
            <button 
              @click="connect('debug')"
              class="connect-button"
              :title="i18n('CONNECT_DEBUG_TOOLTIP')">
              {{ i18n('CONNECT_DEBUG') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, .5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 15 !important;
}
.connect-button {
  width: 10em;
  display: block;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
}
.modal {
  display: contents;
}
.modal-content {
  top: 10vh;
}
.modal-dialog {
  z-index: 20 !important;
}
.button-container {
  display: flex;
}
h1 {
  font-size: 1.2em;
}
</style>
