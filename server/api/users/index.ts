import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  if (event.method == 'GET') {
    const users = await prisma.user.findMany({ 
      include: {
        posts: true
      }
    })
    return users
  }
  else if (event.method == 'POST') {
    
  }
  else if (event.method == 'DELETE') {
    
  }
  else if (event.method == 'PUT') {
    
  }
})