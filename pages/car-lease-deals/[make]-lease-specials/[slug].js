import React from 'react'
import { NextSeo } from 'next-seo'
import Breadcrumbs from '../../../components/UI/Breadcrumbs'
import SingleCarLease from '../../../components/CarSection/SingleCarLease'


export default function CarDetailPage({ ssrCar, make }) {
  const filterSlug = `${make}-lease-specials`
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/car-lease-deals/${filterSlug}/${ssrCar?.slug}/`

  return (
    <>
      <NextSeo
        title={`Best car lease for ${ssrCar?.title} · ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={`Get the best ${ssrCar?.title} lease offers from ${process.env.NEXT_PUBLIC_SITE_NAME}. Access exclusive deals on reduced-price lease vehicles, monthly specials, and hard-to-find limited-time discounts. Flexible short- and long-term leasing options. Top car lease offers in Philadelphia. Many of our best deals are not listed online.`}
        canonical={canonicalUrl}
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

  if (car.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ssrCar: car,
      make,
    },
    revalidate: 86400,
  };
}
