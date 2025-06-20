import React, { useState, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimilarCar from "../../components/SimularCar";
import SingleCarForm from "../../components/SingleCarForm";
import { ModalContext } from "../../contexts/ModalContext";
import DealerSection from "../Home/DealerSection";
import Image from 'next/image'
import PhoneLink from "../UI/PhoneLink";

const SingleCarLease = ({ ssrCar }) => {
  const car = ssrCar;

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const { openModal } = useContext(ModalContext);
  const sliderNavRef = useRef(null);
  const sliderMainRef = useRef(null);

  const gallery = car.gallery?.[selectedColorIndex] || {};
  const images = [
    gallery.front && { src: gallery.front, alt: `${car.make} ${car.model} ${car.colors?.[selectedColorIndex]?.name || ''} - Front view` },
    gallery.side && { src: gallery.side, alt: `${car.make} ${car.model} ${car.colors?.[selectedColorIndex]?.name || ''} - Side view` },
    gallery.back && { src: gallery.back, alt: `${car.make} ${car.model} ${car.colors?.[selectedColorIndex]?.name || ''} - Back view` },
  ].filter(Boolean);

  const navSettings = {
    slidesToShow: 3,
    asNavFor: '.details-car-caro',
    vertical: true,
    focusOnSelect: true,
    autoplay: false,
    centerMode: false,
    arrow: false,
    prevArrow: '',
    nextArrow: '',
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerPadding: '7px',
    responsive: [
      {
        breakpoint: 577,
        settings: {
          infinite: true,
          slidesToShow: 2,
          vertical: false,
          centerMode: true,
        }
      }
    ]
  };

  const mainSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    vertical: true,
    asNavFor: '.detail-car-nav',
  };

  const handleColorClick = (idx) => {
    setSelectedColorIndex(idx);
    sliderNavRef.current?.slickGoTo(0);
    sliderMainRef.current?.slickGoTo(0);
  };

  return (
    <section className="details-banner-sec">
      <div className="container-x">
        <div className="details-wrap">
          <div className="details-left-area">
            <div className="details-left">
              <div className="detail-car-nav car-previews-slider">
                <Slider
                  ref={sliderNavRef}
                  {...navSettings}
                  asNavFor={sliderMainRef.current}
                >
                  {images.map((img, idx) => (
                    <Image 
                      key={idx}
                      src={img.src} 
                      alt={img.alt}
                      title={img.alt}
                      width={240}
                      height={160}
                      priority
                      onClick={() => sliderMainRef.current?.slickGoTo(idx)}
                    />
                  ))}
                </Slider>
              </div>

              <div className="details-car-right">
                {car.badge_text && (
                  <span
                    className="badge"
                    style={{ backgroundColor: car.badge_color }}
                  >
                    {car.badge_text}
                  </span>
                )}
                <div className="details-car-caro car-full-slider">
                  <Slider
                    ref={sliderMainRef}
                    {...mainSettings}
                    asNavFor={sliderNavRef.current}
                  >
                    {images.map((img, idx) => (
                      <div key={idx} className="details-car-show">
                        <Image src={img.src} alt={img.alt} title={img.alt} width={868} height={560} priority />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            <SingleCarForm make={car.make} model={car.slug} />
          </div>

          <div className="details-right">
            <div className="details-head">
              <h2>
                <span>{car.title}</span>
              </h2>
              {car.price ? (
                <h2>
                  <span>${car.price}</span> / month
                </h2>
              ) : (
                <p className="call-for-price">Call For Price</p>
              )}
            </div>

            <div className="details-head">
              <h3>Key Features</h3>
              <ul className="mpg-seats-power-drivetrain">
                {car.fuel_city && (
                  <li className="mpg">
                    MPG{" "}
                    <p>
                      {car.fuel_city}/{car.fuel_highway}
                    </p>
                  </li>
                )}
                {car.seating && (
                  <li className="seats">
                    Seats <p>{car.seating}</p>
                  </li>
                )}
                {car.horse_power && (
                  <li className="power">
                    Horsepower <p>{car.horse_power}</p>
                  </li>
                )}
                {car.drive_type && (
                  <li className="drivetrain">
                    Drivetrain <p>{car.drive_type}</p>
                  </li>
                )}
              </ul>
            </div>

            <h3>Available Colors</h3>
            <ul className="color-list">
              {car.gallery?.map((g, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleColorClick(idx)}
                    title={g.color_name}
                    style={{
                      backgroundColor: g.color,
                      border:
                        idx === selectedColorIndex ? "2px solid #000" : "none",
                    }}
                  />
                </li>
              ))}
            </ul>

            <button
              className="color-get get-quote-btn"
              onClick={() => openModal(car)}
            >
              Get Free Quote Now
            </button>

            <div className="details-call">
              <p>
                Cheapest short or long term car lease deals. Bad credit? Not a
                problem.
              </p>
              <PhoneLink />
              <p>*Same-day delivery available.</p>
            </div>
          </div>
        </div>
      </div>
      <DealerSection />
      <SimilarCar body_type={car.body_type} />
    </section>
  );
};

export default SingleCarLease;
