import "regenerator-runtime/runtime.js"

export async function getImages(): Promise<any>{
  const resp = await fetch("https://8hn9dqlp5f.execute-api.us-east-1.amazonaws.com/v1/images")
  return resp.json();
}

export async function increaseDownloads(id: string): Promise<any>{
  const resp = await fetch(`https://8hn9dqlp5f.execute-api.us-east-1.amazonaws.com/v1/image/${id}`, {method: "POST"})
  return resp.json();
}