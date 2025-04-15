import xml from 'xml'
import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  const xmlObject = [
    {rss:[
      { '_attr': { 'xmlns:yandex': 'http://news.yandex.ru', 'xmlns:media': 'http://search.yahoo.com/mrss/', 'version':'2.0' }}, 
      {channel: [
        {title: 'Новости сегодня'},
        {link: 'http://localhost:3000'},
        {description:'Опичсание фида'},
        {language: 'ru'},
        
      ],}
    ]}
  ] as any
    
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      updated_at: true,
      author: {
        select: {
          name: true
        }
      },
      html: true
    }
  })

  for (let post of posts) {
    const item = [
      { title: post.title },
      { link: 'http://localhost:3000/posts/'+post.id },
      { pdalink: 'http://localhost:3000/posts/'+post.id },
      { description: 'Описание' },
      { author: post.author.name },
      { category: 'Категория' },
      { pubDate: post.updated_at },
      { 'yandex:genre': 'article' },
      { 'yandex:full-text': post.html },
    ] as any
    
    xmlObject[0].rss[1].channel?.push({item})
  }


  const rss = xml(xmlObject)

  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(rss)
})