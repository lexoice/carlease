import React from 'react'
import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <Seo
                title={`Privacy Policy | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Privacy Policy</h1>
                    <p>
                        This Privacy Policy explains how we collect, use, and protect your Personally Identifiable
                        Information (PII) when you use our website. Please read it carefully.
                    </p>

                    <h3>Special Note:</h3>
                    <p>
                        Monthly pricing may vary based on your registered address. All displayed prices are
                        starting rates; each item is shown in its base configuration.
                    </p>

                    <h3>Price Matching Policy:</h3>
                    <ul>
                        <li>We compare prices across competitors to ensure you get the best deal.</li>
                        <li>Our goal is to offer fair pricing without compromising quality or service.</li>
                        <li>We aim to simplify the shopping experience and match prices when criteria are met.</li>
                    </ul>
                    <p>
                        If you find an identical base model at a lower price, we will match it subject to our
                        verification and eligibility requirements.
                    </p>

                    <h3>Limitations:</h3>
                    <p>
                        The item must be identical in make, model, condition, and color and sold by an authorized
                        dealer. The competitor’s price must be valid at the time of request.
                    </p>

                    <h3>Exclusions:</h3>
                    <ul>
                        <li>Offers from third-party brokers</li>
                        <li>Pricing errors, doorbusters, or flash sales</li>
                        <li>Discount codes, coupons, or promotions</li>
                    </ul>

                    <h3>Collection and Use of Information</h3>
                    <p>
                        We collect information such as your name, email, and phone number when you register,
                        place an order, subscribe to our newsletter, or fill out forms. This data helps us
                        process requests, send updates, and improve our service.
                    </p>

                    <h3>Data Protection</h3>
                    <p>
                        Your personal data is stored on secure servers and accessed only by authorized personnel.
                        Sensitive information is encrypted via SSL. We regularly scan for vulnerabilities.
                    </p>

                    <h3>Cookies</h3>
                    <p>
                        We use cookies to remember your preferences, optimize site performance, and collect
                        anonymous usage analytics. You can disable cookies in your browser settings, though
                        some site features may not function correctly.
                    </p>

                    <h3>Third-Party Services</h3>
                    <p>
                        We do not sell or share your personal data with third parties except service providers
                        who support our site operations under confidentiality agreements.
                    </p>

                    <h3>Children’s Privacy</h3>
                    <p>
                        We do not knowingly collect personal data from children under the age of 13. If we become
                        aware of such data, we will delete it immediately.
                    </p>

                    <h3>Changes to This Policy</h3>
                    <p>
                        We may update this Privacy Policy at any time. The latest version will always be posted
                        here. Continued use of the site constitutes acceptance of any changes.
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