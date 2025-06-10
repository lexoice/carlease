import React, { useState, useEffect } from 'react'
import { getDeals } from '../../lib/api/getDeals'
import CarItem from './CarItem'

const CarSectionHome = () => {
  const [cars, setCars] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadInitial()
  }, [])

  const loadInitial = async () => {
    setLoading(true)
    try {
      const data = await getDeals({ page: 1, per_page: 4 })
      const initial = data.cars || []
      setCars(initial)
      setHasMore(initial.length === 4)
      setPage(2)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = async () => {
    if (loading || !hasMore) return
    setLoading(true)
    try {
      const data = await getDeals({ page, per_page: 4 })
      const next = data.cars || []
      setCars(prev => [...prev, ...next])
      setHasMore(next.length === 4)
      setPage(prev => prev + 1)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="search-filter-sec">
      <div className="container-x">
        <div className="search-filter-wrp">
          <div className="search-filter-right">
            <div className="search-result">
              <div className="search-result-item">
                {cars.map(car => (
                  <CarItem key={car.slug} car={car} />
                ))}
              </div>

              {loading && (
                <p style={{ textAlign: 'center' }}>Loading...</p>
              )}

              {!loading && hasMore && (
                <div style={{ textAlign: 'center', margin: '20px 0 40px' }}>
                  <button
                    className="color-get get-quote-btn show-more-btn"
                    onClick={loadMore}
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarSectionHome
