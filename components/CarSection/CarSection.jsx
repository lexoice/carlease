// components/CarSection/CarSection.jsx

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'
import { getDeals } from '../../lib/api/getDeals'
import Sidebar from './Sidebar'
import CarSectionHeader from './CarSectionHeader'
import CarItem from './CarItem'


const CarSection = ({
  ssrDeals = [],
  ssrTotal = 0,
  makes = []
}) => {
  const router = useRouter()
  const { min: qMin, max: qMax } = router.query


  const min = parseInt(qMin, 10) || 0
  const max = parseInt(qMax, 10) || 1500


  const [carList, setCarList] = useState(ssrDeals)
  const [total,   setTotal]   = useState(ssrTotal)
  const [page,    setPage]    = useState(2)
  const [hasMore, setHasMore] = useState(ssrDeals.length === 3)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef()


  const fetchCars = useCallback(
    async (pageNum) => {
      setLoading(true)
      try {

        const params = (qMin != null || qMax != null) 
          ? { page: 1, per_page: -1, min, max }
          : { page: pageNum, per_page: 3, min, max }
        
        const data = await getDeals(params)

        if (pageNum === 1 || (qMin != null || qMax != null)) {

          setTotal((qMin != null || qMax != null) ? data.cars.length : data.total)
          setCarList(data.cars)
        } else {
          setCarList(prev => [...prev, ...data.cars])
        }
        setHasMore((data.cars?.length || 0) === 3 && !(qMin != null || qMax != null))
        setPage(pageNum + 1)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    },
    [min, max, qMin, qMax]
  )


  useEffect(() => {
    if (qMin != null || qMax != null) {
      setCarList([])
      setTotal(0)
      setPage(1)
      setHasMore(false)
      fetchCars(1)
    } else {

      setCarList(ssrDeals)
      setTotal(ssrTotal)
      setPage(2)
      setHasMore(ssrDeals.length === 3)
    }
  }, [qMin, qMax, fetchCars, ssrDeals, ssrTotal])


  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchCars(page)
        }
      },
      { threshold: 1.0 }
    )
    const el = loaderRef.current
    if (el) obs.observe(el)
    return () => el && obs.unobserve(el)
  }, [fetchCars, hasMore, loading, page])

  return (
    <section className="search-filter-sec">
      <div className="container-x">
        <div className="search-filter-wrp">

          <Sidebar makes={makes} />

          <div className="search-filter-right">
            <CarSectionHeader total={total} />

            <div className="search-result">
              <div className="search-result-item">
                {carList.map((car, idx) => (
                  <CarItem key={`${car.slug}-${idx}`} car={car} />
                ))}
              </div>

              {!loading && carList.length === 0 && (
                <p style={{ textAlign: 'center', marginTop: '20px' }}>
                  No cars found matching your criteria.
                </p>
              )}

              {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}

              <div ref={loaderRef} style={{ height: 1 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarSection
