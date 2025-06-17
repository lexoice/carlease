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
                description={`End your car lease in Philadelphia without hidden fees or surprises. Learn how to avoid penalties and return your lease smoothly with help from ${process.env.NEXT_PUBLIC_SITE_NAME}.`}

                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/lease-termination/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/lease-termination/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Lease Termination in Philadelphia</h1>
                    <p>
                        Leasing a car allows you to enjoy a vehicle for a set number of years without owning it outright. You're essentially renting the car under specific terms outlined in a lease agreement. When that lease period ends, the vehicle must be returned to the leasing provider—a process known as lease termination.
                    </p>

                    <p>
                        Ideally, this is as simple as returning the keys, assuming the vehicle has been properly maintained. However, the lease agreement often includes conditions like mileage limits, acceptable wear and tear, and required mechanical condition. These factors are reviewed during the lease return process to ensure the vehicle meets agreed-upon standards.
                    </p>

                    <h2>What Happens If You Exceed the Limits?</h2>
                    <p>
                        During the final inspection, if your vehicle exceeds any contractual limits, such as mileage or wear, you may face additional charges. For example, going over the allowed mileage typically results in per-mile penalties. These extra fees can add up quickly, resulting in an unexpected bill at the end of your lease term.
                    </p>

                    <h2>Minimizing Costs with Philadelphia Car Leasing</h2>
                    <p>
                        At Philadelphia Car Leasing, we take the time to clearly explain every aspect of your lease so there are no surprises down the road. Many drivers face penalties simply because important terms were never fully explained. We make transparency a priority—our goal is to help you avoid unnecessary fees and ensure a smooth, stress-free lease return experience.
                    </p>
                    <p>
                        Our experienced leasing agents will guide you through maintenance tips and best practices for keeping your vehicle in great condition throughout your lease. Each car has specific needs, and our team will help you stay on track so your vehicle meets return standards. To learn more about our lease termination process, <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_CODE}`}>{process.env.NEXT_PUBLIC_PHONE}</a> today. We’re happy to walk you through everything to make sure your lease ends without surprise costs.
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