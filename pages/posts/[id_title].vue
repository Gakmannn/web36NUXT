<template>
  <div v-if="data" class="postPage">
    <h1>{{ data.title }}</h1>
    <strong>pub. date {{ new Date( data.datetime).toLocaleDateString() }} author: {{data.author.name}}</strong>
    <br>
    <NuxtImg :src="`img/${data.img}`" sizes="450px" class="postImg"/>
    <p>{{ data.text }}</p>
  </div>
  <div v-else>
    <h1>Not found 404</h1>
    {{ route.params.id_title }}
  </div>
</template>

<script setup lang="ts">
import type { post } from '@prisma/client';

const route = useRoute()

const id = route.params.id_title.toString().split('_',1)[0]
if (id && +id) {
  const {data} = await useFetch<post>(`/api/posts/${id}`)
}

// const post = data
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