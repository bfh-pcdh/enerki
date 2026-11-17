<script setup lang="ts">
import { i18n } from "@/assets/i18n";
import { ref, watch } from "vue";
import { ENV } from "../../env";
import { Connection, getPersisted, store, STORE_KEY, persist } from "../store";
const PACKAGE = require("../../package.json");
const version = PACKAGE.version;
const emit = defineEmits(["onClose"]);

const settings: Connection[] = ENV;

let selected = ref<Connection>(store.connection);
const llm_token = ref(selected.value.TOKEN || "");
const search_token = ref(selected.value.SEARCH_KEY || "");

watch(selected, (n) => {
  search_token.value = n.SEARCH_KEY;
  llm_token.value = n.TOKEN;
});

function save(): void {
  if (selected.value) {
    store.setConnection(selected.value);
  }
  emit("onClose");
}

function select(c: Connection): void {
  // selected.value = c;
  // c && store.setConnection(c);
}

function setToken(value: string, type: "llm" | "search") {
  switch (type) {
    case "llm":
      selected.value.TOKEN = value;
      break;
    case "search":
      selected.value.SEARCH_KEY = value;
      break;
  }
}
</script>

<template>
  <div class="settings-container">
    <section class="settings-section">
      <div>
        <h1>{{ i18n("SETTINGS") }}</h1>
        <p class="version">{{ i18n("VERSION_LABEL") }} {{ version }}</p>
      </div>
    </section>

    <section class="settings-section">
      <div class="form-group">
        <label for="connections">{{ i18n("SELECT_AI") }}</label>
        <select
          id="connections"
          name="connections"
          v-model="selected"
          @change="select(selected)"
        >
          <option
            v-for="connection of settings"
            :key="connection.NAME"
            :value="connection"
          >
            {{ connection.NAME }}
          </option>
        </select>
      </div>
    </section>

    <section class="settings-section">
      <div class="token-line">
        <div class="token-label">
          <label for="llm-token"> {{ i18n("ENTER_TOKEN") }} {{ selected.NAME }} </label>
        </div>

        <div class="token-input">
          <input
            id="llm-token"
            name="llm-token"
            v-model="llm_token"
            :placeholder="i18n('ENTER_TOKEN') + selected.NAME"
          />
          <button @click="setToken(llm_token, 'llm')">
            {{ i18n("SET") }}
          </button>
        </div>
      </div>

      <div class="token-line">
        <div class="token-label">
          <label for="search-token">Tavily API-Key</label>
        </div>

        <div class="token-input">
          <input
            id="search-token"
            name="search-token"
            v-model="search_token"
            :placeholder="i18n('ENTER_TOKEN') + ' TAVILY'"
          />
          <button @click="setToken(search_token, 'search')">
            {{ i18n("SET") }}
          </button>
        </div>
      </div>
    </section>

    <section class="settings-section connection-section">
      <div class="connection-info">
        <div v-for="[key, value] in Object.entries(selected)" :key="key" class="info-row">
          <span class="info-key">{{ key }}</span>
          <span class="info-value">{{ value }}</span>
        </div>
      </div>
    </section>

    <footer class="settings-footer">
      <button class="close-button" @click="save">
        {{ i18n("SAVE") }}
      </button>
    </footer>
  </div>
</template>

<style scoped>
.settings-container {
  width: 100%;
  max-width: 850px;
  margin: 7em auto 0 auto;
  padding: 0 2em;
  box-sizing: border-box;
  color: var(--text-color, inherit);
}

.settings-header {
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 1px solid var(--border-color, #ddd);
}

.version {
  margin: 0.4em 0 0;
  font-size: 0.85em;
  opacity: 0.65;
}

.settings-section {
  margin-bottom: 1.5em;
  padding: 1.5em;
  border: 1px solid var(--border-color, #ddd);
  border-radius: 10px;
  background: var(--section-background, rgba(128, 128, 128, 0.04));
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

label {
  font-size: 0.9em;
  font-weight: 600;
}

select,
input {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 0.7em 0.8em;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 6px;
  font: inherit;
  background: var(--input-background, transparent);
  color: inherit;
}

select {
  cursor: pointer;
}

.token-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;
  padding: 1em 0;
}

.token-line + .token-line {
  border-top: 1px solid var(--border-color, #ddd);
}

.token-label {
  display: flex;
  flex-direction: column;
  gap: 0.35em;
  flex: 1;
}

.token-label small {
  font-size: 0.8em;
  opacity: 0.6;
}

.token-input {
  display: flex;
  align-items: center;
  gap: 0.5em;
  flex: 2;
}

button {
  padding: 0.7em 1.2em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  white-space: nowrap;
}

.token-input button {
  min-width: 5em;
}

button:hover {
  filter: brightness(0.9);
}

.connection-info {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 0.85em;
}

.info-row {
  display: flex;
  justify-content: space-between;
  gap: 1em;
  padding: 0.5em 0.7em;
  border-radius: 5px;
  background: var(--info-background, rgba(128, 128, 128, 0.08));
}

.info-key {
  font-weight: 600;
  opacity: 0.75;
}

.info-value {
  text-align: right;
  overflow-wrap: anywhere;
}

.settings-footer {
  display: flex;
  justify-content: center;
  padding: 0.5em 0 1em;
}

.close-button {
  min-width: 10em;
  background-color: #fac300;
}

@media (max-width: 600px) {
  .settings-container {
    padding: 0 1em;
    margin: 1em auto;
  }

  .settings-section {
    padding: 1em;
  }

  .token-line {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8em;
  }

  .token-input {
    width: 100%;
  }

  .info-row {
    flex-direction: column;
    gap: 0.3em;
  }

  .info-value {
    text-align: left;
  }
}
</style>
