import { IncomingMessage } from 'http'

export default defineEventHandler(async (event) => {
  if (event.method == 'POST') {
    console.log('New request: ' + getRequestURL(event))
    const fileName = doSomethingWithNodeRequest(event.node.req)
    event.context.fileName = fileName
  }
})

function doSomethingWithNodeRequest(req: IncomingMessage) {
  req.on("data", (data) => {
    console.log(data)
  })
  return 'fdsgfd'
}