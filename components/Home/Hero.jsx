import React from 'react';
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-heading-wrp">
                        <div className="banner-heading">
                            <h1>{process.env.NEXT_PUBLIC_SITE_NAME}</h1>
                            <p>Leases start from 18 Months Same day delivery*</p>
                        </div>
                        <div className="sup">
                            <span><sup>$</sup>0</span>
                            <div className="">
                                <p>Down lease on all makes &amp; models!</p>
                                <p>Excludes: First month, acquisition fee, dmv and sales tax Leases from 18 mos. Same day delivery!</p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <ul>
                            <li><a href="/car-lease-deals/electric-lease-specials/">Electric Cars</a></li>
                            <li><a href="/car-lease-deals/hybrid-lease-specials/">Hybrids Cars</a></li>
                            <li><a href="/business-leasing">Business/Commercial</a></li>
                            <li><a href="/services/lease-returns/">Lease Return</a><a> / </a><a href="/services/trade-in-appraisals/">Trade in Your Vehicles</a></li>
                        </ul>
                    </div>
                    <div className="banner-car">
                        <Image src="/images/p1.png" alt="Car" width={1000} height={500} priority />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;