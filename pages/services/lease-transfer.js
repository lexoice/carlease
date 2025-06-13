// pages/services/trade-ins.js

import React from 'react'
import Seo from '../../components/UI/Seo'
import Breadcrumbs from '../../components/UI/Breadcrumbs'

export default function TradeInsPage() {
    return (
        <>
            <Seo
                title={`Lease Transfers in Brooklyn | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services/trade-ins/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Lease Transfers in Brooklyn</h1>
                    <p>
                        Did you know that auto lease transfers are an option for all lease holders in Brooklyn? That’s right, if you got a
                        lease that is no longer meeting your needs, you can transfer the remaining months or even years of your lease
                        contract to a third party, and they will take over all the responsibilities. This type of thing is allowed for any
                        lease so you never have to feel stuck in a vehicle that isn’t meeting your needs. There are many reasons why people
                        choose to transfer a lease including changing family situations, financial reasons, and just because they want to
                        drive the latest model available. Whatever it is in your case, we are here to help.
                    </p>

                    <h2>Better than Terminating a Lease</h2>
                    <p>

                        Lease transfers are a better option than simply terminating your existing lease. This is because with the transfer,
                        you aren’t ending your contract early. Instead, you’re just transferring it to someone else who will fulfil all the
                        obligations. This will help you to avoid the fines and penalties associated with a lease termination, while still
                        getting you the same end result. Once the lease transfer is completed, you will be able to shop for a new vehicle
                        that will better meet your specific needs.
                    </p>

                    <h2>Here to Help with Lease Transfers</h2>
                    <p>
                        The team here at 718 Car Lease is ready to help match you up with someone who would love to take over the remainder
                        of your lease. We help people with all sorts of leasing needs every day, and would be happy to help you too. Get in
                        touch with us to discuss your specific situation, and we can provide you with advice and guidance on how to get
                        everything done just how you want it. To reach out to us, please dial 718-393-5620 to speak with one of our
                        knowledgeable customer service professionals about the lease transfer options in Brooklyn.
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