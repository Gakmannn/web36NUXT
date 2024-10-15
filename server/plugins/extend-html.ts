export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // Это будет объектное представление HTML-шаблона.
    // console.log(html)
    html.head.push(`<meta name="description" content="Мое индивидуальное описание" />`)
  })
  // Вы также можете перехватить ответ здесь.
  // nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
})