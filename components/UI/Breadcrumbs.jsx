import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Breadcrumbs = () => {
  const router = useRouter()
  const asPath = router.asPath.split('?')[0]
  const pathnames = asPath.split('/').filter(x => x)

  return (
    <section className="inner-breadcrumb-sec">
      <div className="breadcrumb-area">
        <p id="breadcrumbs">
          <span>
            <Link href="/" className="home-link">
              Home
            </Link>
            {pathnames.length > 0 && <span> » </span>}
            {pathnames.map((path, index) => {
              const routeTo = '/' + pathnames.slice(0, index + 1).join('/')
              const name = path
                .split('-')
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ')
              const isLast = index === pathnames.length - 1

              return isLast ? (
                <span
                  key={routeTo}
                  className="breadcrumb_last"
                  aria-current="page"
                >
                  {name}
                </span>
              ) : (
                <span key={routeTo}>
                  <Link href={routeTo} className="breadcrumb-link">
                    {name}
                  </Link>
                  <span> » </span>
                </span>
              )
            })}
          </span>
        </p>
      </div>
    </section>
  )
}

export default Breadcrumbs
