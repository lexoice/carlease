export async function getCar(slug) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/get-car.php?slug=${encodeURIComponent(slug)}`
    )
    if (!res.ok) throw new Error('Failed to load car data')
    return await res.json()
}
