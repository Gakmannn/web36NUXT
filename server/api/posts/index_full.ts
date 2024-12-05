import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  if (event.method == 'GET') {
    const posts = await prisma.post.findMany({ 
      include: { 
        author : true
      }
    })
    return posts
  }
  else if (event.method == 'POST') {
    
    const data = event.context.fields
    data.author_id = +data.author_id
    data.img = event.context.files[0].newFileName

    await prisma.post.create({
      data
    })
  }
  else if (event.method == 'DELETE') {
    try {
      const data = await readBody(event)
      await prisma.post.delete({
        where: {
          id:data.id,
          author_id: data.author_id
        }
      })
      return true
    } catch (e) {
      return e
    }
  }
  else if (event.method == 'PUT') {
    
  }
})