import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const MenuBudgetRange = ({ min = 0, max = 1500, step = 1 }) => {
  const router = useRouter()
  const { min: qMin, max: qMax } = router.query

  const initialMin = !isNaN(Number(qMin)) ? Number(qMin) : min
  const initialMax = !isNaN(Number(qMax)) ? Number(qMax) : max

  const [rangeMin, setRangeMin] = useState(initialMin)
  const [rangeMax, setRangeMax] = useState(initialMax)

  useEffect(() => {
    if (qMin !== undefined || qMax !== undefined) {
      setRangeMin(!isNaN(Number(qMin)) ? Number(qMin) : min)
      setRangeMax(!isNaN(Number(qMax)) ? Number(qMax) : max)
    }
  }, [qMin, qMax, min, max])

  const handleMinChange = e => {
    const val = Math.min(Number(e.target.value), rangeMax - step)
    setRangeMin(val)
  }

  const handleMaxChange = e => {
    const val = Math.max(Number(e.target.value), rangeMin + step)
    setRangeMax(val)
  }

  const handleSubmit = e => {
    e.preventDefault()
    router.push({
      pathname: '/car-lease-deals/',
      query: {
        min: rangeMin.toString(),
        max: rangeMax.toString(),
      },
    })
  }

  return (
    <div className="budget-range-react">
      <form onSubmit={handleSubmit}>
        <p className="min-max-amount">
          <span className="min-am">${rangeMin}</span>
          <span className="max-am">${rangeMax}</span>
        </p>

        <div className="slider-wrapper">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={rangeMin}
            onChange={handleMinChange}
            className="thumb thumb--left"
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={rangeMax}
            onChange={handleMaxChange}
            className="thumb thumb--right"
          />

          <div className="slider-track" />
          <div
            className="slider-range"
            style={{
              left: `${((rangeMin - min) / (max - min)) * 100}%`,
              width: `${((rangeMax - rangeMin) / (max - min)) * 100}%`,
            }}
          />
        </div>

        <button type="submit" className="search-lease">
          Search Lease Deals
        </button>
      </form>

      <style jsx>{`
        .slider-wrapper {
          position: relative;
          width: 100%;
          height: 40px;
        }

        .thumb {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          pointer-events: auto;
          position: absolute;
          width: 100%;
          height: 0;
          outline: none;
          z-index: 3;
        }

        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #007bff;
          cursor: pointer;
          margin-top: -10px;
          pointer-events: auto;
        }

        .thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #007bff;
          cursor: pointer;
          pointer-events: auto;
        }

        .thumb--left {
          z-index: 3;
        }

        .thumb--right {
          z-index: 4;
        }

        .slider-track {
          position: absolute;
          width: 100%;
          height: 4px;
          background: #ddd;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .slider-range {
          position: absolute;
          height: 4px;
          background: #007bff;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }

        /* Firefox specific styles */
        @-moz-document url-prefix() {
          .thumb {
            background: transparent;
            pointer-events: auto;
          }
          
          .thumb::-moz-range-thumb {
            pointer-events: auto;
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  )
}

export default MenuBudgetRange
