import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const data = await prisma.user.findMany({})
  return data
})