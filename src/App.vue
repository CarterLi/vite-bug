<template>
  <v-code-mirror v-model:value="state.json" />
</template>

<script setup>
import { reactive } from 'vue'
import { VCodeMirror } from 'vue3-code-mirror'

const state = reactive({
  json: JSON.stringify({
    a: 1,
    b: 'b',
    c: ['c'],
  }, null, 2),
})
</script>
