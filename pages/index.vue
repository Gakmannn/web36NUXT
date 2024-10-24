<template>
  <div>
    <img src="/favicon.ico" alt="favicon">
    <h1>Hello from index Page</h1>
    <MenuAppAlert></MenuAppAlert>
    <AppAlert></AppAlert>
    <DevOnly>
      {{ appStore.dataPage }}
    </DevOnly>
      <!-- 
    {{ appStore.data }} -->
      <!-- <p>{{ page }}</p> -->
      <!-- <p>{{ error }}</p>
    <p>{{ status }}</p> -->
      <button @click="() => refresh()">Обновить данные</button>
  </div>
</template>

<script setup lang="ts">
const appStore = useApp()
await appStore.downloadData()
// throw createError({ message: 'Fin' })
// const page = ref('')
// onMounted(async () => {
//   page.value = await $fetch('/time')
// })
// console.log(useNuxtData('/time'))
// const { data: page, error, status, refresh } = await useFetch('/time', { lazy: true })


</script>