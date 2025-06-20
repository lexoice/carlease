// pages/services/trade-ins.js

import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import SingleCarForm from '../../components/SingleCarForm'
import MakeList from '../../components/Home/MakeList'
import DealerSection from '../../components/Home/DealerSection'
import PhoneLink from '../../components/UI/PhoneLink'

export default function TradeInsPage() {
    return (
        <>
            <Seo
                title={`Trade-In Appraisals in Philadelphia | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Get a free, no-obligation trade-in appraisal in Philadelphia. Apply your car's value toward your next lease. Fast, stress-free process with top trade-in offers.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Trade-In Appraisals in Philadelphia</h1>
                    <p>
                        Planning to lease a car in Philadelphia? Start with a professional trade-in appraisal of your current vehicle. We'll evaluate your car and provide an accurate estimate of its value, which can be applied toward your lease as a down payment. This makes it easier to choose the perfect vehicle to lease. Our process is fast, stress-free, and designed with your convenience in mind. Call us at <PhoneLink /> to schedule your appraisal with one of our Philadelphia-based specialists.
                    </p>

                    <h2>No-Obligation Appraisals</h2>
                    <p>
                        Our trade-in appraisals in Philadelphia come with no fees and no commitments. We offer this service completely free to help you make an informed decision—without any pressure to lease or purchase. Whether you're just exploring your options or ready to move forward, our team is here to guide you. We're happy to provide honest advice about trade-ins and leasing right here in Philadelphia.
                    </p>

                    <h2>Local Experts, Real Value</h2>
                    <p>
                        Ready to find out what your vehicle is worth? Just give us a call and one of our Philadelphia team members will arrange a convenient time for your appraisal. We can even send someone to your home or workplace to assess the vehicle. Known for offering some of the best trade-in values in the area, we might surprise you with how much your car is really worth. Call <PhoneLink /> today to get started.
                    </p>

                    <SingleCarForm title="Trade-ins Form" />

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