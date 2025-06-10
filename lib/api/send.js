export async function sendLead({
  name,
  email,
  phone,
  make,
  model,
  site,
  timestamp,
  body_type = '',
  recaptchaToken = ''
}) {
  const endpoint = `${process.env.NEXT_PUBLIC_API_BASE}/send/index.php`
  const ts = timestamp ?? Math.floor(Date.now() / 1000)
  const form = new FormData()

  form.append('name', name)
  form.append('email', email)
  form.append('phone', phone)
  form.append('body_type', body_type)      // honeypot
  form.append('timestamp', ts.toString())   // timing check
  if (make)  form.append('make', make)
  if (model) form.append('model', model)
  form.append('site', site)
  form.append('recaptchaToken', recaptchaToken)

  const res = await fetch(endpoint, { method: 'POST', body: form })
  let payload
  try {
    payload = await res.json()
  } catch {
    throw new Error(`Invalid JSON response (HTTP ${res.status})`)
  }
  if (!payload.success) {
    throw new Error(payload.message || 'Unknown error')
  }
  return payload
}
