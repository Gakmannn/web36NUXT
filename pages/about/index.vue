<template>
  <div>
    <h1>Hello from about Page</h1>
    <div v-if="status === 'pending'">
      Loading ...
    </div>
    <div v-else>
      {{ page  }}
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: false,
  layoutTransition: false
})

const { data: page, error, status } = await useFetch('/time', { lazy: true })

</script>