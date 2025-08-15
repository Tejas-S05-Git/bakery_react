import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="footer">
        
          <div className="box-container">
        
            {/* == StartUp Description & Social Account Links == */}
            <div className="footer-item">
              
              {/* Logo */}
              <a className="logo" href="index.html">
                <img src={logo} alt="logo" />
                <div className="logo-name">
                  <h3>Sweet Delight</h3>
                </div>
              </a>
        
              {/* Description */}
              <p>
                Indulge in the Bakery Experience of Tomorrow! From Customized Creations to Flavorful Delights, 
                We Redefine Sweet Possibilities. Savoring Moments Today with Innovative Baking Excellence.
              </p>
        
              {/* Social Account Links */}
              <div className="social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
        
            {/* == Useful Links == */}
            <div className="footer-item">
              <h2>useful links</h2>
              <div className="info links">
                <p><i className="fas fa-caret-right"></i><a href="pages/About/About.html">about</a></p>
                <p><i className="fas fa-caret-right"></i><a href="pages/Pages/Service-Single.html">services</a></p>
                <p><i className="fas fa-caret-right"></i><a href="pages/Portfolio/Portfolio.html">portfolio</a></p>
                <p><i className="fas fa-caret-right"></i><a href="pages/Blog/Blog-Grid.html">blogs</a></p>
                <p><i className="fas fa-caret-right"></i><a href="pages/Shop/Shop-Grid.html">shop</a></p>
                <p><i className="fas fa-caret-right"></i><a href="pages/Contact/Contact.html">contact</a></p>
              </div>
            </div> 
        
            {/* == Business Timing == */}
            <div className="footer-item">
              <h2>opening hours</h2>
              <div className="timings">
                <div className="timing-row">
                  <p className="days">Monday - Friday</p>
                  <p>08:00 am - 08:30 pm</p>
                </div>
                <div className="timing-row">
                  <p className="days">saturday - sunday</p>
                  <p>10:00 am - 10:30 pm</p>
                </div>
              </div>
            </div> 
        
            {/* == Contact Information == */}
            <div className="footer-item">
              <h2>contact info</h2> 
              <div className="info connect">
                <p><i className="fas fa-phone"></i><span>+111-222-333</span></p>
                <p><i className="fas fa-phone"></i><span>+123-456-789</span></p>
                <p><i className="fas fa-envelope"></i><span className="gmail">abc@gmail.com</span></p>
                <p><i className="fas fa-envelope"></i><span className="gmail">xyz@gmail.com</span></p>
                <p><i className="fas fa-map"></i><span>karachi, pakistan</span></p>
              </div>
            </div>
        
          </div>
        
          {/* == Designer's name and copyright == */}
          <div className="content">
            <p>designed by <span>AS_Designs</span> | all rights reserved</p>
          </div>
        
        </footer>
    </>
  )
}

export default Footer