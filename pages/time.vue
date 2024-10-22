<template>
  {{ appStore.data }}
</template>

<script setup lang="ts">

const appStore = await useApp()

</script>