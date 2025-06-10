export async function getDeals(params = {}) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE}/get-deals.php`)
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') {
      url.searchParams.append(k, v)
    }
  })
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch car deals')
  return await res.json()
}
