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
                title={`Lease Transfers in Philadelphia | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Easily transfer your car lease in Philadelphia with help from ${process.env.NEXT_PUBLIC_SITE_NAME}. Avoid early termination fees and get expert guidance every step of the way.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/lease-transfer/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/lease-transfer/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Lease Transfers in Philadelphia</h1>
                    <p>
                        Did you know you can transfer your car lease to someone else in Philadelphia? If your current lease no longer fits your lifestyle or needs, you don’t have to stay stuck. Lease transfers allow you to pass the remaining term of your lease agreement to another person, who then takes on all responsibilities of the contract. Whether your reason is a change in circumstances, financial goals, or simply wanting a newer model, lease transfers are a smart and flexible solution—and we’re here to assist you every step of the way.
                    </p>

                    <h2>A Smarter Alternative to Lease Termination</h2>
                    <p>
                        Choosing a lease transfer instead of terminating your contract early helps you avoid costly fees and penalties. Rather than canceling your lease, you simply transfer it to another qualified individual. This process allows you to move on to a new vehicle without financial drawbacks, making it an ideal option for those seeking flexibility in their leasing journey here in Philadelphia.
                    </p>

                    <h2>Your Lease Transfer Specialists in Philadelphia</h2>
                    <p>
                        Our Philadelphia-based team is ready to help you find someone to take over your lease. We assist drivers daily with lease-related needs and can guide you through every step of the transfer process. Whether you're ready to begin or just exploring your options, we’ll provide straightforward advice and full support. To get started, call us at <a href="tel:+17183935620">718-393-5620</a> and speak with one of our lease specialists in Philadelphia.
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