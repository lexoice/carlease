import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <section className="customer-say-sec sec-m">
            <div className="customer-say-wrp">
                <div className="left-custo">
                    <span></span>
                </div>
                <div className="customer-review">
                    <Slider {...settings}>
                        <div className="single-custo-re">
                            <h2 className="heading">What Our Customers <span>Say About Us</span></h2>
                            <h3>Simple, Quick And Easy <span className="star">★ ★ ★ ★ ★</span></h3>
                            <p>Zoriy always delivers with everything you need. Whether it's getting out of an old car lease or getting into a new one, it's by far the most thorough experience I've…</p>
                            <p>5.0/5 based on 4000+ Dealer Rater Reviews</p>
                        </div>
                        <div className="single-custo-re">
                            <h2 className="heading">What Our Customers <span>Say About Us</span></h2>
                            <h3>Simple, Quick And Easy <span className="star">★ ★ ★ ★ ★</span></h3>
                            <p>Zoriy always delivers with everything you need. Whether it's getting out of an old car lease or getting into a new one, it's by far the most thorough experience I've…</p>
                            <p>5.0/5 based on 4000+ Dealer Rater Reviews</p>
                        </div>
                        <div className="single-custo-re">
                            <h2 className="heading">What Our Customers <span>Say About Us</span></h2>
                            <h3>Simple, Quick And Easy <span className="star">★ ★ ★ ★ ★</span></h3>
                            <p>Zoriy always delivers with everything you need. Whether it's getting out of an old car lease or getting into a new one, it's by far the most thorough experience I've…</p>
                            <p>5.0/5 based on 4000+ Dealer Rater Reviews</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
