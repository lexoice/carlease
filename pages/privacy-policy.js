import React from 'react'
import { NextSeo } from 'next-seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <NextSeo
                title={`Privacy Policy | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Privacy Policy</h1>
                    <p>
                        This Privacy Policy outlines how we gather, utilize, and safeguard your Personally Identifiable Information (PII) when interacting with our website. Please take a moment to review it carefully.
                    </p>

                    <h3>Special Note:</h3>
                    <p>
                        Monthly rates may differ depending on your location. All prices shown reflect entry-level configurations and serve as starting points.
                    </p>

                    <h3>Price Matching Policy:</h3>
                    <ul>
                        <li>We regularly monitor competitor pricing to ensure you receive optimal value.</li>
                        <li>Our aim is to maintain competitive pricing without sacrificing service or quality.</li>
                        <li>We streamline the purchase process and will match prices when qualifying conditions are met.</li>
                    </ul>
                    <p>
                        If you locate the same base model for a lower price, we will honor that price after validating eligibility.
                    </p>

                    <h3>Limitations:</h3>
                    <p>
                        To qualify, the product must be exactly the same in make, model, specifications, and color, and sold by a licensed dealer. The competing offer must be active at the time of your request.
                    </p>

                    <h3>Exclusions:</h3>
                    <ul>
                        <li>Listings from independent brokers</li>
                        <li>Errors in pricing, limited-time deals, or promotional flash sales</li>
                        <li>Coupons, promotional codes, or other discounts</li>
                    </ul>

                    <h3>Collection and Use of Information</h3>
                    <p>
                        We collect personal details like your name, email address, and phone number when you register, submit forms, subscribe, or place orders. This data helps us fulfill requests, send important updates, and enhance user experience.
                    </p>

                    <h3>Data Protection</h3>
                    <p>
                        Your data is stored on protected servers and is accessible only to authorized team members. Sensitive details are secured through SSL encryption. Routine security checks help protect against potential vulnerabilities.
                    </p>

                    <h3>Cookies</h3>
                    <p>
                        Cookies are used to save user preferences, improve website speed, and gather anonymized usage statistics. You may disable cookies in your browser; however, certain functions of the site may not work as intended.
                    </p>

                    <h3>Third-Party Services</h3>
                    <p>
                        We do not sell or disclose your personal data to outside parties, except for trusted partners assisting in site management under strict confidentiality agreements.
                    </p>

                    <h3>Children's Privacy</h3>
                    <p>
                        We do not knowingly collect personal information from children under 13. If such data is identified, we will promptly remove it from our systems.
                    </p>

                    <h3>Changes to This Policy</h3>
                    <p>
                        We reserve the right to update this Privacy Policy at any time. The most current version will always appear on this page. Your continued use of the website implies acceptance of those updates.
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