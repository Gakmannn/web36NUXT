import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  if (event.method == 'POST') {
    const data = await readBody(event)
    try {
      const newUser = await prisma.user.create({
        data
      })
      return newUser
    } catch (e) {
      console.log(e)
      return e      
    }
  }
  else {
    return {data:'not allowed'}
  }
})