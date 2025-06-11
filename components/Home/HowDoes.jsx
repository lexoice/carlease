import React from 'react';
import Image from 'next/image';


const HowDoes = () => {
    return (
        <section className="how-dose-sec">
            <div className="container">
                <div className="how-dose-wrp">
                    <div className="how-dose-left">
                        <h2 className="heading">How Does <br /> A Car <span>Lease Work?</span></h2>
                    </div>

                    <div className="how-dose-right">
                        <div className="single-dose">
                            <div className="img">
                                <Image  src="/images/car/dcar1.png" alt="car" width={129} height={59} loading="lazy" />
                            </div>
                            <p>Choose <br /> Your Car</p>
                        </div>

                        <div className="single-dose">
                            <div className="img">
                                <Image src="/images/car/dcar2.png" alt="car" width={129} height={59} loading="lazy" />
                            </div>
                            <p>Get Your <br /> Quote</p>
                        </div>

                        <div className="single-dose">
                            <div className="img">
                                <Image src="/images/car/dcar4.png" alt="car" width={129} height={59} loading="lazy" />
                            </div>
                            <p>Confirm <br /> Quote</p>
                        </div>

                        <div className="single-dose">
                            <div className="img">
                                <Image src="/images/car/dcar4.png" alt="car" width={129} height={59} loading="lazy" />
                            </div>
                            <p>Locate <br /> Your Car</p>
                        </div>

                        <div className="single-dose">
                            <div className="img">
                                <Image src="/images/car/dcar5.png" alt="car" width={129} height={59} loading="lazy" />
                            </div>
                            <p>Free <br /> Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowDoes;
