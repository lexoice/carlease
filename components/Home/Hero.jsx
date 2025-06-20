import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-heading-wrp">
                        <div className="banner-heading">
                            <h1>Philadelphia Car Lease</h1>
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
                            <li><Link href="/car-lease-deals/electric-lease-specials/">Electric Cars</Link></li>
                            <li><Link href="/car-lease-deals/hybrid-lease-specials/">Hybrids Cars</Link></li>
                            <li><Link href="/business-leasing/">Business/Commercial</Link></li>
                            <li><Link href="/services/lease-return/">Lease Return</Link><a> / </a><Link href="/services/trade-ins/">Trade in Your Vehicles</Link></li>
                        </ul>
                    </div>
                    <div className="banner-car">
                        <Image src="/images/p1.webp" alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`} title={`${process.env.NEXT_PUBLIC_SITE_NAME}`} width={1000} height={500} priority={true}  />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;