// pages/services/trade-ins.js

import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'

export default function TradeInsPage() {
    return (
        <>
            <Seo
                title={`Cash for Trade-Ins or Used Cars | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>A Direct Trade-In Appraisal Process</h1>
                    <p>
                        One of the best ways to save money on the purchase or lease of your
                        car or truck is to leverage the value of your existing vehicle. That
                        car or truck you have sitting in your driveway can make the difference
                        between a down payment or no down payment. It’s important, however, to
                        get an honest and realistic idea of what your vehicle is worth. Cars
                        for Leasing Online offers a fair, honest and simple trade-in process to
                        give customers maximum value on your car or truck. Call us today at{' '}
                        <a href="tel:+16466044899">(646) 604-4899</a> to learn more about your
                        trade-in options.
                    </p>

                    <h2>Trading In Your Car or Truck</h2>
                    <p>
                        The process of trading in your car or truck begins with contacting our
                        honest, friendly and qualified appraisers. We assess your vehicle based
                        on multiple factors—including age, condition, mileage, Kelley Blue Book
                        value and more. Once we determine its value using our proven criteria,
                        we’ll make you an offer on the spot. After you accept, we get you
                        behind the wheel of your new car or truck. Don’t waste time selling
                        privately—let us make you the best offer.
                    </p>

                    <h2>Tips for a Successful Trade-In</h2>
                    <p>
                        To maximize your return, have your vehicle cleaned and maintained
                        before appraisal. Gather all service records so we can accurately
                        assess its condition and longevity. If you’re buying a new car or
                        truck, your current vehicle can cover or reduce the down payment.
                        Let the pros at Cars for Leasing Online make you the best offer on
                        your current car or truck. Call us today at{' '}
                        <a href="tel:+16466044899">(646) 604-4899</a>.
                    </p>
                </main>
            </section>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}