import React from 'react';

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-top-wrp">

                    <div className="header-top-right">
                        <div className="star-rating">
                            <span>★ ★ ★ ★ ★</span>
                            <p>5.0/5 out of   <a href="https://www.dealerrater.com/dealer/eAutoLease-dealer-reviews-106562/#link" target="_blank" rel="noopener noreferrer">4000+ Reviews</a></p>
                        </div>
                    </div>
                    <div className="header-top-left header-top-right">
                    <p>Mon - Fri: 09:00AM – 09:00PM / Sat - Sun: 10:00AM - 07:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
