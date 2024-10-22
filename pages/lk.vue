<template>
  <div>
    <img src="/favicon.ico" alt="favicon">
    <h1>LK</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>