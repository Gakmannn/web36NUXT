<template>
  <div>
    <h1>Books</h1>
    <div v-for="el of arr" :key="el.id">
      <RouterLink :to="'/books/' + el.id">{{ el.title }}</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Книжная полка',
  meta: [
    { name: 'description', content: 'Мой невероятный сайт.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Привет, мир!\')' },]
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
</script>

<style scoped></style>