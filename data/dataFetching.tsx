export async function getContent(id: string) {
    console.log(id)
  const content = await import(`./${id}`).then(m => m)
  console.log(content)
  return content.default
}