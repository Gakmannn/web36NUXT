<template>
  <div>
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="image, i of images" :key="i">
          <NuxtImg fit="cover" height="200" width="400" :src="image" alt=""></NuxtImg>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>


    <!-- <swiper-container slidesPerView="1" loop="true" spaceBetween="10" navigation="true" ,
    pagination="true">
    <swiper-slide v-for="image, i of images" :key="i">
      <NuxtImg fit="cover" width="200px" sizes="50vw sm:50vw md:50vw" :src="image" alt=""></NuxtImg>
    </swiper-slide>
    </swiper-container> -->

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

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})

// import { register } from 'swiper/element/bundle'
// register()

// onMounted(()=>{
//   const swiperEl = document.querySelector('swiper-container') as any
  
//   // swiper parameters
//   const swiperParams = {
//     slidesPerView: 1,
//     loop: true,
//     spaceBetween: 10,
//     navigation: true, 
//     pagination: true,
//     on: {
//       init() {
//         const slideElements = swiperEl.querySelectorAll('swiper-slide')
//         for (let el of slideElements) {
//           el.classList.remove('hidden')
//         }
//       },
//     },
//   }
  
//   Object.assign(swiperEl, swiperParams)
//   swiperEl.initialize()
// })

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

swiper-slide img {
  object-fit: contain;
  object-position: center;
}

</style>