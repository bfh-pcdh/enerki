<script setup lang="ts">
  import { store } from '@/store';
  import { ref, watch } from 'vue';
  const MIN_WATT = 0;
  const MAX_WATT = 500;

  const props = defineProps({
    debug: Boolean,
    watt: Number
  });

  const simulatedWatt = ref(MIN_WATT);

  watch(simulatedWatt, () => 
    store.power.setDebugWatt(simulatedWatt.value)
  );

  function getBackgroundColor(): string {
    const calcWatt = (props.debug ? simulatedWatt.value : props.watt) || 0;
    const clamped = Math.max(0, Math.min(MAX_WATT,calcWatt));

    const green = { r: 182, g: 242, b: 195 }; 
    const yellow = { r: 255, g: 255, b: 102 }; 
    const red = { r: 139, g: 0, b: 0 };       

    let start, end, t;

    if (clamped <= MAX_WATT / 2) {
      start = green;
      end = yellow;
      t = clamped / (MAX_WATT / 2);
    } else {
      start = yellow;
      end = red;
      t = (clamped - (MAX_WATT / 2)) / (MAX_WATT / 2);
    }

    return `background-color: rgba(${
      Math.round(start.r + (end.r - start.r) * t)
    }, ${
      Math.round(start.g + (end.g - start.g) * t)
    }, ${
      Math.round(start.b + (end.b - start.b) * t)
    }, 0.5)`;
  }

</script>

<template>
  <div class="power" :style="getBackgroundColor()">
    <h3>Wie stark trittst du in die Pedale?</h3>
    <span class="watts">{{ watt }} Watt</span>
    <input type="range" v-if="debug "v-model="simulatedWatt" :min="MIN_WATT" :max="MAX_WATT"></input>
  </div>
</template>

<style scoped>
  .power {
    position: absolute;
    right: 2em;
    bottom: 5em;
    width: 12em;
    border-radius: 0.5em;
  }
  .watts {
    width: 100%;
    text-align: center;
    display: block;
    font-size: 1.5em;
    font-weight: 700;
    padding: 0.2em;
  }
  input {
    width: 90%;
    margin: 5%;
  }
  h3 {
    width: 100%;
    font-size: 0.7em;
    text-align: center;
    margin-top: 0.5em;
  }
</style>
