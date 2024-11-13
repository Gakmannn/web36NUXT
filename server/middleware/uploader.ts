import { IncomingMessage } from 'http'
import multer from 'multer'
import sharp from 'sharp'

export default defineEventHandler(async (event) => {
  if (event.method == 'POST') {
    console.log('New request: ' + getRequestURL(event))
    const fileName = doSomethingWithNodeRequest(event.node.req)
    event.context.fileName = fileName
  }
})

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'static/img/tmp');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})
// Создаём конфигурацию multer
const upload = multer({ storage: storageConfig })

function doSomethingWithNodeRequest(req: IncomingMessage) {
  req.on("data", (data) => {
    console.log(data)
  })
  console.log(upload.any())
  return 'fdsgfd'
}
