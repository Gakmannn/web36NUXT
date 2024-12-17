import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  name: string | null;
  id: number;
  email: string;
  token: string
}

interface regData {
  ok: boolean;
  user: User;
  massage: string;
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
      const userToLocal = {...user.value}
      // @ts-ignore
      delete userToLocal.post
      localStorage.user = JSON.stringify(userToLocal)
      return ''
    } else {
      return 'Проверьте логин либо пароль'
    }
  }
  const autoLogin = async () => {
    if (localStorage.user) {
      const tempUser = JSON.parse(localStorage.user)
      const data = await $fetch<regData>('/api/autologin', {
        method: 'POST',
        body: { ...tempUser }
      })
      if (data.ok) {
        user.value = data.user
      }
    }
  }
  const regIn = async (email: string, pass: string) => {
    const data = await $fetch<regData>('/api/regin', {
      method: 'POST',
      body: { email, pass }
    })
    if (data.ok) {
      user.value = data.user
      localStorage.user = JSON.stringify(data.user)
      return ''
    } else {
      return data?.massage
    }
  }
  return { user, logIn, logOut, autoLogin, regIn }
})