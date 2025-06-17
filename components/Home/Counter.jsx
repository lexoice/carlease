import React from 'react';

const Counter = () => {
    return (
        <section className="counter-section">
            <div className="container">
                <div className="counter-wrp">
                    <div className="single-counter">
                        <div>
                            <h2><span className="counter">4000</span>+</h2>
                            <p>5.0 Star Trusted <br />Reviews</p>
                        </div>
                    </div>

                    <div className="single-counter two">
                        <div>
                            <h2><span className="counter">200</span>k+</h2>
                            <p>Cars Delivered</p>
                        </div>
                    </div>

                    <div className="single-counter three">
                        <div>
                            <h2><span className="counter">200</span>k+</h2>
                            <p>Monthly <br />Visitors</p>
                        </div>
                    </div>

                    <div className="single-counter four">
                        <div>
                            <h2><span className="counter">150</span>k+</h2>
                            <p>Cars Purchased <br />Successfully</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
