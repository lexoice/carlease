import React from 'react'
import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function ServicesPage() {
    return (
        <>
            <Seo
                title={`Services | Monthly Lease Specials (New) | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Discover the best short-term car lease deals in NYC and surrounding areas for personal and business use. Lease with Philadelphia’s top auto-leasing company and unlock exclusive offers in Philadelphia’s .`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/services`}
            />

            <Breadcrumbs />

            <section className="service-sec sec-m">
                <div className="container">
                    <div className="services-wrp">
                        <a href="/services/trade-ins" className="single-service">
                            <div className="left">
                                <h2>Trade-In Appraisals in Philadelphia</h2>
                                <p>
                                    Get a trade-in appraisal when you are looking to lease a car in Philadelphia.
                                </p>
                            </div>
                            <div className="right">
                                <img
                                    src="/images/services/sr7.jpg"
                                    alt="service"
                                    width="auto"
                                    height="auto"
                                />
                            </div>
                        </a>

                        <a href="/services/getting-help" className="single-service">
                            <div className="left">
                                <h2>Sell Your Car in Philadelphia</h2>
                                <p>
                                    You can sell your car in Philadelphia far faster and easier than you may have expected.
                                </p>
                            </div>
                            <div className="right">
                                <img
                                    src="/images/services/sr1.jpg"
                                    alt="service"
                                    width="auto"
                                    height="auto"
                                />
                            </div>
                        </a>



                        <a href="/services/lease-transfer" className="single-service">
                            <div className="left">
                                <h2>Lease Transfers in Philadelphia</h2>
                                <p>
                                    Did you know that auto lease transfers are an option for all lease holders in Philadelphia?
                                </p>
                            </div>
                            <div className="right">
                                <img
                                    src="/images/services/sr6.jpg"
                                    alt="service"
                                    width="auto"
                                    height="auto"
                                />
                            </div>
                        </a>

                        <a href="/services/lease-return" className="single-service">
                            <div className="left">
                                <h2>Lease Return in Philadelphia</h2>
                                <p>
                                    For many, the lease return process is overly complicated and time consuming, but that doesn’t have to be the case.
                                </p>
                            </div>
                            <div className="right">
                                <img
                                    src="/images/services/sr9.jpg"
                                    alt="service"
                                    width="auto"
                                    height="auto"
                                />
                            </div>
                        </a>

                        <a href="/services/auto-finance" className="single-service">
                            <div className="left">
                                <h2>Auto Financing Options in Philadelphia</h2>
                                <p>
                                    When leasing a car in Philadelphia, you need to make sure that the terms of your auto financing contract are reasonable.
                                </p>
                            </div>
                            <div className="right">
                                <img
                                    src="/images/services/sr12.jpg"
                                    alt="service"
                                    width="auto"
                                    height="auto"
                                />
                            </div>
                        </a>


                        <a href="/services/lease-termination" className="single-service">
                            <div className="left">
                                <h2>Lease Termination in Philadelphia</h2>
                                <p>
                                    If you need to get out of your lease before the end of the contract, our lease termination options may be right for you.
                                </p>
                            </div>
                            <div className="right">
                                <img
                                    src="/images/services/sr5.jpg"
                                    alt="service"
                                    width="auto"
                                    height="auto"
                                />
                            </div>
                        </a>




                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}