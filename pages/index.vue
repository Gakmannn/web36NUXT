<template>
  <div>

    <swiper-container slides-per-view="3" speed="500" loop="true" spaceBetween="10">
      <swiper-slide v-for="i in 10" :key="i">Slide {{i}}</swiper-slide>
    </swiper-container>

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
    <!-- <button @click="() => refresh()">Обновить данные</button> -->
  </div>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()
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
<style>
swiper-container {
  margin: 20px auto;
  max-width: 600px;
  height: 100px;
}
swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px red solid;
  border-radius: 10px;
  box-sizing: border-box;
}

</style>