import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import CarDealsByFilter from '../../components/CarSection/CarDealsByFilter'
import { getMakes } from '../../lib/api/getMakes'
import { getBodyTypes } from '../../lib/api/getBodyTypes'
import { getDeals } from '../../lib/api/getDeals'

export default function DealsByFilterPage({
  initialCars,
  total,
  base,
  filterType,
  filterSlug,
  makes
}) {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/car-lease-deals/${filterSlug}`

  return (
    <>
      <Seo
        title={`${base.charAt(0).toUpperCase() + base.slice(1)} Lease Specials · Monthly Lease Specials (New) · ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={`${base.charAt(0).toUpperCase() + base.slice(1)} Lease Specials at ${process.env.NEXT_PUBLIC_SITE_NAME}: ☎ ${process.env.NEXT_PUBLIC_PHONE} Exclusive access to marked down lease vehicles & monthly offers, rare to find limited discounts in addition to car lease specials. Short, long term auto leases. Best car leasing deals. Unbeatable prices. Our monthly lease deals & specials often not published`}
        canonical={canonicalUrl}
        ogUrl={canonicalUrl}
      />

      <Breadcrumbs />

      <div className="inner-banner-con">
        <div className="inner-banner-left">
          <h1>{base.charAt(0).toUpperCase() + base.slice(1)} Lease Deals in PA</h1>
          <p>
            Best Car Lease Deals in Philadelphia, PA | $0 Down Leasing Specials
          </p>
        </div>
        <div className="inner-banner-right-area">
          <div className="inner-banner-right">
            <p>
              Special offers, rebates in PA, NY, NJ <br />
              (Brooklyn, Queens, Bronx, Staten Island, Long Island)
            </p>
          </div>
        </div>
      </div>

      <CarDealsByFilter
        ssrCars={initialCars}
        ssrTotal={total}
        ssrBase={base}
        ssrFilterType={filterType}
        makes={makes}
      />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { filterSlug } = params
  const base = filterSlug.replace(/-lease-specials$/, '').toLowerCase()

  // Одновременно загружаем список марок и типов кузова
  const [makes, bodyTypes] = await Promise.all([
    getMakes(),
    getBodyTypes()
  ])

  const makeSlugs = makes.map(m => m.slug.toLowerCase())
  const bodySlugs = bodyTypes.map(b => b.slug.toLowerCase())

  let filterType = null
  if (makeSlugs.includes(base)) filterType = 'make'
  else if (bodySlugs.includes(base)) filterType = 'body_type'

  // Первые 12 машин под выбранный фильтр
  const paramsObj = { page: 1, per_page: 12 }
  if (filterType === 'make')       paramsObj.make      = base
  else if (filterType === 'body_type') paramsObj.body_type = base

  const data = await getDeals(paramsObj)

  return {
    props: {
      initialCars: data.cars || [],
      total:       data.total || 0,
      base,
      filterType,
      filterSlug,
      makes,    // SSR-список makes для Sidebar
    },
    revalidate: 86400,
  }
}
