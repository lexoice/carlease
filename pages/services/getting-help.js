// pages/services/trade-ins.js

import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import SingleCarForm from '../../components/SingleCarForm'
import MakeList from '../../components/Home/MakeList'
import DealerSection from '../../components/Home/DealerSection'

export default function TradeInsPage() {
    return (
        <>
            <Seo
                title={`Sell Your Car in Philadelphia | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Sell your car quickly in Philadelphia for instant cash. Same-day pick-up and a fair, no-obligation offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/getting-help/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/getting-help/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Sell Your Car in Philadelphia</h1>
                    <p>
                        Selling your car in Philadelphia can be faster and easier than you think. Our experienced team has helped countless local drivers sell all types of vehicles—from compact cars to luxury models. In many cases, we’re able to offer more than private buyers or other dealerships in the area. Even if you’re still considering your options, getting a professional appraisal from us will give you a clear understanding of your vehicle’s value, so you can make the most informed decision.
                    </p>

                    <h2>Free Appraisals</h2>
                    <p>
                        If you <a href="https://www.ecarscash.com/sell-my-car-for-cash/">sell your car for cash</a>, we’ll start by evaluating its current condition and market value. Based on this assessment, we’ll make a fair and competitive offer. There’s absolutely no cost or obligation—just helpful information to guide your decision. And for your convenience, one of our appraisers can even come to your home or workplace in Philadelphia to complete the inspection.
                    </p>

                    <h2>We're Here to Help You Sell</h2>
                    <p>
                        Whether you're looking to sell your current vehicle to upgrade or simply want to get the best price without the hassle, our Philadelphia team is here to help. We buy, sell, and lease cars every day, and our focus is always on top-tier customer service. If you’d like to speak with one of our representatives about selling your car in Philadelphia, call us today at <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_CODE}`}>{process.env.NEXT_PUBLIC_PHONE}</a>.
                    </p>

                    <SingleCarForm />

                </main>

            </section>
            <DealerSection />
            <MakeList />
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}