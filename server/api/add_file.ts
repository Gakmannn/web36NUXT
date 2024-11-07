export default defineEventHandler(async (event) => {
  if (event.method == 'POST') {
    const data = await readMultipartFormData(event)
    if (data) {
      const fieldName = data[0].name as string
      const fieldData = data[0].data.toString()
      return { fileName: event.context.fileName, [fieldName]: fieldData }
    }
    return { fileName: event.context.fileName }
  }
  else {
    return { data: 'not allowed' }
  }
})