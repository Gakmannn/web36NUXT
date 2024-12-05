<template>
  <div>
    <div v-for="user of users" :key="user.id">
      <p>Id {{ user.id }}</p>
      <p>Name {{ user.name }}</p>
      <p>Mail {{ user.email }}</p>
    </div>

    <form method="post" @submit.prevent="addAuthor">
      <input type="text" v-model="name" placeholder="name">
      <input type="text" v-model="email" placeholder="email">
      <input type="submit" value="save">
    </form>

  </div>
</template>

<script setup lang="ts">
import type { user } from '@prisma/client';

const { data: users } = useFetch<user[]>('/api/users')
const name = ref('')
const email = ref('')

async function addAuthor () {
  const data = await $fetch<user>('/api/add_user', {
    method: 'POST',
    body: {name:name.value, email:email.value}
  })
  if (data.id) {
    users.value?.push(data)
  } else {
    alert(data)
  }
}

</script>