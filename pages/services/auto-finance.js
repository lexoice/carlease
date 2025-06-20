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
                title={`Auto Financing Options in Philadelphia | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Explore flexible car lease financing in Philadelphia with ${process.env.NEXT_PUBLIC_SITE_NAME}. Fast approvals, low interest rates, and personalized terms to match your budget—no hidden fees.`}

                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/auto-finance/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/auto-finance/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Auto Financing Options in Philadelphia</h1>
                    <p>
                        If you’re planning to lease a car in Philadelphia, it’s important to secure an auto financing plan with favorable terms. While many drivers turn to their local bank or credit union, these institutions rarely offer the most competitive rates on lease financing. That’s where we come in. Our team specializes in finding the best possible financing options, saving you time, money, and unnecessary stress when leasing a car in Philadelphia.
                    </p>

                    <h2>How We Secure the Best Financing Rates</h2>
                    <p>
                        We work with a wide network of trusted lenders who specialize in lease financing. By submitting your application to multiple providers, we create competition for your business—driving rates down and increasing your chances of approval. Whether you have excellent credit or are working to improve it, our financing experts will help tailor a solution that fits your needs and budget.
                    </p>

                    <h2>Speak with Our Philadelphia Financing Team</h2>
                    <p>
                        Ready to lease your next car? Reach out to our Philadelphia financing department to explore your options. We’re committed to helping you lock in the lowest interest rates available so you can enjoy affordable monthly payments. No matter what kind of vehicle you’re interested in, we’re here to make financing simple and stress-free. Give us a call today at <PhoneLink /> to speak with one of our knowledgeable team members. Thank you for choosing us for your auto financing needs in Philadelphia.
                    </p>

                    <SingleCarForm title="Auto Finance Form" />

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