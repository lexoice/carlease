import React from "react";


const CarInDays = () => {
  return (
    <section className="car-in-days-sec">
      <div className="car-in-day-wrp">
        <div className="car-in-left">
          <h3 className="heading">
            Lease Your Dream Car <span>In Just One Day!</span>
          </h3>
          <p>
            New York Metropolitan Area customers can now lease a car quickly and
            affordably.Brooklyn-based leasing dealer, offers
            same-day delivery to New York City (Brooklyn, Queens, Manhattan, The
            Bronx, Staten Island, Upstate New York, and surrounding areas). To
            lease a car through, simply apply online and a
            representative will contact you to discuss your needs. Once you've
            been approved, you can choose from a wide selection of new and used
            cars and have it delivered to your home or office the same day.
          </p>
          <button 
            className="read-more-btn"
            onClick={() => {
              const content = document.querySelector('.seven_inner');
              const btn = document.querySelector('.read-more-btn');
              if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
                btn.textContent = 'Read Less';
              } else {
                content.style.display = 'none';
                btn.textContent = 'Read More';
              }
            }}
          >
            Read More
          </button>
          <div className="seven_inner" style={{display: 'none'}}>
            <div className="more_text">
              <h4>Any Make or Model</h4>
              <p>
                One of the biggest things that sets us apart from the
                competition is the fact that we aren't limited to just a few
                makes and models. Instead, we can lease you any type of vehicle
                you are interested in. This includes domestic cars like Fords,
                Cadillacs, GMC, Dodge, and more. It also includes imports like
                Subaru, BMW, Porsche and others. Not only can we get you any
                make or model vehicle, we can also get you the car in the exact
                trim package that you desire.
              </p>
              <p>
                This in in stark contrast to the way that traditional car
                dealerships work. They only offer a couple of different car
                brands and then try to pressure you into finding something from
                their inventory that will work for you. While this has been
                effective for the dealerships for many years, it has left buyers
                in a bad position. Our way of doing business will put all the
                power into the hands of you, the consumer.
              </p>{" "}
            </div>
            <div className="more_text">
              <h4>Working on Your Behalf</h4>
              <p>
                When you come to us we will ask you some questions to learn more
                about exactly what type of vehicle you are looking for. Once it
                is narrowed down, we'll begin looking through the inventory of
                all the dealerships in the area. When we find a location that
                has what you are looking for, we'll set up a test drive where we
                will bring the car to your home or office so you can take it for
                a spin. If you love it, we'll negotiate a great deal with the
                dealership so you can be confident you are paying the lowest
                possible price.
              </p>
              <p>
                We are essentially an{" "}auto leasing{" "}
                broker that helps you to get exactly what you need, when you
                need it. You will love the lower prices that you will get, and
                the dealerships love working with us because we bring them sales
                that they wouldn't be able to get on their own. This is why they
                give us lower prices than they could give to a normal customer
                who they have to spend a significant amount of time with in
                order to secure the sale.
              </p>{" "}
            </div>
            <div className="more_text">
              <h4>We Help with Financing Too!</h4>
              <p>
                In addition to helping you find the right vehicle for your
                needs, we'll also make all the arrangements necessary or your
                financing. This will help to keep your interest rates lower than
                would otherwise be possible. Our team can help people whether
                they have perfect credit, or it needs some work. We'll always
                push to get you the best terms no matter what type of vehicle
                you are going to lease, which will end up saving you hundreds of
                dollars over the course of the loan.
              </p>
            </div>
            <div className="more_text">
              <h4>Contact Us Today</h4>
              <p>
                If you would like to learn more about leasing a car from 718
                Auto Lease in Brooklyn, please don't hesitate to reach out to
                us. Our customer service professionals are here to help you and
                would be happy to answer any questions you may have. To get in
                touch with us, please dial{" "}
                <a href="tel:+17184123454">718-407-6315</a> today. If you have a
                junk car, or an old car, truck, or SUV that's doing nothing more
                than taking up space on your property. Call{" "}
                <a href="https://www.ecarscash.com/" title="cash for cars">
                  eCarsCash
                </a>
                , our parent cars for cash company to receive a top cash for
                your car with a FREE pickup in New York and New Jersey
              </p>{" "}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CarInDays;
