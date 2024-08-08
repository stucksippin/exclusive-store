export default async function getProductById(prodId) {
    const resp = await fetch(`http://localhost:3000/products/${prodId}`)
    return await resp.json()
}