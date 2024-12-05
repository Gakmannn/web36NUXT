import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  
    const data = event.context.fields
    data.author_id = +data.author_id
    data.img = event.context.files[0].newFileName

    await prisma.post.create({
      data
    })
  
})