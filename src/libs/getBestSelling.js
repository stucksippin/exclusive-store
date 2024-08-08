export default async function getBestSelling(refVar) {
    const resp = await fetch('http://localhost:3000/BestSellingArray')
    refVar.value = await resp.json()
}