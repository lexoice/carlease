// components/Layout/Footer.jsx
import React, { useContext } from 'react'
import Link from 'next/link'
import { ModalContext } from '../../contexts/ModalContext'
import Modal from '../UI/Modal'

const Footer = () => {
  const { modalData, closeModal } = useContext(ModalContext)

  return (
    <>
      <section className="footer-section">
        <div className="footer-top">
          <div className="footer-top-left">
            <div>
              <h2>Contact Us</h2>
              <p>Contact us today for a free quote on any auto make or model!</p>
              <h3>Main Office</h3>
              <ul>
                <li>
                  <span className="loca">
                  {process.env.NEXT_PUBLIC_SITE_NAME} 3820 Nostrand Ave, #107 Brooklyn NY 11235
                  </span>
                </li>
                <li>
                  <a className="call" href="tel:+17188712277">
                    +718 871 2277
                  </a>
                </li>
              </ul>
              <h3>Other Leasing Locations:</h3>
              <p>Stamford, CT; Philadelphia, PA; Newark, NJ</p>
            </div>
          </div>

          <div className="footer-top-right">
            <p>
              **{process.env.NEXT_PUBLIC_SITE_NAME} is not a franchised dealer. {process.env.NEXT_PUBLIC_SITE_NAME} is a transporter,
              and auto brokerage firm licensed and bonded in the state of New York.
              Facility ID No. 7120366. {process.env.NEXT_PUBLIC_SITE_NAME} is a proud member of the New York Auto
              Brokers Association (NYABA) and a certified car leasing company by the
              National Independent Automobile Dealers Association (NIADA). Our operations
              fully comply with the Federal Trade Commission (FTC) Used Car Rule and
              the Motor Vehicle Retail Leasing Act (MVRLA). {process.env.NEXT_PUBLIC_SITE_NAME} is licensed by the
              New York State Department of Motor Vehicles (DMV) and has a Motor Vehicle
              Retail Installment Sales License and a Secondhand Dealer Auto License
              (No. 2095372-DCA). All of our leasing agents are certified. {process.env.NEXT_PUBLIC_SITE_NAME}.com
              does not offer vehicle warranty repair; the manufacturer covers the factory
              warranty.
            </p>
            <p className="dealer-rate">
              {process.env.NEXT_PUBLIC_SITE_NAME} has a{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                DealerRater
              </a>{' '}
              rating of 5.0/5 based on 3000+ ratings and reviews.
            </p>
            <p>
              *Occasionally there may be delays in updating monthly pricing, as deals can
              begin or end several days before or after the expected date. Programs may
              also be delayed by manufacturers or banks, and holiday programs may be extended.
            </p>
          </div>
        </div>

        <div className="foote-btm">
          <div className="container">
            <div className="overflow-auto">
              <img
                src="/images/fDealerLogo.png"
                alt="dealer logos"
                width="1370px"
                height="192px"
              />
            </div>
            <div className="copy-right">
              <p>
                © 2025 {process.env.NEXT_PUBLIC_SITE_NAME}. All Rights Reserved. {process.env.NEXT_PUBLIC_SITE_NAME} is a registered trademark
                (Reg. No. 6,533,092).
              </p>
              <ul>
                <li><Link href="/accessibility">Accessibility</Link></li>
                <li><Link href="/terms-of-service">Term of Service</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/code-of-ethics">Code of Ethics</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>







      {modalData && (
        <Modal isOpen onClose={closeModal} data={modalData} />
      )}

      
    </>
  )
}

export default Footer
