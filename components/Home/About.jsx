import React, { useState } from 'react';

const About = () => {
    const [showModal, setShowModal] = useState(false);

    const openVideoModal = () => {
        setShowModal(true);
    };

    const closeVideoModal = () => {
        setShowModal(false);
    };

    return (
        <section className="about-sec sec-m">
            <div className="about-wrp">
                <div className="about-left">
                    <button className="video-btn" onClick={openVideoModal}></button>
                </div>
                <div className="about-right">
                    <h2 className="heading">((DomainName)) 
                        <span>Car Leasing Company in Brooklyn</span>
                    </h2>
                    <p>((DomainName)) is here to help you find the best leasing deals in Brooklyn. Our team has been helping clients find great lease deals on all makes and models for years, and we are here to help you too. We aren’t just another Brooklyn dealership through. We operate in an entirely different way, and we think you will like the way things work. Take some time to read through this page and the rest of our website to learn more about how our leasing service works, and how we can get you the best deals around. </p>
                </div>
            </div>

            {showModal && (
                <div className="video-modal" 
                    onClick={closeVideoModal}>
                    <div className="modal-content" 
                        onClick={e => e.stopPropagation()}>
                        <button className="close-modal" 
                            onClick={closeVideoModal}>&times;</button>
                        <iframe 
                            width="100%" 
                            height="500"
                            src="https://www.youtube.com/embed/TUGPNtcED5A"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;
