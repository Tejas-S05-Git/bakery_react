import React from 'react'
import logo from "../assets/images/Logo/Logo.png"

import product1 from "../assets/images/Shop/Products/Product-1.jpg"
import product2 from "../assets/images/Shop/Products/Product-2.jpg"
import product3 from "../assets/images/Shop/Products/Product-3.jpg"

import { Link } from 'react-router-dom'


const WishList = () => {
  return (
    <div>
         {/* scroll to top */}
      <a href="#" className="scroll-top">
        <i className="fas fa-angle-up"></i>
      </a>
      
      {/* header */}
      <header className="header">
        <div className="header-1">
          <ul className="header-contacts">
            <li><i className="fas fa-phone"></i><span>+111-222-333</span></li>
            <li><i className="fas fa-envelope"></i><span className="gmail">abc@gmail.com</span></li>
          </ul>
    
          <ul className="social-contacts">
            <li><a href="#" className="fab fa-facebook-f"></a></li>
            <li><a href="#" className="fab fa-twitter"></a></li>
            <li><a href="#" className="fab fa-instagram"></a></li>
            <li><a href="#" className="fab fa-linkedin"></a></li>
          </ul>
        </div>
    
        <div className="header-2">
          <div id="menu-btn" className="icon fa-solid fa-bars-staggered"></div>
    
          <a className="logo" href="index.html">
            <img src={logo} alt="logo" />
            <div className="logo-name">
              <h3>sweet delight</h3>
            </div>
          </a>
    
          <div className="container">
            <nav className="navbar">
              <Link className="nav-btn" to="/"> home </Link>
    
              <div className="dropdown-menu">
                <button className="nav-btn">about <i className="fas fa-angle-down"></i></button>
                <div className="dropdown-content">
                  <a href="pages/About/About.html">about us</a>
                  <a href="pages/About/Team.html">team</a>
                  <a href="pages/About/Team-Single.html">team single</a>
                  <a href="pages/About/Testimonials.html">testimonials</a>
                  <a href="pages/About/Faqs.html">faqs</a>
                </div>
              </div>
    
              <div className="dropdown-menu">
                <button className="nav-btn">Pages <i className="fas fa-angle-down"></i></button>
                <div className="dropdown-content">
                  <a href="pages/Pages/Menu.html">Menu</a>
                  <a href="pages/Pages/Services.html">Services</a>
                  <a href="pages/Pages/Service-Single.html">Service Single</a>
                  <a href="pages/Pages/Pricing.html">Pricing</a>
                  <a href="pages/Pages/Login.html">login</a>
                  <a href="pages/Pages/Register.html">register</a>
                  <a href="pages/Pages/Reset-Password.html">forgot Password</a>
                </div>
              </div>
    
              <div className="dropdown-menu">
                <button className="nav-btn">Portfolio <i className="fas fa-angle-down"></i></button>
                <div className="dropdown-content">
                  <a href="pages/Portfolio/Portfolio.html">Portfolio</a>
                  <a href="pages/Portfolio/Portfolio-Single.html">Portfolio Single</a>
                </div>
              </div>
    
              <div className="dropdown-menu">
                <button className="nav-btn">blog <i className="fas fa-angle-down"></i></button>
                <div className="dropdown-content">
                  <a href="pages/Blog/Blog-Grid.html">blogs grid</a>
                  <a href="pages/Blog/Blog-List.html">blogs list</a>
                  <a href="pages/Blog/Blog-Single.html">blog Single</a>
                </div>
              </div>
    
              <div className="dropdown-menu">
                <button className="nav-btn">shop <i className="fas fa-angle-down"></i></button>
                <div className="dropdown-content">
                  <Link to="/Shop-Grid">shop grid</Link>
                 <Link to="/Shop-List">shop list</Link>
                 <Link to="/Product-Single">product Single</Link>
                  <a href="pages/Shop/Wishlist.html">wishlist</a>
                  <a href="pages/Shop/Cart.html">cart</a>
                  <a href="pages/Shop/Checkout.html">checkout</a>
                </div>
              </div>
    
              <a className="nav-btn" href="pages/Contact/Contact.html">contact</a>
            </nav>
    
            <div className="icon-container">
              <div id="search-btn" className="icon fa-solid fa-magnifying-glass"></div>
              <a href="pages/Pages/Login.html" id="login" className="icon fas fa-user"></a>
              <a href="pages/Shop/Cart.html" id="cart">
                <i className="icon fas fa-shopping-cart"></i>
                <span className="badge">5</span>
              </a>
            </div>
    
            <form className="search-container">
              <input type="search" id="search-bar" placeholder="search here" required />
              <button type="submit"><i className="fas fa-search"></i></button>
            </form>
          </div>
        </div>
    
        <div className="mobile-menu">
          <nav className="mobile-navbar">
            <div className="nav-link">
              <div className="main-nav-link">
                <a className="nav-btn" href="index.html">home</a>
              </div>
            </div>
    
            <div className="nav-link">
              <div className="main-nav-link">
                <div className="nav-btn">about</div> <i className="fas fa-plus"></i>
              </div>
              <div className="sub-nav-link">
                <a href="pages/About/About.html">about us</a>
                <a href="pages/About/Team.html">team</a>
                <a href="pages/About/Team-Single.html">team single</a>
                <a href="pages/About/Testimonials.html">testimonials</a>
                <a href="pages/About/Faqs.html">faqs</a>
              </div>
            </div>
    
            <div className="nav-link">
              <div className="main-nav-link">
                <div className="nav-btn">pages</div> <i className="fas fa-plus"></i>
              </div>
              <div className="sub-nav-link">
                <a href="pages/Pages/Menu.html">Menu</a>
                <a href="pages/Pages/Services.html">Services</a>
                <a href="pages/Pages/Service-Single.html">Service Single</a>
                <a href="pages/Pages/Pricing.html">Pricing</a>
                <a href="pages/Pages/Login.html">login</a>
                <a href="pages/Pages/Register.html">register</a>
                <a href="pages/Pages/Reset-Password.html">forgot Password</a>
              </div>
            </div>
    
            <div className="nav-link">
              <div className="main-nav-link">
                <div className="nav-btn">Portfolio</div> <i className="fas fa-plus"></i>
              </div>
              <div className="sub-nav-link">
                <a href="pages/Portfolio/Portfolio.html">Portfolio</a>
                <a href="pages/Portfolio/Portfolio-Single.html">Portfolio Single</a>
              </div>
            </div>
    
            <div className="nav-link">
              <div className="main-nav-link">
                <div className="nav-btn">blog</div> <i className="fas fa-plus"></i>
              </div>
              <div className="sub-nav-link">
                <a href="pages/Blog/Blog-Grid.html">blogs grid</a>
                <a href="pages/Blog/Blog-List.html">blogs list</a>
                <a href="pages/Blog/Blog-Single.html">blog Single</a>
              </div>
            </div>
    
            <div className="nav-link">
              <div className="main-nav-link">
                <div className="nav-btn">shop</div> <i className="fas fa-plus"></i>
              </div>
              <div className="sub-nav-link">
                <a href="pages/Shop/Shop-Grid.html">shop grid</a>
                <a href="pages/Shop/Shop-List.html">shop list</a>
                <a href="pages/Shop/Product-Single.html">product Single</a>
                <a href="pages/Shop/Wishlist.html">wishlist</a>
                <a href="pages/Shop/Cart.html">cart</a>
                <a href="pages/Shop/Checkout.html">checkout</a>
              </div>
            </div>
    
            <div className="nav-link">
              <div className="main-nav-link">
                <a className="nav-btn" href="pages/Contact/Contact.html">contact</a>
              </div>
            </div>
          </nav>
        </div>
      </header>



      {/* ==================== Page-Title (Start) ==================== */}
      <div className="page-title">
        <div className="title">
          <h2>wishlist</h2>
        </div>
        <div className="link">
          <a href="../../index.html"> Home</a>
          <i className="fa-solid fa-angles-right"></i>
          <span className="page">wishlist</span>
        </div>
      </div>
      {/* ==================== Page-Title (End) ==================== */}

      {/* ==================== Wishlist Area (Start) ==================== */}
      {/* Wishlist Section */}
      <section className="wishlist">
        <div className="wishlist-container">
          <div className="container">
            {/* Wishlist Title */}
            <div className="shoplist-title">
              <h3>product</h3>
              <h3>name</h3>
              <h3>price</h3>
              <h3>status</h3>
              <h3>activity</h3>
            </div>

            {/* Wishlist Items */}
            <div className="wish-list">
              {/* Wishlist Item 1 */}
              <div className="wishlist-item">
                <div className="box">
                  <img src={product1} alt="wishlist image" />
                </div>
                {/* Product Image */}
                <div className="name box">Cupcake</div>
                {/* Product Name */}
                <div className="price box">$50.00</div>
                {/* Product Price */}
                <div className="status in box">inStock</div>
                {/* Product Status (In Stock) */}
                {/* Wishlist Item Actions (Remove and Add to Cart) */}
                <div className="action box">
                  <a href="#" className="icon fas fa-trash-alt"></a>
                  <a href="Cart.html" className="icon fas fa-shopping-cart"></a>
                </div>
              </div>

              {/* Wishlist Item 2 */}
              <div className="wishlist-item">
                <div className="box">
                  <img src={product2} alt="wishlist image" />
                </div>
                {/* Product Image */}
                <div className="name box">Cappuccino</div>
                {/* Product Name */}
                <div className="price box">$100.00</div>
                {/* Product Price */}
                <div className="status out box">outOfStock</div>
                {/* Product Status (In Stock) */}
                {/* Wishlist Item Actions (Remove and Add to Cart) */}
                <div className="action box">
                  <a href="#" className="icon fas fa-trash-alt"></a>
                  <a href="Cart.html" className="icon fas fa-shopping-cart"></a>
                </div>
              </div>

              {/* Wishlist Item 3 */}
              <div className="wishlist-item">
                <div className="box">
                  <img src={product3} alt="wishlist image" />
                </div>
                {/* Product Image */}
                <div className="name box">Doughnut</div>
                {/* Product Name */}
                <div className="price box">$50.00</div>
                {/* Product Price */}
                <div className="status in box">inStock</div>
                {/* Product Status (In Stock) */}
                {/* Wishlist Item Actions (Remove and Add to Cart) */}
                <div className="action box">
                  <a href="#" className="icon fas fa-trash-alt"></a>
                  <a href="Cart.html" className="icon fas fa-shopping-cart"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== Wishlist Area (End) ==================== */}

 









      {/* ==================== Footer Area (Start) ==================== */}
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
          {/* ==================== Footer Area (End) ==================== */}
          
          
    </div>
  )
}

export default WishList