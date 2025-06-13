import React from 'react'
import Seo from '../components/UI/Seo'
import Breadcrumbs from '../components/UI/Breadcrumbs'

export default function AccessibilityPage() {
    return (
        <>
            <Seo
                title={`Terms of Service | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                description={`Instant cash for your trade-in or used car. Same-day pick-up and guaranteed fair offer from ${process.env.NEXT_PUBLIC_SITE_NAME}. No hidden fees.`}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service/`}
                ogUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service/`}
            />

            <Breadcrumbs />
            <section className="contact-inner-sec sec-m">
                <main className="main-inner">
                    <h1>Terms of Service</h1>

                    <h3 id="terms-and-conditions">TERMS AND CONDITIONS</h3>
                    <p>
                        When submitting any form on our website, you consent to receive emails, calls, and text
                        messages at the phone number provided, which may include automated dialing or prerecorded
                        voices. Consent is not a condition of purchase or service, and you may revoke it at any
                        time by replying “STOP.”
                    </p>

                    <h3 id="submission-forms">SUBMISSION FORMS</h3>
                    <p>
                        You authorize our company and its directors, officers, employees, volunteers,
                        representatives, vendors, and agents to pick up and deliver the agreed-upon vehicle to
                        and from the dealership and the location you specify. You assume all risks associated
                        with vehicle delivery.
                    </p>
                    <p>
                        In consideration of the delivery fee being waived by our company in exchange for this
                        release and the service provided, you agree as follows:
                    </p>
                    <p>
                        You waive, release, and discharge our company and its affiliates from any liability,
                        including that arising from negligence or fault. You also agree to indemnify and hold
                        harmless our company and its affiliates for any claims related to vehicle delivery.
                    </p>
                    <p>
                        This release of liability shall be interpreted broadly to provide a waiver to the fullest
                        extent permitted by law.
                    </p>

                    <h3 id="consent-to-terms-privacy">CONSENT TO TERMS &amp; PRIVACY</h3>
                    <p>
                        We value your privacy and are dedicated to protecting it online. By clicking “SUBMIT,” you
                        acknowledge you have read and agree to these Terms of Service and our Privacy Policy.
                        You consent to receive communications via phone, text, email, and mail. You may opt-out
                        at any time by requesting to do so.
                    </p>

                    <h3 id="general">GENERAL</h3>
                    <p>
                        Please read these Terms of Use carefully. By using this website, you accept and will be
                        bound by these terms, as they may be amended from time to time. It is your responsibility
                        to review the Terms periodically—your continued use indicates acceptance of any changes.
                    </p>
                    <p>
                        We reserve the right to modify or terminate access to any content or functionality
                        without notice. Access is restricted to authorized users with valid credentials.
                        Unauthorized access may be subject to prosecution. Use of this website is at your own risk.
                    </p>

                    <h3 id="copyright">COPYRIGHT</h3>
                    <p>
                        You may view and temporarily copy content for informational purposes only. No part of this
                        website may be reproduced or redistributed without prior written consent of our company.
                    </p>
                    <p>
                        If you post content (photos, videos, or other media) here, you grant our company a
                        perpetual license to use, modify, and distribute it.
                    </p>

                    <h3 id="disclaimer-of-warranties">DISCLAIMER OF WARRANTIES</h3>
                    <p>
                        All information on this website is provided “AS IS” without warranty of any kind,
                        expressed or implied. Our company makes no representation as to accuracy, timeliness,
                        or completeness of content and disclaims any duty to update it.
                    </p>
                    <p>
                        In no event shall our liability exceed the amount paid by you for access to this site.
                    </p>

                    <h3 id="indemnification-by-user">INDEMNIFICATION BY USER</h3>
                    <p>
                        You agree to indemnify and hold our company harmless from any claims, losses, or expenses
                        (including attorney’s fees) arising from your use of this website or violation of these
                        Terms.
                    </p>

                    <h3 id="viruses">VIRUSES</h3>
                    <p>
                        We disclaim all liability for damages caused by any virus or malicious code on this site.
                    </p>

                    <h3 id="links-to-other-web-sites">LINKS TO OTHER WEB SITES</h3>
                    <p>
                        This site may contain links to third-party websites. We are not responsible for their
                        content or policies, and inclusion of any link does not imply endorsement.
                    </p>

                    <h3 id="submission-of-information">SUBMISSION OF INFORMATION</h3>
                    <p>
                        All information you submit becomes the property of our company and may be used for any
                        lawful purpose. Electronic transmissions are not guaranteed to be secure or confidential.
                    </p>

                    <h3 id="governing-law">GOVERNING LAW</h3>
                    <p>
                        These Terms are governed by applicable laws of your jurisdiction without regard to conflict
                        of law principles. Any disputes shall be resolved in the courts of the applicable venue.
                    </p>

                    <h3 id="no-unsolicited-ideas">NO UNSOLICITED IDEAS, CODE OR CONTENT</h3>
                    <p>
                        Do not send unsolicited ideas, suggestions, or code. Any such submissions are not
                        guaranteed confidential treatment, and you grant us a license to use and distribute them.
                    </p>

                    <h3 id="miscellaneous">MISCELLANEOUS</h3>
                    <p>
                        If any provision of these Terms is found unenforceable, it will be modified to the minimum
                        extent necessary, and the remainder will remain in effect. Waivers must be in writing.
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
