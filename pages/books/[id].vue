<template>
  <div>
    <template v-if="isTrue">
      <h1>{{ arr[+route.params.id].title }}</h1>
      <p>{{ arr[+route.params.id].author }}</p>
      <button>Buy</button>
      <button>Order</button>
    </template>
    <template v-else>
      <h1>Not found</h1>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id) && !(+route.params.id > 5 || +route.params.id < 0)
  }
})

const arr = [
  { title: "Гроза", author: 'Александр Островский', id: 0 },
  {
    title: "Морфий", author: 'Михаил Булгаков', id: 1
  },
  {
    title: "Капитанская дочка", author: 'Александр Пушкин', id: 2
  },
  {
    title: "Скандал на драконьем факультете", author: 'Тальяна Орлова', id: 3
  },
  {
    title: "Братья Карамазовы", author: 'Федор Достоевский', id: 4
  },
  {
    title: "Люди сороковой мили (спектакль)", author: 'Джек Лондон', id: 5
  },
]

useSeoMeta({
  title: arr[+route.params.id].title,
  ogTitle: arr[+route.params.id].title,
  description: arr[+route.params.id].title + ' - ' + arr[+route.params.id].author,
  ogDescription: arr[+route.params.id].title + ' - ' + arr[+route.params.id].author,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const isTrue = computed(() => {
  const id = route.params.id
  if (id && (+id).toString() != id) {
    return false
  }
  if (id && (+id < arr.length)) {
    return true
  }
  return false
})
</script>

<style scoped></style>