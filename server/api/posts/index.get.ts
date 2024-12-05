import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  
    const posts = await prisma.post.findMany({ 
      include: { 
        author : true
      }
    })
    return posts
  
})