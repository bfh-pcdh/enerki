<script setup lang="ts">
  import { store } from '@/store';

  const props = defineProps({
    userInputting: Boolean
  });

  const emit = defineEmits(['onSelectPrompt']);

  document.addEventListener('keydown', function(event) {
    const key = Number(event.key);
    if (!props.userInputting && event.key != ' ' && !isNaN(key) && key <= store.examplePrompts.length) {
      selectPrompt(key - 1);
    }
});


  function selectPrompt(index: number) {
    const prompt = store.examplePrompts[index];
   
    window.setTimeout(() => 
      emit('onSelectPrompt', prompt),
      50
    );
  }
</script>

<template>
  <ul>
    <li v-for="prompt, i of store.examplePrompts" @click="selectPrompt(i)">
      <span class="prompt-number">
        {{ i + 1 }}
      </span>
      <p>
        {{ prompt }}
      </p>
    </li>
  </ul>
</template>

<style scoped>
  ul {
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
  li {
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
  li:hover {
    background-color: #e0e4e8;
  }
  .prompt-number {
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
  p {
    margin-bottom: 0;
    margin-top: -1.5rem;
    position: relative;
    z-index: 10;
  }

</style>
