export async function getModels(makeSlug) {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE}/get-models.php`)
    url.searchParams.append('make', makeSlug)
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to load models')
    return await res.json()
}
