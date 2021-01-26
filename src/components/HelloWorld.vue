<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <v-code-mirror v-model:value="state.json" />
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import { VCodeMirror } from 'vue3-code-mirror';

defineProps({
  msg: String
})

const state = reactive({ count: 0, json: 'null' })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
