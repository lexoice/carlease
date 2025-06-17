import React from 'react'
import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <Seo
                title={`Accessibility | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/accessibility/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/accessibility/`}
            />

            <Breadcrumbs />

            Вот рерайт текста **Accessibility Statement** с уникальной формулировкой и сохранённой HTML-структурой:


            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Accessibility Statement</h1>

                    <h2>General</h2>
                    <p>{process.env.NEXT_PUBLIC_SITE_NAME} is committed to making its services accessible to individuals with disabilities. We have devoted substantial resources to enhance website usability and accessibility, driven by the belief that everyone deserves to live with dignity, equality, independence, and comfort.</p>
                    <p>If you experience difficulty viewing our site, consider the tips below to improve your browser and device for a better online experience:</p>
                    <ul>
                        <li>Navigate pages using keyboard shortcuts</li>
                        <li>Use screen magnification tools</li>
                        <li>Adjust text and background colors for better contrast</li>
                        <li>Increase the visibility of your mouse pointer (Windows only)</li>
                    </ul>
                    <p>Additional help is available at <a href="https://www.ssa.gov/accessibility/index.html" rel="nofollow">www.ssa.gov</a></p>
                    <p>These resources, as recommended by ada.gov, offer guidance for tailoring your computer or browser settings to your individual accessibility needs. Our site supports screen readers, keyboard navigation, text scaling, and color adjustments to ensure a more inclusive experience.</p>

                    <h2>Closed Captioning</h2>
                    <p>
                        Closed captions (CC) display synchronized on-screen text for video and audio content. The term "Closed" means users can choose to turn captions on or off.
                        <br />
                        For instructions on enabling captions on YouTube, <a href="https://support.google.com/youtube/answer/100078?co=GENIE.Platform=Desktop&amp;hl=en-GB&amp;oco=1">click here</a>.
                    </p>

                    <h2>Increase Text Size</h2>
                    <p>To enlarge text on most web browsers, press and hold the Ctrl key (or Command key on Mac), then press the + (plus) key to zoom in, or the – (minus) key to zoom out.</p>

                    <h2>BrowseAloud</h2>
                    <p>BrowseAloud is a browser extension that assists users who struggle with reading online content. It reads text out loud and highlights each word, helping those with visual impairments, learning differences, or those learning English:</p>
                    <ul>
                        <li><a target="_blank" href="https://www.texthelp.com/en-gb/products/reachdeck/browsealoud-is-now-the-reachdeck-toolbar/" title="Download BrowseAloud" rel="noopener noreferrer">Download BrowseAloud</a></li>
                    </ul>

                    <h2>Contact Us</h2>
                    <p>If you encounter any accessibility barriers, have questions, or need assistance, please reach out to us at <a href="tel:+17188712277">718-871-2277</a>.</p>
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