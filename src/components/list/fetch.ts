import "regenerator-runtime/runtime.js"

export async function getImages(): Promise<any> {
  const resp = await fetch("https://8hn9dqlp5f.execute-api.us-east-1.amazonaws.com/v1/images")
  return resp.json()
}

export async function increaseDownloads(id: string): Promise<any> {
  const resp = await fetch(
    `https://8hn9dqlp5f.execute-api.us-east-1.amazonaws.com/v1/image/${id}`,
    { method: "POST" }
  )
  return resp.json()
}

export async function downloadImage(imageUrl: string): Promise<void> {
  const resp = await fetch(imageUrl)
  const myBlob = await resp.blob()

  const a = document.createElement("a")
  document.body.appendChild(a)
  const url = window.URL.createObjectURL(myBlob)
  a.href = url
  a.download = imageUrl
  a.click()
  window.URL.revokeObjectURL(url)
}
