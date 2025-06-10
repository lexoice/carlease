import React from 'react';

const CarLeaseDeals = () => {
    return (
        <section className="car-lease-deals-sec sec-m">
            <div className="container">
                <div className="car-lease-head">
                    <h2>Car Lease Deals</h2>
                    <div>
                        <p>Ask us about</p>
                        <a href="#">short term leasing</a>
                    </div>
                </div>

                <div className="car-lease-wrp">
                    {[...Array(8)].map((_, index) => (
                        <div className="single-car" key={index}>
                            <button>GET QUOTE</button>
                            <a href="#">
                                <div className="car-thum">
                                    <span>Hot Deal</span>
                                    <img
                                        src={`/images/car/${index % 4 === 0 ? 'Volkswagen' :
                                            index % 4 === 1 ? 'Hyundai' :
                                                index % 4 === 2 ? 'BMW' : 'kia'}.png`}
                                        alt="car"
                                        width="auto"
                                        height="auto"
                                    />
                                </div>

                                <div className="car-title">
                                    <h3>{index % 4 === 0 ? 'Volkswagen Tiguan' :
                                        index % 4 === 1 ? '2023 Hyundai Elantra' :
                                            index % 4 === 2 ? '2023 BMW iX' : '2023 Kia Forte'}</h3>
                                    <p>tesla Model Y SUV 61.1kWh 115KW 156PS</p>
                                </div>

                                <ul className="car-feature">
                                    <li className="camera">Reversing Camera</li>
                                    <li className="seats">Heated Seats</li>
                                    <li className="steering">Heated Steering Wheel</li>
                                    {index === 0 && (
                                        <>
                                            <li className="mpg">MPG</li>
                                            <li className="seatstwo">Seats</li>
                                            <li className="power">Horsepower</li>
                                            <li className="drivetrain">Drivetrain</li>
                                        </>
                                    )}
                                </ul>

                                <ul className="car-list">
                                    <li>Lease Term: 39 Months</li>
                                    <li>Miles Per Year: 7,500</li>
                                </ul>

                                <div className="car-price">
                                    <p>from</p>
                                    <span><span>$</span>300<span>.00</span></span>
                                    <p>Month / $0 down</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarLeaseDeals;
