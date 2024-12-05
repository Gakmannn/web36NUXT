import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  name: string | null;
  id: number;
  email: string;
}

const users = [
  { login: 'abc', pass: '098f6bcd4621d373cade4e832627b4f6', image: '' }
]

export const useUser = defineStore('user', () => {
  const user = ref(undefined as undefined | User)
  const logOut = () => {
    user.value = undefined
    delete localStorage.user
    navigateTo('/login')
  }
  const logIn = async (email: string, pass: string) => {
    console.log(email, pass)
    user.value = await $fetch<User |undefined>('/api/login', {
      method: 'POST',
      body: { email, pass }
    })
    console.log(user.value)
    if (user.value) {
      localStorage.user = JSON.stringify(user.value)
      return ''
    } else {
      return 'Проверьте логин либо пароль'
    }
  }
  const autoLogin = () => {
    if (localStorage.user) {
      const tempUser = JSON.parse(localStorage.user)
      user.value = tempUser
    }
  }
  return { user, logIn, logOut, autoLogin }
})