import React from "react";
import PhoneLink from "../UI/PhoneLink";

const CarInDays = () => {
  return (
    <section className="car-in-days-sec">
      <div className="car-in-day-wrp">
        <div className="car-in-left">
          <h2 className="heading">A Different Kind of Car Leasing Company</h2>
          <p>
            Philadelphia Car Leasing may be a newer name in the city, but we’re
            quickly becoming one of the most forward-thinking leasing companies
            in all of Pennsylvania. A major challenge drivers often face when
            leasing a car is either inflated pricing or lack of vehicle
            availability. Even if the lease terms seem manageable, many people
            walk away feeling like the cost doesn’t reflect the car’s real
            value—which makes the experience feel less than satisfying.
          </p>
          <p>
            Another common frustration is searching for a specific model you've
            seen online or in an ad, only to find it’s unavailable. Traditional
            dealerships often carry limited inventory, making it hard to secure
            the exact vehicle you’ve set your sights on. When the car you want
            isn’t in stock, it’s a major letdown.
          </p>

          <h2>Why Philadelphia Car Leasing Stands Out</h2>
          <p>
            At Philadelphia Car Leasing, we put people before profit. Our
            priority is giving you the best possible leasing experience—one
            that’s affordable, transparent, and stress-free. That commitment has
            earned us outstanding reviews and loyal customers who return time
            and again.
          </p>
          <p>
            We’re known for offering some of the lowest lease prices in the
            Philadelphia area. Our innovative approach allows us to help clients
            lease the cars they truly want—even on a budget. What sets us apart
            is not only our pricing, but also our wide selection: we work with
            nearly every major brand, giving you access to an extensive
            inventory that most local dealerships simply can’t match.
          </p>
          <p>
            Add in our knowledgeable, customer-focused team—and you’ve got a
            leasing experience that’s tailored, honest, and refreshingly simple.
          </p>
          <p>
            Call us today at <PhoneLink /> to
            learn more about our lease specials, or explore our inventory online
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarInDays;
