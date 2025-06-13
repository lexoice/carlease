// pages/services/trade-ins.js

import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'

export default function TradeInsPage() {
    return (
        <>
            <Seo
                title={`Auto Financing Options in Brooklyn | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Auto Financing Options in Brooklyn</h1>
                    <p>
                        When leasing a car in Brooklyn, you need to make sure that the terms of your auto financing contract are reasonable.
                        Many people will go to their local bank or credit union to get a lease financing offer, but hat is usually not a
                        good idea. While they may be good at providing banking services, they almost never give the lowest rates on car
                        loans. Instead, why not have us secure the best financing rates possible on your behalf. This will save you a
                        significant amount of money when you lease a car in Brooklyn.
                    </p>

                    <h2>Getting Great Financing Terms</h2>
                    <p>
                        The way we are able to secure you the best financing terms is by working with many different companies that offer
                        lease loans. We’ll submit your information to all of these companies so that they have to compete for your business.
                        This will help to drive their rates down and get you the right deals for your situation. We can get you approved
                        whether you have excellent credit, or it could use some work. No matter your situation, please get in touch with our
                        auto lease financing department to help you get everything in order for your new vehicle.
                    </p>

                    <h2>Contact Us for Auto Financing</h2>
                    <p>
                        If you are ready to move forward with leasing a car, please get in touch with our team to discuss your options. We
                        can help you to get the financing you need at the best rates around. We can often help to lower your interest rate
                        significantly so you can keep your monthly payments lower than you might expect. No matter what type of vehicle you
                        are looking for, please give us a call to discuss all your financing needs. We can be reached by dialing
                        718-393-5620. Thank you for considering 718 Car Lease for all your auto financing needs in Brooklyn.
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