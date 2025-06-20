import React from 'react';
import Link from 'next/link';

const MenuBodyList = () => {
    return (
        <div className="by_body_wrapper">
            <div className="body_type">
                <Link href="/car-lease-deals/convertible-lease-specials/">
                    <i className="icon-Convertibles"></i>
                    <span>Convertibles</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/sedan-lease-specials/">
                    <i className="icon-Sedans"></i><span>Sedans</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/wagon-lease-specials/">
                    <i className="icon-Wagons"></i><span>Wagons</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/crossover-lease-specials/">
                    <i className="icon-Crossovers"></i><span>Crossovers</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/coupe-lease-specials/">
                    <i className="icon-Coupes"></i><span>Coupes</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/minivan-lease-specials/">
                    <i className="icon-Minivans"></i><span>Minivans</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/sports-lease-specials/">
                    <i className="icon-Sports"></i><span>Sports</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/hatchback-lease-specials/">
                    <i className="icon-Hatchbacks"></i>
                    <span>Hatchbacks</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/suv-lease-specials/">
                    <i className="icon-SUVs"></i><span>SUVs</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/trucks-lease-specials/">
                    <i className="icon-Trucks"></i><span>Trucks</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/hybrid-lease-specials/">
                    <i className="icon-Hybrids"></i><span>Hybrids</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/electric-lease-specials/">
                    <i className="icon-Electric"></i><span>Electric</span>
                </Link>
            </div>
            <div className="body_type">
                <Link href="/car-lease-deals/luxury-lease-specials/">
                    <i className="icon-Luxury"></i><span>Luxury</span>
                </Link>
            </div>
        </div>
    );
};

export default MenuBodyList;
