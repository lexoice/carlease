import React from 'react';
import ImageWithLoader from "../UI/ImageWithLoader"

const LogoSection = () => {
    return (
        <section className="brand-logo-sec">
            <div className="overflow-auto">
                <ImageWithLoader src="images/brandBg.png" alt="brand" width="1608px" height="62px" loading="lazy" />
            </div>
        </section>
    );
};

export default LogoSection;