<template>
  <div>

    <swiper-container slides-per-view="1" speed="500" loop="true" spaceBetween="10">
      <swiper-slide v-for="image, i of images" :key="i">
        <NuxtImg fit="cover" width="200px" sizes="50vw sm:50vw md:50vw" :src="image" alt=""></NuxtImg>
      </swiper-slide>
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


const images = [
  'img/logo.jfif',
  'img/zakat.jpg',
  'img/i.webp',
]

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

/* swiper-slide img {
  object-fit: contain;
  object-position: center;
} */

</style>