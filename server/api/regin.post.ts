import prisma from "~/lib/prisma"
import { confirm } from "~/lib/nodemailer"

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
      await confirm(data.email, '42345234')
      return {ok:true, user, massage:''}
    } else {
      return {
        error: 'not found'
      }
    }
  
})