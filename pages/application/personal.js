// pages/application/business.js

import { useState } from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'

export default function BusinessApplicationPage() {
  const [formType, setFormType] = useState('business')

  return (
    <>
      <Seo
        title={`Business Credit Application | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={`Fill out our secure business credit application and get a quote from ${process.env.NEXT_PUBLIC_SITE_NAME}.`}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/application/business`}
        ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/application/business`}
      />

      <Breadcrumbs />

      <section className="inner-banner-sec application">
        <div className="inner-banner-con">
          <div className="inner-banner-left">
            <h1>
              {formType === 'personal' ? 'Personal' : 'Business'} Application
            </h1>
            <p>
              In order to assist you in a timely manner please fill out all the
              required fields of the credit application and any other details which
              pertain to you. A lease specialist will contact you with approval and
              price information. eAutoLease.com is a positive SSL secured website.
              Before proceeding with the interactive application, please read the
              Terms & Conditions.
            </p>
            <h2>Applicant Information</h2>
            <div className="form-wrapper">
              <div style={{ display: formType === 'personal' ? 'block' : 'none' }}>
                <iframe
                  src="https://form.jotform.com/61117133862147"
                  title="Personal Credit Application Form"
                  style={{ width: '100%', height: '800px', border: 'none' }}
                />
              </div>
              <div style={{ display: formType === 'business' ? 'block' : 'none' }}>
                <iframe
                  src="https://form.jotform.com/61104680299154"
                  title="Business Credit Application Form"
                  style={{ width: '100%', height: '800px', border: 'none' }}
                />
              </div>
            </div>
          </div>

          <div className="inner-banner-right-area">
            <div className="application-btn">
              <button
                onClick={() => setFormType('personal')}
                className={`app-btn ${formType === 'personal' ? '' : 'bg'}`}
              >
                Personal Credit Application
              </button>
              <button
                onClick={() => setFormType('business')}
                className={`app-btn ${formType === 'business' ? '' : 'bg'}`}
              >
                Business Credit Application
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
      props: {}
  }
}