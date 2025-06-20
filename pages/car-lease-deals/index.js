import React from 'react'
import { NextSeo } from 'next-seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import CarSection from '../../components/CarSection/CarSection'
import { getMakes } from '../../lib/api/getMakes'

export default function CarLeaseDealsPage({ initialDeals, total, makes }) {
  return (
    <>

      <NextSeo
        title={`Auto Leasing in Philadelphia | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={`Discover the best car lease deals in Philadelphia. Drive the vehicle you want at a monthly payment you can afford. Flexible terms and $0 down options available.`}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/car-lease-deals/`}
      />

      <Breadcrumbs />

      <div className="inner-banner-con">
        <div className="inner-banner-left">
          <h1>Best Car Lease Deals in Philadelphia</h1>
          <p>
            Exclusive $0 Down Leasing Specials Available in Philadelphia, PA
          </p>
        </div>
        <div className="inner-banner-right-area">
          <div className="inner-banner-right">
            <p>
              Limited-time lease offers and rebates <br />
              across the Philadelphia metropolitan area
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
      total: dealsRes.total || 0,
      makes,
    },
    revalidate: 86400,
  }
}
