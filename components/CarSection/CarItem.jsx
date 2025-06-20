// components/CarSection/CarItem.jsx
import React, { useContext } from "react"
import Link from "next/link"
import { ModalContext } from "../../contexts/ModalContext"
import Image from 'next/image'

const CarItem = ({ car }) => {
  const { openModal } = useContext(ModalContext)
  const {
    title,
    image,
    price,
    lease_term,
    miles,
    horse_power,
    drive_type,
    seating,
    badge_text,
    badge_color,
    make,
    slug
  } = car

  // Очищаем make от лишних символов и приводим к нижнему регистру
  const makeSlug = make.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-lease-specials/g, "")

  return (
    <div className="single-car">
      <button
        className="sa-quote-btn"
        onClick={() => openModal(car)}
      >
        GET QUOTE
      </button>

      <Link
        href={`/car-lease-deals/${makeSlug}-lease-specials/${slug}/`}
        className="car-item-link"
      >
        <div className="car-thum">
          {badge_text && (
            <span style={{ backgroundColor: badge_color }}>
              {badge_text}
            </span>
          )}
          <Image
            loading="lazy"
            width={377}
            height={295}
            src={image || "/images/defaultCar.jpg"}
            alt={title}
          />
        </div>

        <div className="car-title">
          <h3>{title}</h3>
        </div>

        <ul className="car-feature">
          <li className="power">{horse_power} HP</li>
          <li className="drivetrain">{drive_type}</li>
          <li className="seatstwo">{seating || "—"} Seats</li>
        </ul>

        <ul className="car-list">
          <li>Lease Term: {lease_term}</li>
          <li>Miles Per Year: {miles}</li>
        </ul>

        <div className="car-price">
          {price ? (
            <>
              <p>from</p>
              <span>
                <span>$</span>
                {price}
              </span>
              <p>Month / $0 down</p>
            </>
          ) : (
            <p className="call-for-price call-for-price-car-item">
              Call For Price
            </p>
          )}
        </div>
      </Link>
    </div>
  )
}

export default CarItem
