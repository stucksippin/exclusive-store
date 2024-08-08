export default async function getFlashSales(refVar) {
    const resp = await fetch('http://localhost:3000/FlashSalesArray')
    refVar.value = await resp.json()
}