import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (event.method == 'GET') {
    if (id && +id) {
      const posts = await prisma.post.findMany({
        include: {
          author: true
        },
        where: {
          author_id:+id
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