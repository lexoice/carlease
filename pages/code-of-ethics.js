import React from 'react'
import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <Seo
                title="Code of Ethics"
                description="Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from eAutoLease. No hidden fees."
                canonical="https://www.eautolease.com/services/trade-ins/"
                ogUrl="https://www.eautolease.com/services/trade-ins/"
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Code of Ethics</h1>

                    <p>
                        NADA's Code of Ethics is designed to reinforce dealers' including a personal commitment to quality service and high ethical standards.
                    </p>

                    <p>
                        As a member of NADA, member dealers including eAutoLease, subscribe to the following principles and standards. Implicit in this Code is the requirement that NADA members comply fully with all federal, state, and local laws governing their businesses.
                    </p>

                    <p>&nbsp;</p>

                    <h3>We pledge to:</h3>
                    
                    <ul>
                        <li>Operate eAutoLease, a <a href="https://www.eautolease.com/">car leasing company</a> in accord with the highest standards of ethical conduct.</li>
                        <li>Treat each customer in a fair, open, and honest manner, and fully comply with all laws that prohibit discrimination.</li>
                        <li>Meet the transportation needs of our customers in a knowledgeable and professional manner.</li>
                        <li>Represent our products clearly and factually, standing fully behind our warranties, direct and implied, and in all other ways justifying the customer's respect and confidence.</li>
                        <li>Advertise our products in a positive, factual, and informative manner.</li>
                        <li>Detail charges to assist our customers in understanding repair work and provide written estimates of any service work to be performed, upon request, or as required by law.</li>
                        <li>Resolve customer concerns promptly and courteously.</li>
                        <li>Put our promises in writing and stand behind them. We stand behind every <a href="https://www.eautolease.com/car-lease-deals/">car leasing deal</a> published on the eAutoLease website.</li>
                    </ul>

                    <p>&nbsp;</p>

                    <h3>Ethics Guide</h3>
                    
                    <p>
                        In addition, NADA has published an Ethics Guide that focuses on four key areas of dealership operations: sales, service, financial services, and advertising. <a title="Ethics Guide" href="/ethics-guide/">View the Ethics Guide here</a>.
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