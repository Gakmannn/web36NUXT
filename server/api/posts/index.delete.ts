import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
 
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
  
})