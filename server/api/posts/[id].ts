import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (event.method == 'GET') {
    if (id && +id) {
      const posts = await prisma.post.findUnique({
        include: {
          author: true
        },
        where: {
          id:+id
        }
      })
      return posts
    } else {
      return {
        error: 'not found'
      }
    }
  }
  else if (event.method == 'POST') {

  }
  else if (event.method == 'DELETE') {

  }
  else if (event.method == 'PUT') {

  }
})