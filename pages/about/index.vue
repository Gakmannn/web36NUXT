<template>
  <div>
      {{ appStore.dataPage  }}
    <!-- <h1>Hello from about Page</h1>
    <div v-if="status === 'pending'">
      Loading ...
    </div>
    <div v-else> 
      {{ appStore.dataPage  }}
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: false,
  layoutTransition: false
})

// const { data: page, error, status } = await useFetch('/time', { lazy: true })
const appStore = useApp()
appStore.downloadData()


</script>