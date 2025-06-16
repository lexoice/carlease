import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'
import SingleCarForm from '../components/SingleCarForm'

export default function ContactPage() {
    return (
        <>
            <Seo
                title={`Contact Us | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Explore the best car leasing deals in NYC and nearby areas for personal and business use. Find the cheapest short-term car leases from Philadelphia top auto leasing company. Unlock exclusive offers and rebates in Brooklyn, Queens, Staten Island, Long Island, and the Bronx.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/contact/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/contact/`}
            />


            <Breadcrumbs />


            <section className="inner-banner-sec contact">
                <div className="inner-banner-con">
                    <div className="inner-banner-left">
                        <h1>Contact Us</h1>
                        <p>
                            You've come to the right place for the best lease deals. We offer the
                            most extensive vehicle leasing inventory available throughout Philadelphia, New York,
                            New Jersey, Pennsylvania, and Connecticut. You won't find any high-priced
                            real estate that holds this extensive inventory, which is why you'll
                            save money when you lease from {process.env.NEXT_PUBLIC_SITE_NAME}.
                        </p>
                    </div>
                    <div className="inner-banner-right-area">
                        <div className="inner-banner-right">
                            <p>
                                Special offers, rebates in PA<br />
                                (Philadelphia, PA)
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-quote-sec">
                <div className="container-x">
                    <div className="business-quote-wrp">
                        <div className="business-quote-left">
                            <SingleCarForm />
                        </div>
                        <div className="business-quote-right">
                            <div className="details-call">
                                <p>
                                    Cheapest short or long term car lease deals. Bad credit? Not a problem
                                </p>
                                <a href="tel:+17188712277">(718) 871-2277</a>
                                <p>*Same-day delivery available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="quick-response-sec">
                <div className="container-x">
                    <div className="quick-res-wrp">
                        <div className="resp">
                            <h2>Quick Response</h2>
                            <p>
                                Your time is valuable. With easy, clear communication, you'll get the
                                answers you need to make a quick decision. So don't hesitate to contact
                                the sales and service professionals at {process.env.NEXT_PUBLIC_SITE_NAME} for honest, timely
                                answers. You'll find quick responses during our normal Sales and Service
                                operating times, seven days a week.
                            </p>
                        </div>
                        <div className="timing">
                            <h2>Timings:</h2>
                            <p>
                                9:00am – 9:00pm <span>M / T / W / T / S</span>
                            </p>
                            <p>
                                9:00am – 7:00pm <span>Friday</span>
                            </p>
                            <p>
                                10:00am – 7:00pm <span>Sunday</span>
                            </p>
                        </div>
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