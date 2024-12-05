<template>
  <div>
    <div v-if="!userStore.user"
      style="max-width: 300px; margin:100px auto; border-radius: 10px; border: 1px solid #DEDEDE; padding:20px;">
      <form @submit.prevent="logIn" style="display:flex; flex-direction: column; gap:20px">
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="pass" v-model="pass">
        {{ md5(pass) }}
        <p v-if="error">{{ error }}</p>
        <input type="submit" value="Login">
      </form>
    </div>
    <div v-else
      style="max-width: 300px; margin:100px auto; border-radius: 10px; border: 1px solid #DEDEDE; padding:20px;">
      <h2>Добро подаловать, {{ userStore.user?.name }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUser } from '~/stores/user'
import md5 from 'md5'
const userStore = useUser()
const email = ref('')
const pass = ref('')
const error = ref('')

const logIn = async () => {
  if (email.value && pass.value) {
    error.value = await userStore.logIn(email.value, md5(pass.value))
  } else {
    error.value = 'Не введён логин либо пароль'
  }
}

</script>

<style scoped></style>