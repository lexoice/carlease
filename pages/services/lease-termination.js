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
                title={`Lease Termination in Philadelphia | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Lease Termination in Philadelphia</h1>
                    <p>
                        When you lease a car from an auto leasing agency, you get to use it for a number of years. Of course, this does not
                        make you the sole owner of the car. You are basically renting it out for a matter of a few years. When the agreed
                        upon period in the lease contract ends, you must then return the auto lease to the original owner. This process is
                        called lease termination.
                    </p>


                    <p>
                        Usually this should simply be the act of handing over the keys, provided that the vehicle has been used right.
                        However, there are situations where this may turn into a lengthier process. When a car leasing company gives you a
                        car on lease, they also specify certain limitations in the auto leasing contract. These include the maximum number
                        of miles travelable in a year, the maximum damage percentage to the interior and exterior, and the condition of the
                        engine. All of these are checked when the car is returned at the end of the lease period.
                    </p>

                    <h2>Consequences of Going over the Limits</h2>
                    <p>
                        When the inspection of the vehicle is done during lease termination, there is a chance that you may have gone over
                        the limits specified in the contract. If this is the case, you would end up having to pay a large bill, with most
                        car leasing companies. For instance, if the maximum number of miles has been surpassed, you will be billed for the
                        extra amount. In this way, the expenses can add up and you could be laden with a large bill at the end.
                    </p>
                    <h2>Reducing the Risk at Philadelphia Car Leasing</h2>
                    <p>
                        One of the main causes of this oversight occurring is that the auto leasing company doesn’t clearly specify the
                        terms to the customers. This results in ignorance on the customer’s part. It is the responsibility of the company to
                        help the customers understand the terms of their lease clearly. Here at Philadelphia Car Leasing, that is exactly
                        what we do. For us, money comes second to customer satisfaction. We do everything we can to ensure that you have a
                        good time during and after your lease period. Our car leasing company clearly tells the customer exactly what they
                        must and must not do. This is because we are dedicated to helping you avoid having to pay any extra at the end of
                        your lease.
                    </p>
                    <p>    Our professional agents will converse with you on the finer points and details of the car you are buying. We will
                        even tell you how to maintain your lease car so that it is in the best condition when you return it. All cars have
                        different requirements when it comes to maintenance. It is important that you adhere to proper procedures in order
                        to make sure that the vehicle is in good shape. In fact, <a href="tel:+15706982277">call 570-698-CARS (2277)</a> today and talk to our staff! They
                        will tell you everything you need to know about our lease termination policy. We can guarantee that you won’t have
                        to pay a large bill at the end, if you stick to what we tell you to do.</p>
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