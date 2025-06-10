export async function getBodyTypes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/get-body-types.php`)
  if (!res.ok) throw new Error('Failed to load body types')
  return await res.json()
}
