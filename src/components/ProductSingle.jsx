import React from 'react'
import logo from "../assets/images/Logo/Logo.png"
import product2 from "../assets/images/Shop/Products/Product-2.jpg"
import product3 from "../assets/images/Shop/Products/Product-3.jpg"
import product4 from "../assets/images/Shop/Products/Product-4.jpg"
import product5 from "../assets/images/Shop/Products/Product-5.jpg"
import singe1 from "../assets/images/Shop/Product-Gallery/1.jpg"
import singe2 from "../assets/images/Shop/Product-Gallery/2.jpg"
import singe3 from "../assets/images/Shop/Product-Gallery/3.jpg"
import singe4 from "../assets/images/Shop/Product-Gallery/4.jpg"

import pic1 from "../assets/images/Shop/Reviews/Pic-1.jpg"
import pic2 from "../assets/images/Shop/Reviews/Pic-2.jpg"
import { Link } from 'react-router-dom'

const ProductSingle = () => {
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
                  <a href="pages/Shop/Product-Single.html">product Single</a>
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
          <h2>Product Single</h2>
        </div> 

        <div className="link">
          <a href="../../index.html"> Home</a>
          <i className="fa-solid fa-angles-right"></i>
          <span className="page">Product Single</span>
        </div>
      </div>
      {/* ==================== Page-Title (End) ==================== */}
      
      {/* ==================== Product Single Area (Start) ==================== */}
      <section className="product-single">
          
        {/* ========== Product-Description Area (Start) ========== */}
        <div className="product-des">
          <div className="box-container">
            {/* Product Image */}
            <div className="image">
              <div className="image-container">
                {/* Main product image */}
                <div className="main">
                  <img src={singe1}alt="Product-Image" />
                </div>
          
                {/* Product Image Gallery Buttons */}
                <div className="change-btns">
                  <img className="active" src={singe1} alt="Product-Gallery-Image-1" />
                  <img src={singe2} alt="Product-Gallery-Image-2" />
                  <img src={singe3} alt="Product-Gallery-Image-3" />
                  <img src={singe4} alt="Product-Gallery-Image-4" />
                </div>
              </div>
            </div>
          
            {/* Product Information */}
            <div className="content">
              <div className="text">
                <div className="introduction">
                  <h3>pancake</h3>
                  <div className="price">$40.00/- <span>$50.00</span></div>
                  <div className="intro">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i> 
                      <i className="far fa-star"></i>
                    </div>
                    <span>4.5 (10)</span>
                  </div>
                </div>
          
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque tempore eaque nesciunt neque consectetur, qui illo. Fugit numquam nesciunt, repudiandae corrupti, pariatur obcaecati perspiciatis quam eius magni officiis, delectus aut? Lorem ipsum dolor sit.</p>
          
                {/* Quantity Box */}
                <div className="box">
                  <div className='qty'>
                    <h4>Qty:</h4>
                    <div className="quantity buttons_added">
                      <input type="button" value="-" className="minus" />
                      <input type="number" step="1" min="1" max="100" name="quantity" value="1" title="Qty" className="input-text qty text" />
                      <input type="button" value="+" className="plus" />
                    </div>
                  </div>

                  <a href="Cart.html" className="btn">add to cart</a>
                </div>

                {/* Product Categories */}
                <div className='categories'> 
                  <h4>Categories:</h4>
                  <a href="#">cake</a> 
                </div>
          
                {/* Product Tags */}
                <div className='tags'>
                  <h4>Tags:</h4>
                  <a href="#">sweet</a>
                  <a href="#">review</a>
                  <a href="#">cookies</a>
                </div> 
              </div>
            </div>
          </div>

          <div className="product-info tab-info">
            {/* Tab Buttons */}
            <div className="tab-buttons">
              <button type="button" className="button active" data-target="#description">description</button>
              <button type="button" className="button" data-target="#additional">additional information</button>
              <button type="button" className="button" data-target="#reviews">reviews (2)</button>
            </div>
          
            {/* Tab Sections */}
            <div className="tab-sections">
              {/* Description Tab Section */}
              <div className="tab-section active" id="description">
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, culpa doloremque suscipit tempore id a tenetur adipisci aliquid pariatur dolores cumque voluptas.
                    Laborum modi sapiente aliquid officia blanditiis cum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio repellendus nobis quaerat
                    architecto ullam molestiae provident dolor saepe consequatur, nihil quis eos commodi, ab eius, laborum consequuntur laudantium! Odit.
                  </p>
                </div>
              </div>
          
              {/* Additional Information Tab Section */}
              <div className="tab-section" id="additional">
                <div className="additional-info">
                  <div className="item"><h3>Brand:</h3><span>TastyBites</span></div>
                  <div className="item"><h3>Products:</h3><span>Cakes, Pastries, Bread</span></div>
                  <div className="item"><h3>Specialties:</h3><span>Custom Cakes, Freshly Baked Treats, Artisan Breads</span></div>
                  <div className="item"><h3>Options:</h3><span>Gluten-Free, Vegan, Savory Delights</span></div>
                </div>
              </div>
          
              {/* Reviews Tab Section */}
              <div className="tab-section" id="reviews">
                <div className="reviews">
                  <h2>2 reviews</h2>
          
                  {/* Review Comment 1 */}
                  <div className="comment">
                    <div className="comment-image">
                      <img src={pic1} alt="comment-author-Pic" />
                    </div>
                    <div className="comment-content">
                      <h3>Daniel Wilson</h3>
                      <h6>aug 21, 2023</h6>
                      <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur.</p>
                    </div>
                  </div>
          
                  {/* Review Comment 2 */}
                  <div className="comment">
                    <div className="comment-image">
                      <img src={pic2} alt="comment-author-Pic" />
                    </div>
                    <div className="comment-content">
                      <h3>Karen Smith</h3>
                      <h6>aug 25, 2023</h6>
                      <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur.</p>
                    </div>
                  </div>
          
                  {/* Leave a Reply Section */}
                  <div className="leave-reply">
                    <form className="form" action="https://sweetdelight-html.asdesignsgalaxy.com/pages/Shop/comment.php">
                      <h2>leave a comment</h2>
          
                      <div className="input-box">
                        <input type="text" name="name" className="box" id="name" placeholder="name" required />
                        <input type="email" name="email" className="box" id="email" placeholder="email" required />
                      </div>
          
                      <textarea cols="30" rows="10" name="comment" className="box" id="comment" placeholder="comment"></textarea>
          
                      <input type="submit" value="submit" className="btn" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        {/* ========== Product-Description Area (End) ========== */}

        {/* ========== Related Products Area (Start) ========== */}
        <div className="related-items">
          <div className="sidebar-heading">
            <h2>Related Products</h2>
          </div>
        
          {/* Related Products */}
          <div className="box-container">
            {/* Product-2 */}
            <div className="product-item">
              <div className="image">
                <img src={product2} alt="Product-Image" />
                <div className="icon-box">
                  <a href="Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                  <a href="Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                  <a href="Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
              </div>
              <div className="content">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <a href="Product-Single.html"><h3>smoothie</h3></a>
                <div className="price">$40.00 <span>$50.00</span></div>
              </div>
            </div>
        
            {/* Product-3 */}
            <div className="product-item">
              <div className="image">
                <img src={product3}alt="Product-Image" />
                <div className="icon-box">
                  <a href="Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                  <a href="Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                  <a href="Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
              </div>
              <div className="content">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <a href="Product-Single.html"><h3>sandwich</h3></a>
                <div className="price">$40.00 <span>$50.00</span></div>
              </div>
            </div>
        
            {/* Product-4 */}
            <div className="product-item">
              <div className="image">
                <img src={product4}alt="Product-Image" />
                <div className="icon-box">
                  <a href="Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                  <a href="Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                  <a href="Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
              </div>
              <div className="content">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <a href="Product-Single.html"><h3>bread</h3></a>
                <div className="price">$40.00 <span>$50.00</span></div>
              </div>
            </div>
        
            {/* Product-5 */}
            <div className="product-item">
              <div className="image">
                <img src={product5} alt="Product-Image" />
                <div className="icon-box">
                  <a href="Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                  <a href="Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                  <a href="Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
              </div>
              <div className="content">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <a href="Product-Single.html"><h3>macaroon</h3></a>
                <div className="price">$40.00 <span>$50.00</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== Related Products Area (End) ========== */}  
      </section>
      {/* ==================== Product Single Area (End) ==================== */}
      







       
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

export default ProductSingle