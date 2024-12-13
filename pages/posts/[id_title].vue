<template>
  <div v-if="post" class="postPage">
    <h1>{{ post.title }}</h1>
    <strong>pub. date {{ new Date(post.updated_at).toLocaleDateString() }} author: {{ post.author.name}}</strong>
    <br>
    <NuxtImg :src="`img/${post.img}`" sizes="450px" class="postImg"/>
    <p>{{ post.html }}</p>
  </div>
  <div v-else>
    <h1>Not found 404</h1>
    {{ route.params.id_title }}
  </div>
</template>

<script setup lang="ts">
import type { Post, User } from '@prisma/client';

interface postWithAuthor extends Post {
  author: User
}

const route = useRoute()

const post = ref(null as null | postWithAuthor)
const id = route.params.id_title.toString().split('_',1)[0]
if (id && +id) {
  const { data } = await useFetch<postWithAuthor>(`/api/posts/${id}`)
  post.value = data.value
}

// const postsStore = usePosts()
// const post = postsStore.posts.find(el=>el.id==+id)
// const author = ref(null as null|any)
// if (post) {
//   author.value = postsStore.authors.find(el=>el.id==post.author_id)
// }
</script>

<style scoped>
.postPage {
  max-width: 940px;
  margin: 50px auto;
}
.postImg {
  display: block;
  margin: 10px auto;
  border-radius: 20px;
}
</style>