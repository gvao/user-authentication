export default async function fetcher(path: string, port = 3000) {
    const url = `http://localhost:${port}${path}`
    console.log(url)
    const response = await fetch(url)
    if (!response.ok) throw new Error('bad request')
    return response
}