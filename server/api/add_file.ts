export default defineEventHandler(async (event) => {
  if (event.method == 'POST') {
    // const data = await readMultipartFormData(event)
    // console.log(data)
    // if (data) {
    //   const fieldName = data[0].name as string
    //   const fieldData = data[0].data.toString()
    //   return { fileName: event.context.fileName, [fieldName]: fieldData }
    // }
    // return { fileName: event.context.fileName }
    return { data: event.context.fields, files: event.context.files }
  }
  else {
    return { data: 'not allowed' }
  }
})