import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import CarSection from '../../components/CarSection/CarSection'
import { getMakes } from '../../lib/api/getMakes'

export default function CarLeaseDealsPage({ initialDeals, total, makes }) {
  return (
    <>
      <Seo
        title={`New York’s Auto Leasing | Brooklyn Lease Deals | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description="Explore the best car leasing deals in NYC and nearby areas for personal and business use. Find the cheapest short-term car leases from New York's top auto leasing company. Unlock exclusive offers and rebates in Brooklyn, Queens, Staten Island, Long Island, and the Bronx."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/car-lease-deals`}
        ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/car-lease-deals`}
      />

      <Breadcrumbs />

      <div className="inner-banner-con">
        <div className="inner-banner-left">
          <h1>Best Car Lease Deals in NYC</h1>
          <p>
            Best Car Lease Deals in Brooklyn, New York | $0 Down Leasing Specials
          </p>
        </div>
        <div className="inner-banner-right-area">
          <div className="inner-banner-right">
            <p>
              Special offers, rebates in NYC <br />
              (Brooklyn, Queens, Bronx, Staten Island, Long Island)
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
