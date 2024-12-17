import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
  if (data.email && data.id && data.token) {
      const user = await prisma.user.findUnique({
        select: {
          id: true,
          email: true,
          name: true,
          token: true
        },
        where: {
          email: data.email,
          id: data.id,
          token: data.token,
        }
      })
      if (user) {
        return {ok:true, user, massage:''}
      }
      return {ok:false, user:null, massage:''}
    } else {
      return {
        error: 'not found'
      }
    }
  
})