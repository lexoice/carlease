import React from 'react';
import Image from 'next/image'

const LogoSection = () => {
    return (
        <section className="brand-logo-sec">
            <div className="overflow-auto">
                <Image src="/images/brandBg.png" alt="brand" width={1608} height={62} loading="lazy" />
            </div>
        </section>
    );
};

export default LogoSection;