import React from 'react'
import { NextSeo } from 'next-seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <NextSeo
                title={`Terms of Service | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service/`}
            />

            <Breadcrumbs />

            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Terms of Service</h1>

                    <h3 id="terms-and-conditions">TERMS AND CONDITIONS</h3>
                    <p>
                        By submitting any form on this website, you agree to receive communications, including emails, phone calls, and text messages, at the number you provided. These may be delivered via automated systems or prerecorded messages. Your consent is voluntary and not a prerequisite for purchase. You can revoke it at any time by replying "STOP."
                    </p>

                    <h3 id="submission-forms">SUBMISSION FORMS</h3>
                    <p>
                        You grant our company and its agents—such as staff, representatives, contractors, and affiliates—permission to pick up and deliver the selected vehicle to and from your specified address and the dealership. You accept full responsibility for any risks involved in the delivery process.
                    </p>
                    <p>
                        In return for waiving the delivery charge, you acknowledge and agree to the following conditions:
                    </p>
                    <p>
                        You release our company and associated entities from any claims or liabilities, including those arising from negligence. Furthermore, you agree to defend and indemnify our company and its affiliates against any demands resulting from the delivery process.
                    </p>
                    <p>
                        This waiver is intended to be interpreted as broadly as legally permissible.
                    </p>

                    <h3 id="consent-to-terms-privacy">CONSENT TO TERMS &amp; PRIVACY</h3>
                    <p>
                        Your privacy matters to us, and we're committed to safeguarding it online. By clicking "SUBMIT," you confirm you've reviewed and agreed to our Terms of Service and Privacy Policy. You consent to be contacted through email, phone, text, and postal mail. You may opt out anytime upon request.
                    </p>

                    <h3 id="general">GENERAL</h3>
                    <p>
                        Please read these Terms of Use carefully. By accessing this website, you accept the current terms, which may be updated periodically. It is your responsibility to stay informed—continued use implies your agreement to any revisions.
                    </p>
                    <p>
                        We may update, restrict, or remove access to any portion of the site or its features without notice. Access is limited to authorized users. Any unauthorized attempts may lead to legal action. Your use of this site is at your own discretion and risk.
                    </p>

                    <h3 id="copyright">COPYRIGHT</h3>
                    <p>
                        You may view or temporarily copy content for personal informational use only. Reproduction or redistribution in any form requires prior written permission from our company.
                    </p>
                    <p>
                        If you upload any content (such as images or videos), you grant our company an unrestricted, perpetual license to use, edit, and distribute it.
                    </p>

                    <h3 id="disclaimer-of-warranties">DISCLAIMER OF WARRANTIES</h3>
                    <p>
                        All materials and information on this website are provided "AS IS" without any guarantee, either express or implied. We do not warrant the accuracy, completeness, or timeliness of the content and have no obligation to keep it current.
                    </p>
                    <p>
                        Our total liability, if any, shall not exceed the amount you paid for accessing the site.
                    </p>

                    <h3 id="indemnification-by-user">INDEMNIFICATION BY USER</h3>
                    <p>
                        You agree to indemnify and hold harmless our company from any claims, damages, or legal expenses (including attorney fees) arising from your use of the website or violation of these Terms.
                    </p>

                    <h3 id="viruses">VIRUSES</h3>
                    <p>
                        We are not liable for any harm or loss caused by viruses, malware, or other harmful components that may be present on this site.
                    </p>

                    <h3 id="links-to-other-web-sites">LINKS TO OTHER WEB SITES</h3>
                    <p>
                        This site may contain links to external sites. We are not responsible for the content or practices of any third-party website. The presence of a link does not imply our endorsement.
                    </p>

                    <h3 id="submission-of-information">SUBMISSION OF INFORMATION</h3>
                    <p>
                        Any data you provide becomes the property of our company and may be used for legitimate business purposes. Keep in mind that electronic transmissions are not guaranteed to be secure or confidential.
                    </p>

                    <h3 id="governing-law">GOVERNING LAW</h3>
                    <p>
                        These Terms are governed by the applicable local laws. Any legal disputes must be resolved within the jurisdiction where enforcement is sought.
                    </p>

                    <h3 id="no-unsolicited-ideas">NO UNSOLICITED IDEAS, CODE OR CONTENT</h3>
                    <p>
                        Please refrain from submitting unsolicited concepts, proposals, or code. Such submissions will not be treated as confidential, and we reserve the right to use or distribute them without restriction.
                    </p>

                    <h3 id="miscellaneous">MISCELLANEOUS</h3>
                    <p>
                        If any part of these Terms is deemed unenforceable, that provision will be revised as minimally as needed, while the remainder will stay fully effective. All waivers must be in written form to be valid.
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
