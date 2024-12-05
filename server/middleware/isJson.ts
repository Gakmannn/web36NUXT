export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    const contentType = getRequestHeader(event, "content-type")
    if (!contentType?.includes('application/json') || !contentType?.includes('multipart/form-data;')) return
  }
})