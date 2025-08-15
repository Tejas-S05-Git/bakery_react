import React from "react";
import partner1 from "../../assets/images/Partners/Partner-1.png";
import partner2 from "../../assets/images/Partners/Partner-2.png";
import partner3 from "../../assets/images/Partners/Partner-3.png";
import partner4 from "../../assets/images/Partners/Partner-4.png";
import partner5 from "../../assets/images/Partners/Partner-5.png";
import partner6 from "../../assets/images/Partners/Partner-6.png";
import partner7 from "../../assets/images/Partners/Partner-7.png";
import partner8 from "../../assets/images/Partners/Partner-8.png";
import partner9 from "../../assets/images/Partners/Partner-9.png";
import partner10 from "../../assets/images/Partners/Partner-10.png";
import partner11 from "../../assets/images/Partners/Partner-11.png";
import partner12 from "../../assets/images/Partners/Partner-12.png";
import partner13 from "../../assets/images/Partners/Partner-13.png";



const Partner = () => {
    const partners = [
        partner1, partner2, partner3, partner4, partner5, partner6,
        partner7, partner8, partner9, partner10, partner11, partner12, partner13
    ];

    return (

        <>
            <style>
                {`
  .partner-slider {
    overflow: hidden;
    width: 100%;
  }
  .slider-track {
    display: flex;
    animation: scroll 10s linear infinite;
  }
  .partner-item {
    min-width: 200px;
    text-align: center;
    padding: 10px;
  }
  .partner-item img {
    max-width: 100%;
    height: auto;
  }
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-25%); }
  }
`}
            </style>
            <section className="partners">
                {/* Heading */}
                <div className="heading">
                    <span>meet our valued partners</span>
                    <h2>Our Partners</h2>
                </div>

                {/* Slider */}
                <div className="partner-slider">
                    <div className="slider-track">
                        {/* Duplicate images for seamless loop */}
                        {partners.concat(partners).map((logo, i) => (
                            <div className="partner-item" key={i}>
                                <a href="#">
                                    <img src={logo} alt={`Partner ${i}`} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partner;
