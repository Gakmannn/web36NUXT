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
      <input type="submit" velue="save">
    </form>

  </div>
</template>

<script setup lang="ts">
const {data:users} = useFetch('/api/users')
const name = ref('')
const email = ref('')

async function addAuthor () {
  const data = await $fetch('/api/add_user', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json;charset=utf-8'
    // },
    body: {name:name.value, email:email.value}
  })
  if (data.id) {
    users.value.push(data)
  } else {
    alert(data)
  }
}

</script>