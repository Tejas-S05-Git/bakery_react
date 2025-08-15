import React from 'react'
import pic1 from "../../assets/images/Testimonials/Pic-1.jpg"
import pic2 from "../../assets/images/Testimonials/Pic-2.jpg"
import pic3 from "../../assets/images/Testimonials/Pic-3.jpg"
const Testimonials = () => {
  return (
    <>
    <section className="testimonial-bg linear-bg">
          
          {/* Section Heading */}
          <div className="heading">
            <span>what our client's say</span>
            <h2>Our Testimonials</h2>
          </div>
        
          {/* Testimonial Slider */}
          <div className="swiper-container testimonial-slider">
            <div className="swiper-wrapper">
        
              {/* Testimonial Slide 1 */}
              <div className="swiper-slide testi-item">
                <div className="content">
                  <i className="fa-solid fa-quote-left quote-start"></i> {/* Quote Icon */}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in ea expedita libero error aut itaque quia praesentium? Consectetur nam, maxime atque sit eius corporis voluptate? Exercitationem dolorem consequatur voluptatibus?
                  </p> {/* Testimonial Comment */}
                  
                  {/* Testimonial Rating */}
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
        
                {/* Testimonial Author Info */}
                <div className="intro">
                  <img src={pic1} alt="Testimonial-Pic" /> {/* Testimonial Author Image */}
                  <h3>John Smith</h3> {/* Testimonial Author Name */}
                  <h5>baker</h5> {/* Testimonial Author Designation */}
                </div>
              </div>
        
              {/* Testimonial Slide 2 */}
              <div className="swiper-slide testi-item">
                <div className="content">
                  <i className="fa-solid fa-quote-left quote-start"></i> {/* Quote Icon */}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in ea expedita libero error aut itaque quia praesentium? Consectetur nam, maxime atque sit eius corporis voluptate? Exercitationem dolorem consequatur voluptatibus?
                  </p> {/* Testimonial Comment */}
                  
                  {/* Testimonial Rating */}
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
        
                {/* Testimonial Author Info */}
                <div className="intro">
                  <img src={pic2} alt="Testimonial-Pic" /> {/* Testimonial Author Image */}
                  <h3>Linda Johnson</h3> {/* Testimonial Author Name */}
                  <h5>customer</h5> {/* Testimonial Author Designation */}
                </div>
              </div>
        
              {/* Testimonial Slide 3 */}
              <div className="swiper-slide testi-item">
                <div className="content">
                  <i className="fa-solid fa-quote-left quote-start"></i> {/* Quote Icon */}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in ea expedita libero error aut itaque quia praesentium? Consectetur nam, maxime atque sit eius corporis voluptate? Exercitationem dolorem consequatur voluptatibus?
                  </p> {/* Testimonial Comment */}
                  
                  {/* Testimonial Rating */}
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
        
                {/* Testimonial Author Info */}
                <div className="intro">
                  <img src={pic3} alt="Testimonial-Pic" /> {/* Testimonial Author Image */}
                  <h3>David Wilson</h3> {/* Testimonial Author Name */}
                  <h5>baker</h5> {/* Testimonial Author Designation */}
                </div>
              </div>
        
            </div>
        
            {/* Testimonial Slider Pagination */}
            <div className="swiper-pagination swiper-pagination3"></div>
        
            {/* Testimonial Slider Navigation Buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        
          </div>
        </section>
    </>
  )
}

export default Testimonials