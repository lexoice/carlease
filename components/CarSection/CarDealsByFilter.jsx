// components/CarSection/CarDealsByFilter.jsx

import React, { useState, useEffect, useRef, useCallback } from "react"
import { getDeals } from "../../lib/api/getDeals"
import Sidebar from "./Sidebar"
import CarSectionHeader from "./CarSectionHeader"
import CarItem from "./CarItem"

/**
 * Принимает предзагруженные через ISR пропы:
 *  - ssrCars: массив первых 12 машин
 *  - ssrTotal: общее число машин
 *  - ssrBase: базовый слаг (например "acura")
 *  - ssrFilterType: "make" или "body_type"
 *  - makes: список производителей для Sidebar
 */
const CarDealsByFilter = ({
  ssrCars = [],
  ssrTotal = 0,
  ssrBase = "",
  ssrFilterType = null,
  makes = []
}) => {
  // сохраняем базовые данные из пропсов
  const [base]       = useState(ssrBase)
  const [filterType] = useState(ssrFilterType)

  const [carList, setCarList] = useState(ssrCars)
  const [total,   setTotal]   = useState(ssrTotal)
  const [page,    setPage]    = useState(2)                 // номер следующей страницы
  const [hasMore, setHasMore] = useState(ssrCars.length === 12)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef()

  // при смене фильтра (новый ssrCars/ssrTotal/ssrBase/ssrFilterType) сбрасываем стейт
  useEffect(() => {
    setCarList(ssrCars)
    setTotal(ssrTotal)
    setPage(2)
    setHasMore(ssrCars.length === 12)
  }, [ssrCars, ssrTotal, ssrBase, ssrFilterType])

  // грузим следующую порцию машин
  const fetchMore = useCallback(async () => {
    if (!filterType || loading || !hasMore) return
    setLoading(true)
    try {
      const params = { page, per_page: 12 }
      if (filterType === "make")        params.make      = base
      else if (filterType === "body_type") params.body_type = base

      const data = await getDeals(params)
      setTotal(data.total)
      setCarList(prev => [...prev, ...data.cars])
      setHasMore((data.cars?.length || 0) === 12)
      setPage(prev => prev + 1)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [base, filterType, page, hasMore, loading])

  // infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchMore()
        }
      },
      { threshold: 1.0 }
    )
    const el = loaderRef.current
    if (el) observer.observe(el)
    return () => el && observer.unobserve(el)
  }, [fetchMore])

  // заголовок для сообщения "No vehicles found"
  const title = base
    .split("-")
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  return (
    <section className="search-filter-sec">
      <div className="container-x">
        <div className="search-filter-wrp">

          {/* Sidebar с переданными SSR-списками makes */}
          <Sidebar makes={makes} />

          <div className="search-filter-right">
            <CarSectionHeader total={total} />

            <div className="search-result">
              <div className="search-result-item">
                {carList.map((car, i) => (
                  <CarItem key={`${car.slug}-${i}`} car={car} />
                ))}
              </div>

              {/* сообщение, если после загрузки нет машин */}
              {!loading && carList.length === 0 && (
                <p style={{ textAlign: "center", marginTop: 20 }}>
                  No vehicles found for “{title}”.
                </p>
              )}

              {/* индикатор загрузки */}
              {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

              {/* точка подгрузки для IntersectionObserver */}
              <div ref={loaderRef} style={{ height: 1 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarDealsByFilter
