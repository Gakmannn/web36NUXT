import { useUser } from "~/stores/user"
const userStore = useUser()

export default defineNuxtRouteMiddleware((to, from) => {
  if (!userStore.user && to.path.includes('\lk')) {
    return navigateTo('/login')
  }
})