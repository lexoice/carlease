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
                title={`Lease Return with Philadelphia Car Leasing | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Lease Return with Philadelphia Car Leasing</h1>
                    <p>Lease return is the process of returning the car back to your auto leasing company. This is usually done at the end of
                        your lease contract. It is the simple process of handing over the keys. Or so it should be. However, there are a lot of
                        problems that can arise during this process. In Philadelphia, as in every city, there are people who abuse the vehicles
                        they get on lease.</p>

                    <p>This happens because of a very basic reason: memory. People tend to forget that they are not the owners of the lease car
                        they get. This fact cannot be stressed enough by an auto leasing company when giving someone a vehicle on lease. You do
                        not own the vehicle. Treat it with some respect. A lot of people forget this fact and slip up. It is generally
                        inadvisable to do something silly like go off-roading in a Ferrari.</p>

                    <h2>Lease Return procedure with us and everyone else</h2>

                    <p>The standard procedure for a lease return is the same with any auto leasing agency including our own. At the end of your
                        lease period, you hand over the keys to your lease car. We will then perform an investigation into the condition of the
                        vehicle. This includes checking the mileage difference to find out how far you have driven. It also involves inspecting
                        the physical condition of the car. This includes its body, paint job and the condition of the brakes, wheels and engine.
                        If everything is in working condition, and you have not damaged it too much, our car leasing company exempts you from
                        having to pay an extra fee.</p>

                    <p>However, if there are damages to the lease car that you got from us, and if the cost it takes for us to repair the
                        damages is a little too high for us, we will have to bill you for the difference. However, we strive to be extremely
                        fair in our billing procedure. While most car leasing companies try to find out the tiniest flaws and scratches in the
                        vehicle in order to make you cough up more cash, we try to be far more lenient. We charge you only if it costs us to fix
                        the damages. This is also only a small charge as opposed to most companies.</p>

                    <h2>Avoiding the fee</h2>

                    <p>Philadelphia Car Leasing also has a number of methods to help you avoid paying such a large fee for the return of your
                        lease car to us. Before you even get the car, our agents explain the different methods of maintaining the vehicle over
                        and over again in the hopes that you will be able to remember it. If you want, we will even give you a list of the tips
                        and tricks to maintaining your lease cars in writing. Anything in order to help you avoid having to pay a cent when you
                        do the lease return at the end. This is a point that most car leasing companies “forget to do”.</p>

                    <p>Every car is like a human being. Different vehicles require different types of care and maintenance to keep them feeling
                        brand new. However, in many cases the leaseholder is not thoroughly informed of the procedures and methods by which to
                        keep their lease car in tip-top shape. This results in possible financial and legal issues. Not so with us, though. So
                        call our auto leasing company on <a href="tel:+15706982277">570-698-CARS (2277)</a> now and find out more about the car leasing company that truly
                        cares.</p>
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