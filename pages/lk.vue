<template>
  <div>
    <img src="/favicon.ico" alt="favicon">
    <h1>LK</h1>
    <button @click="userStore.logOut">logout</button>

    <h2>Мои посты</h2>
    <form method="post" @submit.prevent="upload">
      <input type="text" name="title" v-model="title" placeholder="Заголовок">
      <textarea type="text" name="text" v-model="text" placeholder="Текст публикации"></textarea>
      <input type="file" ref="file" placeholder="Изображение">
      <input type="submit" value="Опубликовать">
    </form>

    <h2>Мои посты</h2>
    <p v-if="!data?.length">Постов пока нет</p>
    <div v-else class="grid">
      <div class="post" v-for="post of data" :key="post.id">
        <NuxtImg :src="`img/${post.img}`" sizes="300px" />
        <h2>
          <NuxtLink :to="`/posts/${post.id}_${post.title.toLowerCase().replaceAll(' ', '_')}`">{{ post.title }}
          </NuxtLink>
        </h2>
        <p>{{ post.text }}</p>
        <button @click="deletePost(post.id)">delete</button>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import type { post, user } from '@prisma/client';

interface postWithAuthor extends post {
  author: user
}

const userStore = useUser()
const { data, refresh } = await useFetch<postWithAuthor[]>(`/api/posts/by_author/${userStore.user?.id}`)


const deletePost = async (id:number) =>{
  await $fetch('/api/posts', {
    method: 'DELETE',
    body: { id, author_id: userStore.user?.id }
  })
  refresh()
}

definePageMeta({
  middleware: 'auth'
})

const title = ref('')
const text = ref('')
const file = ref(null)

const upload = async () => {
  const fileref = file.value as never as HTMLInputElement
  const fD = new FormData()
  if (fileref.files) {
    fD.append('title', title.value)
    fD.append('text', text.value)
    fD.append('img', fileref.files[0])
    fD.append('datetime', new Date().toISOString())
    fD.append('author_id', userStore.user?.id ? userStore.user?.id.toString() : '')
    await $fetch('/api/posts', {
      method: 'POST',
      body: fD
    })
    refresh()
    title.value = ''
    text.value = ''
    
  }
}
</script>