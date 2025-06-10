import React from 'react';

const SameCar = () => {
    return (
        <section className="same-car-better-sec">
            <div className="container">
                <div className="same-car-head">
                    <h2 className="heading">Same Car. <span>Better Price!</span></h2>
                    <p>Price match guarantee. same day free delivery</p>
                </div>

                <div className="difference-car-head">
                    <div className="differ-left flex-1">
                        <p>((DomainName))</p>
                    </div>
                    <div className="vs">
                        <span>VS</span>
                        <p>THE DIFFERENCE</p>
                    </div>
                    <div className="differ-right flex-1">
                        <p>Dealership/Leasing Co.</p>
                    </div>
                </div>

                <div className="overflow-auto">
                    <div className="vehicle-vs">
                        <div className="vehicle-vs-list left">
                            <ul>
                                <li><span>Vehicle MSRP</span> <span>Same</span></li>
                                <li><span>Vehicle Delivery</span> <span>$0</span></li>
                                <li><span>Broker Fee</span> <span>$0</span></li>
                                <li><span>Other Expenses</span> <span>$0</span></li>
                                <li><span>Hidden Fees</span> <span>$0</span></li>
                                <li>Price Difference With</li>
                            </ul>
                        </div>
                        <div className="vehicle-vs-price">
                            <p>$0</p>
                            <p>+$249</p>
                            <p>+$399</p>
                            <p>+$499</p>
                            <p>+$449</p>
                            <p className="total">$1,596</p>
                        </div>
                        <div className="vehicle-vs-list right">
                            <ul>
                                <li><span>Vehicle MSRP</span> <span>Same</span></li>
                                <li><span>Vehicle Delivery</span> <span>$249</span></li>
                                <li><span>Broker Fee</span> <span>$399</span></li>
                                <li><span>Other Expenses</span> <span>$499</span></li>
                                <li><span>Hidden Fees</span> <span>$499</span></li>
                                <li><a href="#">Find Your Car</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="vehicle-p">
                    Beside you're savings, ((DomainName)) is always here to help with any of your automotive needs
                    All values are approximated and/or average.
                </p>
            </div>
        </section>
    );
};

export default SameCar;
