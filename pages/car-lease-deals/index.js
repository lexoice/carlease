import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import CarSection from '../../components/CarSection/CarSection'
import { getMakes } from '../../lib/api/getMakes'

export default function CarLeaseDealsPage({ initialDeals, total, makes }) {
  return (
    <>
      <Seo
        title={`Auto Leasing in Philadelphia | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description="Auto leasing in Philadelphia will have you driving a vehicle you love at a price you can afford. We offer the best car lease deals around."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/car-lease-deals`}
        ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/car-lease-deals`}
      />

      <Breadcrumbs />

      <div className="inner-banner-con">
        <div className="inner-banner-left">
          <h1>Best Car Lease Deals in Philadelphia</h1>
          <p>
            Best Car Lease Deals in Philadelphia | $0 Down Leasing Specials
          </p>
        </div>
        <div className="inner-banner-right-area">
          <div className="inner-banner-right">
            <p>
              Special offers, rebates in Philadelphia <br />
              (Philadelphia, New Jersey, Delaware, Maryland, Virginia)
            </p>
          </div>
        </div>
      </div>

      <CarSection
        ssrDeals={initialDeals}
        ssrTotal={total}
        makes={makes}
      />
    </>
  )
}

export async function getStaticProps() {
  const [dealsRes, makes] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/get-deals.php?page=1&per_page=9&min=0&max=1500`
    ).then(r => r.json()),
    getMakes(),
  ])

  return {
    props: {
      initialDeals: dealsRes.cars || [],
      total:        dealsRes.total || 0,
      makes,
    },
    revalidate: 86400,
  }
}
