import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    if (data.email && data.pass) {
      const user = await prisma.user.findUnique({
        select: {
          id:true,
          email: true,
          name: true
        },
        where: {
          email: data.email,
          pass: data.pass
        }
      })
      return user
    } else {
      return {
        error: 'not found'
      }
    }
  
})