import React from 'react'
import Seo from '../../../components/UI/Seo'
import Breadcrumbs from '../../../components/UI/Breadcrumbs'
import SingleCarLease from '../../../components/CarSection/SingleCarLease'

export default function CarDetailPage({ ssrCar, make }) {
  const filterSlug   = `${make}-lease-specials`
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/car-lease-deals/${filterSlug}/${ssrCar?.slug}`

  return (
    <>
      <Seo
        title={`Best car lease for ${ssrCar?.title} · ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={`Best ${ssrCar?.title} lease specials offered by ${process.env.NEXT_PUBLIC_SITE_NAME}. ☎ (718)-407-6315 Exclusive access to marked down lease vehicles & monthly offers, rare to find limited discounts in addition to car lease specials. Short, long term auto leases. Best car leasing deals. Unbeatable prices. Our monthly lease deals & specials often not published`}
        canonical={canonicalUrl}
        ogUrl={canonicalUrl}
      />

      <Breadcrumbs />

      <SingleCarLease ssrCar={ssrCar} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { slug, make } = params


  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/get-car.php?slug=${encodeURIComponent(slug)}`
  )
  const car = await res.json()

  return {
    props: {
      ssrCar: car.error ? null : car,
      make,
    },
    revalidate: 86400,
  }
}
