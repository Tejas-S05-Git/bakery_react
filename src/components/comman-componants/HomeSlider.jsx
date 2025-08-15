import React, { useEffect } from "react";
import home1 from "../../assets/images/Home/Home-1.jpg";
import home2 from "../../assets/images/Home/Home-2.jpg";
import home3 from "../../assets/images/Home/Home-3.jpg";
import Button from "../reuse-components/Button";

const HomeSlider = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".home-slider .home-item");
    const prevBtn = document.querySelector(".swiper-button-prev");
    const nextBtn = document.querySelector(".swiper-button-next");

    let index = 0;

    const showSlide = (i) => {
      slides.forEach((slide, idx) => {
        slide.style.display = idx === i ? "block" : "none";
      });
    };

    // Show first slide
    showSlide(index);

    // Auto-slide interval
    const interval = setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 3000);

    // Next button click
    nextBtn?.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    // Previous button click
    prevBtn?.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    return () => {
      clearInterval(interval);
      nextBtn?.removeEventListener("click", () => {});
      prevBtn?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>

    
       <section className="home">
            {/* Home Slider */}
            <div className="swiper-container home-slider">
              <div className="swiper-wrapper">
          
                {/* Home Slide-1 */}
                <div className="swiper-slide home-item">
                  <img src={home1} alt="Home-Image" /> {/* Slide Image */}
                  <div className="content">
                    <div className="text">
                      <h5><span></span>welcome to sweet delight<span></span></h5> {/* Slide Subheading */}
                      <h3>Step into a World of Sweet sweet delights</h3> {/* Slide Heading */}
                      <p>Indulge in a symphony of flavors with our artisanal baked goods, where every bite is a sweet delightful journey into the world of sweetness.</p> {/* Slide Description */}
                      {/* <a href="pages/Pages/Menu.html" className="btn">our menu</a> Menu Button */}
                      <Button label="our menu" href="pages/Pages/Menu.html" className={"btn"}/>
                    </div>
                  </div>
                </div>
          
                {/* Home Slide-2 */}
                <div className="swiper-slide home-item">
                  <img src={home2} alt="Home-Image" /> {/* Slide Image */}
                  <div className="content">
                    <div className="text">
                      <h5><span></span>welcome to sweet delight<span></span></h5> {/* Slide Subheading */}
                      <h3>Savor the Magic of Freshly Baked Happiness</h3> {/* Slide Heading */}
                      <p>Experience the warmth and joy of our oven-fresh creations, crafted with love to fill your days with delicious memories.</p> {/* Slide Description */}
                      {/* <a href="pages/Pages/Menu.html" className="btn">our menu</a> Menu Button */}
                      <Button label="our menu" href="pages/Pages/Menu.html" className={"btn"}/>
                    </div>
                  </div>
                </div>
          
                {/* Home Slide-3 */}
                <div className="swiper-slide home-item">
                  <img src={home3} alt="Home-Image" /> {/* Slide Image */}
                  <div className="content">
                    <div className="text">
                      <h5><span></span>welcome to sweet delight<span></span></h5> {/* Slide Subheading */}
                      <h3>Your Journey to Irresistible Treats Begins Here</h3> {/* Slide Heading */}
                      <p>Embark on a delectable adventure through our bakery, where irresistible treats and unforgettable moments are waiting just for you.</p> {/* Slide Description */}
                      {/* <a href="pages/Pages/Menu.html" className="btn">our menu</a> Menu Button */}
                      <Button label="our menu" href="pages/Pages/Menu.html" className={"btn"}/>
                    </div>
                  </div>
                </div>
          
              </div>
          
              {/* Home Slider Pagination */}
              <div className="swiper-pagination swiper-pagination1"></div>
          
              {/* Home Slider Navigation arrows */}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </section>
    </>
  );
};

export default HomeSlider;
