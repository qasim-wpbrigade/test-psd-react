import React from "react";
import HeroImage from '../../assets/images/hero-img.jpg';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-overlay">
                <img src={HeroImage} alt="" />
            </div>
            <div className="container">
                <div className="hero-content">
                    <h1>Lörem ipsum folig nettokrati jag nyrad</h1>
                    <div className="divider"></div>
                    <p>
                        Lörem ipsum antipöskapet treheten fastän res infraren
                        till preplakeling innan pare innan rera, sassa anapren.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
