<script setup lang="ts">
import { QuizCard } from "@/models";

const emit = defineEmits(["onError"]);
const props = defineProps<{
  card: QuizCard
}>(); 
</script>

<template>
  <div class="background" />
  <div class="modal fade" id="quizcard-modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">Quiz-Karte #{{card.id}}</h1>
        </div>
        <div class="modal-body">
          <p class="additional">Versuche, diese Frage zu beantworten:</p>
          <p class="question">{{ card.question }}</p>
          <p class="additional">Drücke <i>[Enter]</i> um einen Prompt auszuwählen oder einen eigenen Prompt einzugeben.</p>
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
.modal {
  display: contents;
  border-color: #4b647d;
}
p {
  color: #4b647d;
}
p.additional {
  font-size: 0.8em;
  margin-bottom: 0;
}
p.question {
  margin: 1em;
}
.modal-content {
  top: 10vh;
}
.modal-header {
  background-color: #fac300;
  color: #4b647d;
}
.modal-dialog {
  z-index: 20 !important;
}
h1 {
  font-size: 1.2em;
}
</style>
