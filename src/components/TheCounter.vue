<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="counter">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.counter {
  text-align: center;
  margin-top: 1rem;
}

.counter button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  cursor: pointer;
  transition: border-color 0.25s;
}

.counter button:hover {
  border-color: hsla(160, 100%, 37%, 1);
}
</style>
