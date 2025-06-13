import React from 'react'
import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <Seo
                title={`Code of Ethics | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`NADA's Code of Ethics is designed to reinforce dealers' including a personal commitment to quality service and high ethical standards.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/code-of-ethics/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/code-of-ethics/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Code of Ethics</h1>

                    <p>
                        Our Code of Ethics reinforces a personal commitment to quality service and high ethical standards.
                    </p>

                    <p>
                        As members of NADA, our dealers subscribe to the following principles and standards. Implicit in this Code is the requirement to comply fully with all federal, state, and local laws governing our business.
                    </p>

                    <h3>We pledge to:</h3>
                    <ul>
                        <li>Operate our business in accordance with the highest standards of ethical conduct.</li>
                        <li>Treat each customer in a fair, open, and honest manner, fully complying with anti-discrimination laws.</li>
                        <li>Meet customer needs in a knowledgeable and professional way.</li>
                        <li>Represent our products clearly and factually, standing behind all warranties.</li>
                        <li>Advertise in a positive, factual, and informative manner.</li>
                        <li>Provide detailed estimates and clear explanations of any service work, upon request or as required by law.</li>
                        <li>Resolve customer concerns promptly and courteously.</li>
                        <li>Put our promises in writing and stand behind them.</li>
                    </ul>

                    <h3>Ethics Guide</h3>
                    <p>
                        NADA’s Ethics Guide focuses on four key areas of dealership operations: sales, service, financial services, and advertising.
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