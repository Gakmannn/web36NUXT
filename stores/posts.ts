import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePosts = defineStore('posts', () => {
  const authors = [
    { id: 1, name: 'DFHjklklkkl' }
  ]
  
  const posts = [
    { id: 1, title: 'First post', text: 'sdf sf hdkjhfsdhfjkh ofhdsjlkfn', preview: 'sdf sf hdkjhfsdhfjkh...', img: 'i.webp', datetime:'2024-11-28', author_id: 1 }
  ]
  return { posts, authors }
})