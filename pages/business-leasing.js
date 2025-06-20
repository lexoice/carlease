import React from 'react'
import { NextSeo } from 'next-seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'
import DealerSection from '../components/Home/DealerSection'
import MakeList from '../components/Home/MakeList'
import SingleCarForm from '../components/SingleCarForm'

export default function AccessibilityPage() {
    return (
        <>
            <NextSeo
                title={`Business Car Leasing | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/business-leasing/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Business Car Leasing</h1>

                    <p>Experience our extensive selection of commercial vehicles with competitive discounts available nationwide. Contact us today to initiate your journey and craft a personalized business leasing solution. Discover exclusive {process.env.NEXT_PUBLIC_SITE_NAME} promotions, special rates, and incentives across Brooklyn, Long Island, New York City, Queens, and Staten Island.</p>

                    <div className="pa_business_wrapper">
                        <div className="pa_business_block">
                            <div className="pa_imager">
                                <div className="sprite-business business"></div>
                            </div>
                            <div className="pa_content">
                                <h2>Business Vehicle Solutions</h2>
                                <p>Our commercial leasing solutions cater to businesses of every size. With an extensive inventory spanning various models and specifications, we're equipped to meet your professional requirements. Reach out to {process.env.NEXT_PUBLIC_SITE_NAME} to begin your journey.</p>
                                <ul>
                                    <li>Efficiency: From small enterprises to large corporations, we accommodate all business scales.</li>
                                    <li>Customization: We craft lease arrangements that align perfectly with your business model.</li>
                                    <li>Flexibility: Your leasing terms can evolve alongside your expanding business needs.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pa_business_block">
                            <div className="pa_imager">
                                <div className="sprite-business company"></div>
                            </div>
                            <div className="pa_content">
                                <h2>Corporate Vehicle Programs</h2>
                                <p>Empower your organization's mobility with our comprehensive corporate vehicle solutions.</p>
                                <ul>
                                    <li>Premium sedans tailored for corporate leadership and top-tier professionals.</li>
                                    <li>Project success through sophisticated vehicle choices that reflect your corporate achievements.</li>
                                    <li>Create adaptable leasing solutions that match your organizational needs.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pa_business_block">
                            <div className="pa_imager">
                                <div className="sprite-business executive"></div>
                            </div>
                            <div className="pa_content">
                                <h2>Premium Executive Fleet</h2>
                                <p>Enhance your talent retention strategy with our executive vehicle programs, designed to attract and maintain top industry professionals.</p>
                                <ul>
                                    <li>Attract elite talent with prestigious executive vehicle offerings.</li>
                                    <li>Optimize your financial strategy through substantial lease-related tax advantages.</li>
                                    <li>Streamlined executive leasing programs that maximize efficiency while maintaining luxury standards.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pa_business_block">
                            <div className="pa_imager">
                                <div className="sprite-business busvan"></div>
                            </div>
                            <div className="pa_content">
                                <h2>Commercial Transport Solutions</h2>
                                <p>Streamline your group transportation needs with our comprehensive fleet options, offering the convenience of unified vehicle management.</p>
                                <ul>
                                    <li>Diverse van selections suitable for employee shuttles, resident transport, or customer service.</li>
                                    <li>Competitive pricing and exclusive benefits for commercial transport leases.</li>
                                    <li>Full compliance with ADA standards across our entire fleet.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pa_business_block">
                            <div className="pa_imager">
                                <div className="sprite-business fleet"></div>
                            </div>
                            <div className="pa_content">
                                <h2>Complete Fleet Management</h2>
                                <p>Our diverse vehicle selection reflects our understanding that each enterprise has unique operational requirements.</p>
                                <ul>
                                    <li>Comprehensive options including commercial trucks, delivery vehicles, and specialized service units.</li>
                                    <li>Tailored lease packages designed around your specific business operations.</li>
                                    <li>Full customization options including vehicle modifications, branding, and specialized equipment.</li>
                                    <li>Immediate Support for Your Business Transportation Needs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <SingleCarForm title="Business Car Leasing" />

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