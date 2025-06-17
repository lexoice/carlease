export async function getMakes() {
    const base = process.env.NEXT_PUBLIC_API_BASE
    if (!base) {
      console.error('getMakes: NEXT_PUBLIC_API_BASE не задан')
      return []
    }
    const url = `${base}/get-makes.php`
  
    try {
      const res = await fetch(url)
      if (!res.ok) {
        console.error(`getMakes: HTTP ${res.status} ${res.statusText} на ${url}`)
        return []
      }
      return await res.json()
    } catch (err) {
      console.error('getMakes: fetch упал', err)
      return []
    }
  }
  