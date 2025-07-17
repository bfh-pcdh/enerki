<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';

  enum USER_ROLE {
    USER = 'user',
    AI = 'assistant'
  };

  interface Message {
    role: USER_ROLE;
    content: string;
    loading: boolean;
  };

  const BASE_URL = 'https://opora.ti.bfh.ch';
  const MODEL = 'llama3.3:70b-instruct-q6_K';
  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4ZmNmOTk1LWFlZWQtNGJkNC1iOThlLTI2MGUyNmU5ZjBlNyIsImV4cCI6MTc1NTAwNzU4MX0.ftvUZq-4v9HZ3i9VUacXyf8aiRnNb0In51hFzvSyOkQ';

  const messages = ref<Message[]>([]);
  const input = ref('Gib hier deinen Text ein');
  const computeTime = ref(0);
  const error = ref<string | undefined>();

  function reset() {
    error.value = undefined;
    messages.value = [];
    computeTime.value = 0;
    input.value = 'Gib hier deinen Text ein'
  }

  function getTime(): string {
    return (computeTime.value / 1000000000).toFixed(2) + ' Sekunden';
  }

  function send() {
    if (input.value == '') return;

    const message: Message = {
      role: USER_ROLE.USER,
      content: input.value,
      loading: false
    };

    messages.value.push(message);

    const body = {
      model: MODEL,
      messages: [...messages.value]
    }
    input.value = '';

    messages.value.push({
      role: USER_ROLE.AI,
      content: '...',
      loading: true
    });

    axios.post(
      BASE_URL + '/api/chat/completions', 
      body, 
      {
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + TOKEN
        },
      }
    ).then((result) => {
      computeTime.value += result.data.usage.total_duration;
      messages.value[messages.value.length - 1] = {
        ...result.data.choices[0].message,
        loading: false
      };
    }).catch((error) => {
      error.value = JSON.stringify(error);
    });
  }
</script>

<template>
  <!--header>
    <h1>enerKI</h1>
  </header-->

  <main>
    <div class="error" v-if="error">
      <h2>Leider ist etwas schief gegangen:</h2>
      {{ error }}
      <button @click="reset">OK</button>
    </div>

    <div class="chat" v-else>
      <ul>
        <li v-for="message of messages" :class="'message-bubble chat-' + message.role">
        <div v-if="message.loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span v-else>{{ message.content }}</span>
        </li>
      </ul>
      <form action="#">
        <input type="text" v-model="input"></input>
        <button @click="send" type="submit">
          SUBMIT
        </button>
    </form>
    <span class="usage" v-if="computeTime > 0">Gesamthaft verbrauchte Zeit: {{ (computeTime / 1000000000).toFixed(2) }} Sekunden</span>
    </div>
    
  </main>
</template>

<style scoped>
ul {
  margin: 2em 0;
  padding: 0;
}
.message-bubble {
  list-style: none;
  padding: 0.25em 1em;
  border-radius: 1em;
  width: 75%;
  margin-top: 0.5em;
}
.chat-user {
  background-color: azure;
  margin-left: 25%
}
.chat-assistant {
  background-color: aquamarine;
  margin-right: 25%
}
.spinner-border {
  display: block;
  height: 1em;
  width: 1em;
  margin-left: auto;
  margin-right: auto;
}

.chat input {
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 0.5em;
  width: 75%;
}

.chat button {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;
  padding-right: 0.5em;
  width: 25%;
}

.usage {
  width: 100%;
  margin-top: 1em;
  display: block;
  text-align: center;
  color: darkgray
}

.error {
  background-color: salmon;
  margin: 1em;
  width: 100%;
  padding: 0.5em;
  border-radius: 0.5em;
  color: white;
}

.error h2 {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
