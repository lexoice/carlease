import React from 'react'
import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <Seo
                title="Accessibility"
                description="Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from eAutoLease. No hidden fees."
                canonical="https://www.eautolease.com/services/trade-ins/"
                ogUrl="https://www.eautolease.com/services/trade-ins/"
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Accessibility Statement</h1>

                        <h2>General</h2>
                        <p>eautolease.com strives to ensure that its services are accessible to people with disabilities. eautolease.com has invested a significant amount of resources to help ensure that its website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort and independence.</p>
                        <p>If you have trouble seeing our website, we recommend reviewing the resources listed below to help optimize your computer and browser to improve your online experience:</p>
                        <ul>
                            <li>Use the keyboard to navigate screens</li>
                            <li>Magnify your screen</li>
                            <li>Change background and text colors</li>
                            <li>Make your mouse pointer more visible (Windows only)</li>
                        </ul>
                        <p>For more information – <a href="https://www.ssa.gov/accessibility/index.html" rel="nofollow">www.ssa.gov</a></p>
                        <p>The guides above, referenced by the ada.gov website will help you customize your particular web browser and computer to achieve the best results. The GDW site is designed to be able to be read aloud, navigated by keyboard only, allow increased or decreased text size, or changing of its colors for your accessibility needs.</p>
                        <h2>Closed Captioning</h2>
                        <p>
                            Closed captioning (CC) provides a visual display of text that is synchronized with the video presentation and audio tracks. The term "Closed" indicates that the captions are not visible unless they are activated by the user.
                            <br />
                            Learn how to turn captioning on and off for <a href="https://support.google.com/youtube/answer/100078?co=GENIE.Platform=Desktop&amp;hl=en-GB&amp;oco=1">YouTube by clicking here.</a>
                        </p>
                        <h2>Increase Text Size</h2>
                        <p>To increase text size in most web browsers simply hold down the Ctrl key (Command key on a Macintosh) and press the + (plus) key to increase text size or – (minus) key to reduce text size.</p>
                        <h2>BrowseAloud</h2>
                        <p>BrowseAloud is browser plug-in for people who find it difficult to read online. By reading text aloud and highlighting the words as they are spoken, BrowseAloud can help people with learning disabilities, English as a second language, and mild visual impairments:</p>
                        <ul>
                            <li><a target="_blank" href="https://www.texthelp.com/en-gb/products/reachdeck/browsealoud-is-now-the-reachdeck-toolbar/" title="Download BrowseAloud" rel="noopener noreferrer">Download BrowseAloud</a></li>
                        </ul>
                        <h2>Contact Us</h2>
                        <p>If you wish to report an accessibility issue, have any questions or need assistance, please contact us at <a href="tel:+17188712277">718-871-2277</a>.</p>
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