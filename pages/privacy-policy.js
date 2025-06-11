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
                    <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>

                    <h3>Special Note:</h3>
                    <p>Monthly pricing may reflect based on registered vehicle address. All prices displayed on {process.env.NEXT_PUBLIC_SITE_NAME} are starting at. Each listed vehicle is a base model.</p>

                    <h3>Price Matching Policy:</h3>
                    <ul>
                        <li>We constantly compare prices on all cars, so you'll know you're saving.</li>
                        <li>Value at {process.env.NEXT_PUBLIC_SITE_NAME} is about feeling a sense of satisfaction that you paid the right price without sacrificing experience, quality or style.</li>
                        <li>We remain focused on simplifying the shopping experience to provide great deals when and where our customers want to shop.</li>
                    </ul>

                    <p>{process.env.NEXT_PUBLIC_SITE_NAME} is committed to providing low prices every day, on everything.* So if you find a lower price from our competitor on a motor vehicle with identical M.S.R.P., tell us and we'll match it.</p>

                    <h3>*The following limitations apply:</h3>
                    <p>
                        The motor vehicle must be with identical M.S.R.P. (i.e., make, model, condition and color).<br />
                        The motor vehicle must be sold only by authorized manufacture's dealers and not third-party brokers.<br />
                        The price for the motor vehicle must be listed and valid at the time of match. We reserve the right to verify a competitor's advertised price and the availability of the motor vehicle.
                    </p>

                    <h3>Sorry, we don't match:</h3>
                    <p>
                        Prices from or on behalf of third-party brokers;<br />
                        Pricing due to errors, competitor door busters/lightning sales;<br />
                        "Coupon" offers and/or "Promotional" codes.<br />
                        {process.env.NEXT_PUBLIC_SITE_NAME} has the final decision for matching a price.<br />
                        {process.env.NEXT_PUBLIC_SITE_NAME} reserves the right to update or modify the terms of this policy at any time.
                    </p>

                    <h3>What personal information do we collect from the people that visit our blog, website or app?</h3>
                    <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number or other details to help you with your experience.</p>

                    <h3>When do we collect information?</h3>
                    <p>We collect information from you when you subscribe to a newsletter, fill out a form, Use Live Chat or enter information on our site.</p>

                    <h3>How do we use your information?</h3>
                    <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
                    <ul>
                        <li>To allow us to better service you in responding to your customer service requests.</li>
                        <li>To send periodic emails regarding your order or other products and services.</li>
                        <li>To follow up with them after correspondence (live chat, email or phone inquiries)</li>
                    </ul>

                    <p>&nbsp;</p>

                    <h3>How do we protect your information?</h3>
                    <p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.</p>

                    <h3>We use regular Malware Scanning.</h3>
                    <p>
                        Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.<br />
                        We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.<br />
                        All transactions are processed through a gateway provider and are not stored or processed on our servers.
                    </p>

                    <h3>Do we use 'cookies'?</h3>
                    <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

                    <h3>We use cookies to:</h3>
                    <ul>
                        <li>Understand and save user's preferences for future visits.</li>
                    </ul>

                    <p>&nbsp;</p>

                    <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>

                    <h3>If users disable cookies in their browser:</h3>
                    <p>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.Some of the features that make your site experience more efficient and may not function properly.</p>

                    <h3>Third-party disclosure</h3>
                    <p>
                        We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.<br />
                        However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                    </p>

                    <h3>Third-party links</h3>
                    <p>We do not include or offer third-party products or services on our website.</p>

                    <h3>Google</h3>
                    <p>
                        Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users.<br />
                        <span className="word-break">https://support.google.com/adwordspolicy/answer/1316548?hl=en</span><br />
                        We have not enabled Google AdSense on our site but we may do so in the future.
                    </p>

                    <h3>California Online Privacy Protection Act</h3>
                    <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. – See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</p>

                    <h3>According to CalOPPA, we agree to the following:</h3>
                    <p>
                        Users can visit our site anonymously.<br />
                        Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.<br />
                        Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.<br />
                        You will be notified of any Privacy Policy changes:
                    </p>

                    <ul>
                        <li>On our Privacy Policy Page</li>
                    </ul>

                    <p>Can change your personal information:</p>
                    <ul>
                        <li>By emailing us</li>
                        <li>By calling us</li>
                        <li>By chatting with us or by sending us a support ticket</li>
                    </ul>

                    <p>&nbsp;</p>

                    <h3>How does our site handle Do Not Track signals?</h3>
                    <p>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>

                    <h3>Does our site allow third-party behavioral tracking?</h3>
                    <p>It's also important to note that we do not allow third-party behavioral tracking</p>

                    <p>&nbsp;</p>

                    <h3>COPPA (Children Online Privacy Protection Act)</h3>
                    <p>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>

                    <p>We do not specifically market to children under the age of 13 years old.</p>

                    <p>&nbsp;</p>

                    <h3>Fair Information Practices</h3>
                    <p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>

                    <p>&nbsp;</p>

                    <h3>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</h3>
                    <p>We will notify you via email</p>
                    <ul>
                        <li>Within 1 business day</li>
                    </ul>

                    <p>&nbsp;</p>

                    <p>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</p>

                    <h3>CAN SPAM Act</h3>
                    <p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>

                    <h3>We collect your email address in order to:</h3>
                    <ul>
                        <li>Send information, respond to inquiries, and/or other requests or questions</li>
                        <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
                    </ul>

                    <p>&nbsp;</p>

                    <h3>To be in accordance with CANSPAM, we agree to the following:</h3>
                    <ul>
                        <li>Not use false or misleading subjects or email addresses.</li>
                        <li>Identify the message as an advertisement in some reasonable way.</li>
                        <li>Include the physical address of our business or site headquarters.</li>
                        <li>Monitor third-party email marketing services for compliance, if one is used.</li>
                        <li>Honor opt-out/unsubscribe requests quickly.</li>
                        <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
                    </ul>

                    <p>&nbsp;</p>

                    <h3>If at any time you would like to unsubscribe from receiving future emails, you can email us at</h3>
                    <ul>
                        <li className="innerText">Follow the instructions at the bottom of each email. and we will promptly remove you from&nbsp;<strong>ALL</strong>&nbsp;correspondence.</li>
                    </ul>

                    <p>&nbsp;</p>

                    <h3>Accessibility</h3>
                    <p>We are committed to making our shopping experience available to all our customers, including those with disabilities, and have designed this website with accessibility in mind.</p>

                    <h3>Need Assistance or Have Feedback?</h3>
                    <p>If you notice any content, feature or functionality that you believe is not fully accessible to people with disabilities, please email us at&nbsp;info@eautolease.com&nbsp;with the words "Disabled Access" in the subject line and provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement. We assure that we will evaluate ways to accommodate all of our customers and our overall accessibility policies.</p>

                    <h3>Contacting Us</h3>
                    <p>
                        If there are any questions regarding this privacy policy, you may contact us using the information below.<br />
                        https://www.eautolease.com/<br />
                        3820 Nostrand Avenue, #107<br />
                        Brooklyn, NY 11235
                    </p>

                    <p>
                        USA<br />
                        info@eautolease.com<br />
                        (718) 871-2277<br />
                        Last Edited on 2018-12-27
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