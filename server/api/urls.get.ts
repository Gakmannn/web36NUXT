import prisma from "~/lib/prisma"

export default defineSitemapEventHandler(async () => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id:true,
        title:true,
        updated_at:true,
      }
    })

    const urls = [] as any[]
    for (let el of posts) {
      urls.push(
        {
          loc: `/posts/${el.id}_${el.title.toLowerCase().replaceAll(' ','_')}`,
          lastmod: el.updated_at.toUTCString(),
          priority: 0.8,
          changefreq: 'daily'
        }
      )
    }
    
    for (let i=0; i<6; i++) {
      urls.push(
        {
          loc: `/books/${i}`,
          priority: 0.6,
          changefreq: 'monthly'
        }
      )
    }
    
    return urls
  } catch (e) {
    console.log(e)
    return []
  }
})