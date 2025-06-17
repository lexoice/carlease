import React from 'react'
import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <Seo
                title={`Code of Ethics | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`NADA's Code of Ethics is designed to reinforce dealers' including a personal commitment to quality service and high ethical standards.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/code-of-ethics`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/code-of-ethics`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Code of Ethics</h1>

                    <p>
                        This Code of Ethics highlights our personal dedication to delivering exceptional service while upholding the highest moral and professional standards.
                    </p>

                    <p>
                        As proud members of NADA, our dealership representatives adhere to the core values and principles outlined below. This commitment also includes full compliance with all applicable federal, state, and local regulations governing our operations.
                    </p>

                    <h3>We commit to:</h3>
                    <ul>
                        <li>Conducting our business with integrity and maintaining the utmost ethical practices.</li>
                        <li>Ensuring all customers are treated honestly, respectfully, and without bias, in line with anti-discrimination laws.</li>
                        <li>Providing informed, professional service tailored to each customer's needs.</li>
                        <li>Communicating product information accurately and standing behind all guarantees and warranties.</li>
                        <li>Using advertising that is truthful, constructive, and transparent.</li>
                        <li>Offering clear service estimates and full explanations of any work performed, as requested or required by law.</li>
                        <li>Handling customer issues with professionalism, speed, and courtesy.</li>
                        <li>Documenting our commitments and honoring them in full.</li>
                    </ul>

                    <h3>Ethics Guide</h3>
                    <p>
                        The NADA Ethics Guide outlines best practices in four critical areas of dealership operations: sales, customer service, finance, and marketing.
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