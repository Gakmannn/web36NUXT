<template>
<h1>Блог mysite.com</h1>
<strong>Весь мир IT в одном месте</strong>
<p v-if="!posts?.length && ok">Постов пока нет</p>
<p v-if="!ok">Что-то пошло не так. Мы уже работаем над проблемой</p>
<div v-else class="grid">
  <div class="post" v-for="post of posts" :key="post.id">
    <NuxtImg :src="`img/${post.img}`" sizes="300px"/>
    <h2><NuxtLink :to="`/posts/${post.id}_${post.title.toLowerCase().replaceAll(' ','_')}`">{{ post.title }}</NuxtLink></h2>
    <p>{{ post.html }}</p>
  </div>
</div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'Мой невероятный сайт',
  ogTitle: 'Мой невероятный сайт',
  description: 'Это мой невероятный сайт, позвольте мне рассказать вам о нем.',
  ogDescription: 'Это мой невероятный сайт, позвольте мне рассказать вам о нем.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const {data} = await useFetch('/api/posts')
const posts = ref(data.value?.posts)
const ok = ref(data.value?.ok)

if (import.meta.client) {
  console.log(document.querySelector('.grid'))
}

onMounted(()=>{

})

// const postsStore = usePosts()

</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 20px;
  margin: 50px auto;
  width: 940px;
}
</style>