import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="logo">
            <Link href="/">Philadelphia 
                <span>Car</span>
                <span>Lease</span>
            </Link>
        </div>
    );
};

export default Logo;
