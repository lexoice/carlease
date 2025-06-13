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
                title={`Trade-In Appraisals in Philadelphia | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Trade-In Appraisals in Philadelphia</h1>
                    <p>
                        Get a trade-in appraisal when you are looking to lease a car in Philadelphia. We can look over your current vehicle and
                        let you know how much it will be worth as a trade-in. This will help you to know how much money can be used as a
                        down payment, which will be very helpful in deciding what vehicle you would like to lease. Our appraisal process is
                        quick and easy so you don’t have to worry about a thing. Give us a call at <a href="tel:+15706982277">570-698-2277</a> to speak to one of our
                        customer service professionals and we will be more than happy to schedule an appraisal for you.
                    </p>

                    <h2>No-Obligation Appraisals</h2>
                    <p>
                        When you have us perform a trade-in appraisal on your vehicle you don’t have to worry about any type of fees or
                        obligations. We perform the appraisal free of charge and never require you to buy or lease from us in exchange. This
                        is a complimentary service to help our customers learn more about their situation so they can make the best possible
                        decision. We will be more than happy to offer you any other insights or advice when it comes to leasing a car in
                        Philadelphia, or trading in your existing vehicle for something new.
                    </p>

                    <h2>Get the Help You Need</h2>
                    <p>
                        If you would like to have your vehicle appraised, you can give us a call to talk with one of our customer service
                        professionals. We will be able to book a time for one of our appraisers to come out to your home or business to look
                        at the vehicle and let you know what it is worth. Our team is known for paying top dollar on all trade-ins so you
                        may be very pleasantly surprised to learn just how much you can get. TO get this process started please dial
                        <a href="tel:+15706982277">570-698-2277</a> today.

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