import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    if (data.email && data.pass) {
      const testUser = await prisma.user.findUnique({
        select: {
          id:true,
        },
        where: {
          email: data.email,
        }
      })
      if (testUser) {
        return {ok:false, user:null, massage:'not uniq'}
      }
      const user = await prisma.user.create({
        data, 
        select: {
          id:true,
          email:true,
          name:true,
          token:true
        }
      })
      return {ok:true, user, massage:''}
    } else {
      return {
        error: 'not found'
      }
    }
  
})