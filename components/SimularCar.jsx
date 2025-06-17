import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import { getDeals } from '../lib/api/getDeals'
import CarItem from './CarSection/CarItem'

const SimilarCar = ({ body_type }) => {
  const router = useRouter()
  const { min: qMin, max: qMax } = router.query
  const [similarCars, setSimilarCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const min = parseInt(qMin, 10) || 0
  const max = parseInt(qMax, 10) || 1500

  useEffect(() => {
    if (!body_type && !qMin && !qMax) return

    setLoading(true)
    getDeals({ per_page: -1, min, max })
      .then(data => {
        const cars = data.cars || []
        let filteredCars = cars

        if (body_type) {
          filteredCars = filteredCars.filter(car => car.body_type === body_type)
        }

        const shuffled = filteredCars.sort(() => 0.5 - Math.random())
        setSimilarCars(shuffled.slice(0, 8))
      })
      .catch(err => {
        console.error('Failed to load similar cars:', err)
        setError('Could not load similar vehicles.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [body_type, qMin, qMax, min, max])

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading similar vehicles…</p>
  }
  if (error || similarCars.length === 0) {
    return null
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <section className="similar-vehicles-sec sec-p">
      <div className="container-x">
        <h2>Similar Vehicles</h2>
        <div className="semi-vehi-caro">
          {similarCars.length === 1 ? (
            <CarItem key={similarCars[0].slug} car={similarCars[0]} />
          ) : (
            <Slider {...settings}>
              {similarCars.map(car => (
                <CarItem key={car.slug} car={car} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  )
}

export default SimilarCar
