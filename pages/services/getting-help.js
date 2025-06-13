// pages/services/trade-ins.js

import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'

export default function TradeInsPage() {
    return (
        <>
            <Seo
                title={`Sell Your Car in Brooklyn | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Sell Your Car in Brooklyn</h1>
                    <p>
                        You can sell your car in Brooklyn far faster and easier than you may have expected. Our team has helped many people
                        sell all makes and models of vehicles for years, and we have found that we can often pay much more than anyone else
                        in the area. This quite often includes private buyers. Even if you aren’t sure that you want to sell your car yet,
                        it is a good idea to come to us to get an appraisal so you can learn how much it is worth. This way you will be
                        armed with all the information possible about your situation and can make the best decision you can.
                    </p>

                    <h2>Free Appraisals</h2>
                    <p>
                        If you <a href="https://www.ecarscash.com/sell-my-car-for-cash/">sell your car for cash</a>, we will first appraise
                        the vehicle to determine how much it is worth. Based on that, we can make a fair and accurate offer to purchase it
                        from you. Our appraisals are completely free of charge and never come with any type of obligation to go through with
                        the sale. This will simply give you more information to help you make your decision on what you want to do next. If
                        you would like, our appraiser can come out to your home or business to do the inspection so you don’t have to be
                        inconvenienced at all.
                    </p>

                    <h2>We will Help Sell Your Car</h2>
                    <p>
                        Since we are constantly buying, selling, and leasing cars in Brooklyn, we are ready to help provide you with
                        everything needed when you are ready. Our team will be more than happy to help you sell your car whether you are
                        looking to lease something new or not. We are dedicated to the best customer service no matter what it is you need.
                        If you would like to talk with one of our customer service representatives about selling your car in Brooklyn,
                        please give us a call at  <a href="tel:+15706982277">570-698-2277</a>
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