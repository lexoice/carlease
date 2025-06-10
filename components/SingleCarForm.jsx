import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { sendLead } from '../lib/api/send'

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const SingleCarForm = ({ make, model }) => {
  const router = useRouter()
  const [openTs] = useState(() => Math.floor(Date.now() / 1000))
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState(null)


  const getRecaptchaToken = () =>
    new Promise((resolve) => {
      if (typeof window === 'undefined' || !window.grecaptcha) {
        return resolve('')
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_KEY, { action: 'submit' })
          .then(token => resolve(token))
          .catch(() => resolve(''))
      })
    })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setFeedback(null)
    setLoading(true)


    const recaptchaToken = await getRecaptchaToken()

    try {
      await sendLead({
        ...formData,
        make,
        model,
        site: typeof window !== 'undefined' ? window.location.href : '',
        timestamp: openTs,
        body_type: '',
        recaptchaToken
      })
      setFeedback({ type: 'success', message: 'Thank you! We will contact you soon.' })
      setFormData({ name: '', email: '', phone: '' })
    } catch (err) {
      setFeedback({ type: 'error', message: err.message || 'Something went wrong.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="details-frm">
      <h2>Quick Free Quote</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={loading}
          required
        />


        <input
          name="body_type"
          type="text"
          value=""
          onChange={() => {}}
          autoComplete="off"
          style={{ display: 'none' }}
          tabIndex={-1}
        />

        <input name="timestamp" type="hidden" value={openTs} />

        <div className="down-leas">
          <span><sup>$</sup>0</span>
          <p>
            <b>Down lease on all makes & models!</b> Excludes: first month,
            acquisition fee, new/transfer and more...
          </p>
        </div>

        <button
          type="submit"
          className="sa-quote-btn"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Now'}
        </button>

        {feedback && (
          <p className={`form-feedback ${feedback.type}`}>
            {feedback.message}
          </p>
        )}
      </form>
    </div>
  )
}

export default SingleCarForm
