// components/CarSection/Sidebar.jsx

import React, { useState } from 'react'
import MenuMakeList from '../UI/MenuMakeList'
import MenuBodyList from '../UI/MenuBodyList'
import MenuModelList from '../UI/MenuModelList'
import MenuBudgetRange from '../UI/MenuBudgetRange'

const SECTIONS = [
  { key: 'all',   label: 'All Vehicles',        Component: MenuMakeList },
  { key: 'body',  label: 'Search By Body Type', Component: MenuBodyList },
  { key: 'model', label: 'Search By Model',     Component: MenuModelList },
]

/**
 * Теперь Sidebar принимает список makes через пропсы (SSR) 
 * и прокидывает их в MenuMakeList.
 */
const Sidebar = ({ makes = [] }) => {
  const [openSection, setOpenSection] = useState(null)

  const toggle = key =>
    setOpenSection(prev => (prev === key ? null : key))

  return (
    <div className="search-filter-left">
      <div className="accordion">
        {SECTIONS.map(({ key, label, Component }) => (
          <div className="single-accordion" key={key}>
            <h4
              className={`ac-title ${openSection === key ? 'active' : ''}`}
              onClick={() => toggle(key)}
            >
              {label}
            </h4>
            <div
              className="accordion-body"
              style={{ display: openSection === key ? 'block' : 'none' }}
            >
              {/* Если секция "all", передаём makes */}
              {Component === MenuMakeList
                ? <MenuMakeList makes={makes} />
                : <Component />
              }
            </div>
          </div>
        ))}
      </div>

      <div className="budget-inner">
        <h3>Search By Budget</h3>
        <MenuBudgetRange />
      </div>
    </div>
  )
}

export default Sidebar
