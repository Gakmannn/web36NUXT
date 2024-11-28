<template>
    <h1>Not found 404</h1>
    {{ route.params.slug }}
</template>

<script setup lang="ts">

const route = useRoute()


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