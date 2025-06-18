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
                title={`Lease Return with Philadelphia Car Leasing | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Return your lease vehicle in Philadelphia with confidence. Transparent inspections, no surprise fees, and expert guidance from ${process.env.NEXT_PUBLIC_SITE_NAME}.`}

                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/lease-return`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/lease-return`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Lease Return with Philadelphia Car Leasing</h1>
                    <p>
                        Returning your lease vehicle is a standard part of the leasing process and typically takes place at the end of your contract. In theory, it's as simple as handing back the keys—but in reality, complications can arise. Just like in any city, some drivers in Philadelphia treat their leased vehicles as if they own them, which can lead to unexpected issues during the return.
                    </p>

                    <p>
                        The main reason for these issues is often simple forgetfulness. Drivers sometimes overlook the fact that a leased car isn’t their property—it still belongs to the leasing company. It's important to treat the vehicle with care and respect throughout the lease period. Taking unnecessary risks or neglecting maintenance can result in added charges at the end of the lease term.
                    </p>

                    <h2>Our Lease Return Process</h2>

                    <p>
                        Our lease return process at Philadelphia Car Leasing is straightforward and similar to what you’ll find at most leasing agencies. When your lease ends, you return the vehicle and our team inspects it to assess mileage, condition, and overall wear. We check the body, interior, paint, tires, brakes, and engine to determine whether the vehicle meets return standards.
                    </p>

                    <p>
                        If the car is in good shape and within the agreed mileage limits, you won’t owe anything additional. However, if there’s damage beyond normal wear—or excessive mileage—we may apply a repair fee. Even then, we strive to be transparent and reasonable. Unlike companies that look for the smallest imperfections to charge more, we only bill for actual repair costs, and always keep charges fair and minimal.
                    </p>

                    <h2>How to Avoid Lease Return Charges</h2>

                    <p>
                        At Philadelphia Car Leasing, we help our clients avoid lease return fees by offering proactive support from day one. Our agents will walk you through proper vehicle care and even provide a checklist of tips to maintain your lease. We want to make sure you’re confident about how to return the vehicle in top condition—without surprise costs.
                    </p>

                    <p>
                        Every vehicle has its own care requirements, just like every driver has unique habits. That’s why we take the time to explain everything clearly and thoroughly. Many leasing companies skip this step, but we believe in doing things differently. To learn more about our lease return process—or to get personalized advice—give us a call at <PhoneLink />. We're here to help you return your lease vehicle smoothly and stress-free.
                    </p>

                    <SingleCarForm title="Lease Return Form" />

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