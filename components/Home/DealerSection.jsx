import React from 'react';

const DealerSection = () => {
    return (
        <section className="dealer-of-sec">
            <div className="container">
                <div className="dealer-of-wrp">
                    <div className="dealer-left">
                        <p>Are you looking for the best car leasing deals on a new car but don't want to commit to a long-term lease? If so, {process.env.NEXT_PUBLIC_SITE_NAME} is the perfect solution for you. {process.env.NEXT_PUBLIC_SITE_NAME} is one of Philadelphia's most well-known independent car leasing companies, offering a transparent, hassle-free...</p>
                    </div>
                    <div className="dealer-logo"></div>
                    <div className="dealer-right">
                        <h2>the most trusted car leasing company</h2>
                        <div className="star-rating">
                            <span className="star">★ ★ ★ ★ ★</span>
                            <p>5.0/5 out of <a href="https://www.dealerrater.com/dealer/eAutoLease-dealer-reviews-106562/#link" rel="noopener noreferrer" target="_blank">4000+ Reviews</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealerSection;