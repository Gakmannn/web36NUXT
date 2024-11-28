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
    
  }
  else if (event.method == 'DELETE') {
    
  }
  else if (event.method == 'PUT') {
    
  }
})