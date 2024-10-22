import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { useFetch } from 'nuxt'

export const useApp = defineStore('app', () => {
  const data = ref(Date.now())
  const dataPage = ref('')
  let dataPageLoaded = false
  // const downloadData = async () => {
  //   if (!dataPage.value) {
  //     dataPage.value = await useFetch('http://localhost:3000/web36NUXT/time') as unknown as string
  //   }
  // }
  // if (!dataPageLoaded) {
  //   dataPageLoaded = true
  //   await downloadData()
  // }
  // console.log('app store')
  // console.log(typeof $fetch)
  return { data, dataPage }
})