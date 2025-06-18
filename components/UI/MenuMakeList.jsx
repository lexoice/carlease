import React from 'react'
import Link from 'next/link'


const MenuMakeList = ({ makes = [] }) => {
  if (!makes.length) {
    return <p>No manufacturers found.</p>
  }

  return (
    <div className="manufacture-list">
      <ul>
        {makes.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/car-lease-deals/${slug}-lease-specials/`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuMakeList
