import React from 'react'
import logo from "../assets/images/Logo/Logo.png"
import product1 from "../assets/images/Shop/Products/Product-1.jpg"
import product2 from "../assets/images/Shop/Products/Product-2.jpg"
import product3 from "../assets/images/Shop/Products/Product-3.jpg"
import product4 from "../assets/images/Shop/Products/Product-4.jpg"
import product5 from "../assets/images/Shop/Products/Product-5.jpg"
import product6 from "../assets/images/Shop/Products/Product-6.jpg"
import product7 from "../assets/images/Shop/Products/Product-7.jpg"
import product8 from "../assets/images/Shop/Products/Product-8.jpg"
import product9 from "../assets/images/Shop/Products/Product-9.jpg"

import { Link } from 'react-router-dom'
const ShopGrid = () => {
  return (
    <div>
       {/* ==================== Scroll-Top Area (Start) ==================== */}
      <a href="#" className="scroll-top">
        <i className="fas fa-angle-up"></i>
      </a>
      {/* ==================== Scroll-Top Area (End) ==================== */}

      {/* ==================== Header Area (Start) ==================== */}
      <header className="header">
        {/* ===== Header-1 Area (Start) ===== */}
        <div className="header-1">
          {/* == Contacts == */}
          <ul className="header-contacts">
            <li><i className="fas fa-phone"></i><span>+111-222-333</span></li>
            <li><i className="fas fa-envelope"></i><span className="gmail">abc@gmail.com</span></li>
          </ul>

          {/* == Social == */}
          <ul className="social-contacts">
            <li><a href="#" className="fab fa-facebook-f"></a></li>
            <li><a href="#" className="fab fa-twitter"></a></li>
            <li><a href="#" className="fab fa-instagram"></a></li>
            <li><a href="#" className="fab fa-linkedin"></a></li>
          </ul>
        </div>
        {/* ===== Header-1 Area (End) ===== */}

        {/* ===== Header-2 Area (Start) ===== */}
        <div className="header-2">
          <div id="menu-btn" className="icon fa-solid fa-bars-staggered"></div>

          {/* == Logo == */}
          <a className="logo" href="../../index.html">
            <img src={logo} alt="logo" />
            <div className="logo-name">
              <h3>Sweet Delight</h3>
            </div>
          </a>

          <div className="container">
            {/* == Navbar == */}
            <nav className="navbar">
            <Link className="nav-btn" to="/"> home </Link>


              <div className="dropdown-menu">
                <button className="nav-btn">about <i className="fas fa-angle-down"></i> </button>
                <div className="dropdown-content">
                  <a href="../About/About.html">about us</a>
                  <a href="../About/Team.html">team</a>
                  <a href="../About/Team-Single.html">team single</a>
                  <a href="../About/Testimonials.html">testimonials</a>
                  <a href="../About/Faqs.html">faqs</a>
                </div>
              </div>

              <div className="dropdown-menu">
                <button className="nav-btn">Pages <i className="fas fa-angle-down"></i> </button>
                <div className="dropdown-content">
                  <a href="../Pages/Menu.html">Menu</a>
                  <a href="../Pages/Services.html">Services</a>
                  <a href="../Pages/Service-Single.html">Services single</a>
                  <a href="../Pages/Pricing.html">Pricing</a>
                  <a href="../Pages/Login.html">login</a>
                  <a href="../Pages/Register.html">register</a>
                  <a href="../Pages/Reset-Password.html">forgot Password</a>
                </div>
              </div>

              <div className="dropdown-menu">
                <button className="nav-btn">Portfolio <i className="fas fa-angle-down"></i> </button>
                <div className="dropdown-content">
                  <a href="../Portfolio/Portfolio.html">Portfolio</a>
                  <a href="../Portfolio/Portfolio-Single.html">Portfolio Single</a>
                </div>
              </div>

              <div className="dropdown-menu">
                <button className="nav-btn">blog <i className="fas fa-angle-down"></i> </button>
                <div className="dropdown-content">
                  <a href="../Blog/Blog-Grid.html">blogs grid</a>
                  <a href="../Blog/Blog-List.html">blogs list</a>
                  <a href="../Blog/Blog-Single.html">blog Single</a>
                </div>
              </div>

              <div className="dropdown-menu">
                <button className="nav-btn">shop <i className="fas fa-angle-down"></i> </button>
                <div className="dropdown-content">
                  <Link to={"/ShopGrid"}>shop grid</Link>
                  <a href="Shop-List.html">shop list</a>
                  <a href="Product-Single.html">product Single</a>
                  <a href="Wishlist.html">wishlist</a>
                  <a href="Cart.html">cart</a>
                  <a href="Checkout.html">checkout</a>
                </div>
              </div>

              <a className="nav-btn" href="../Contact/Contact.html">contact</a>
            </nav>

            {/* == Icon Container == */}
            <div className="icon-container">
              <div id="search-btn" className="icon fa-solid fa-magnifying-glass"></div>
              <a href="../Pages/Login.html" id="login" className="icon fas fa-user"></a>
              <a href="Cart.html" id="cart">
                <i className="icon fas fa-shopping-cart"></i>
                <span className="badge">5</span>
              </a>
            </div>

            {/* == Search Container == */}
            <form className="search-container">
              <input type="search" id="search-bar" placeholder="search here" required />
              <button type="submit"><i className="fas fa-search"></i></button>
            </form>
          </div>
        </div>
        {/* ===== Header-2 Area (End) ===== */}

        {/* ===== Mobile Menu Area (Start) ===== */}
        <div className="mobile-menu">
          <nav className="mobile-navbar">
            <div className="nav-link">
              <div className="main-nav-link"> <a className="nav-btn" href="../../index.html">home</a> </div>
            </div>

            <div className="nav-link">
              <div className="main-nav-link"> <div className="nav-btn">about</div> <i className="fas fa-plus"></i> </div>
              <div className="sub-nav-link">
                <a href="../About/About.html">about us</a>
                <a href="../About/Team.html">team</a>
                <a href="../About/Team-Single.html">team single</a>
                <a href="../About/Testimonials.html">testimonials</a>
                <a href="../About/Faqs.html">faqs</a>
              </div>
            </div>

            <div className="nav-link">
              <div className="main-nav-link"> <div className="nav-btn">pages</div> <i className="fas fa-plus"></i> </div>
              <div className="sub-nav-link">
                <a href="../Pages/Menu.html">Menu</a>
                <a href="../Pages/Services.html">Services</a>
                <a href="../Pages/Service-Single.html">Services single</a>
                <a href="../Pages/Pricing.html">Pricing</a>
                <a href="../Pages/Login.html">login</a>
                <a href="../Pages/Register.html">register</a>
                <a href="../Pages/Reset-Password.html">forgot Password</a>
              </div>
            </div>

            <div className="nav-link">
              <div className="main-nav-link"> <div className="nav-btn">Portfolio</div> <i className="fas fa-plus"></i> </div>
              <div className="sub-nav-link">
                <a href="../Portfolio/Portfolio.html">Portfolio</a>
                <a href="../Portfolio/Portfolio-Single.html">Portfolio Single</a>
              </div>
            </div>

            <div className="nav-link">
              <div className="main-nav-link"> <div className="nav-btn">blog</div> <i className="fas fa-plus"></i> </div>
              <div className="sub-nav-link">
                <a href="../Blog/Blog-Grid.html">blogs grid</a>
                <a href="../Blog/Blog-List.html">blogs list</a>
                <a href="../Blog/Blog-Single.html">blog Single</a>
              </div>
            </div>

            <div className="nav-link">
              <div className="main-nav-link"> <div className="nav-btn">shop</div> <i className="fas fa-plus"></i> </div>
              <div className="sub-nav-link">
                <a href="Shop-Grid.html">shop grid</a>
                <a href="Shop-List.html">shop list</a>
                <a href="Product-Single.html">product Single</a>
                <a href="Wishlist.html">wishlist</a>
                <a href="Cart.html">cart</a>
                <a href="Checkout.html">checkout</a>
              </div>
            </div>

            <div className="nav-link">
              <div className="main-nav-link"> <a className="nav-btn" href="../Contact/Contact.html">contact</a> </div>
            </div>
          </nav>
        </div>
        {/* ===== Mobile Menu Area (End) ===== */}
      </header>
      {/* ==================== Header Area (End) ==================== */}

      {/* ==================== Page-Title (Start) ==================== */}
      <div className="page-title">
        <div className="title">
          <h2>Shop Grid</h2>
        </div>

        <div className="link">
          <a href="../../index.html"> Home</a>
          <i className="fa-solid fa-angles-right"></i>
          <span className="page">Shop Grid</span>
        </div>
      </div>
      {/* ==================== Page-Title (End) ==================== */}

      {/* ==================== Shop-Grid Area (Start) ==================== */}
      <section className="shop">
        {/* ========== Shop Sidebar Area (Start) ========== */}
        <div className="sidebar">
          {/* ===== Category Area (Start) ===== */}
          <div className="category sidebar-item">
            <div className="sidebar-heading">
              <h2>categories</h2>
            </div>

            {/* Blog Categories */}
            <div className="box-container">
              <a href="#" className="item"> <span><i className="fas fa-caret-right"></i>All Treats</span><p>(30)</p></a>
              <a href="#" className="item"> <span><i className="fas fa-caret-right"></i>Cakes & Pastries</span><p>(10)</p></a>
              <a href="#" className="item"> <span><i className="fas fa-caret-right"></i>Cookies & Biscuits</span><p>(05)</p></a>
              <a href="#" className="item"> <span><i className="fas fa-caret-right"></i>Breads & Rolls</span><p>(06)</p></a>
              <a href="#" className="item"> <span><i className="fas fa-caret-right"></i>Special Occasions</span><p>(05)</p></a>
              <a href="#" className="item"> <span><i className="fas fa-caret-right"></i>Seasonal Delights</span><p>(04)</p></a>
            </div>
          </div>
          {/* ===== Category Area (End) ===== */}

          {/* ===== Filter Products (Start) ===== */}
          <div className="filter sidebar-item">
            {/* Sidebar Heading: Filter Products */}
            <div className="sidebar-heading">
              <h2>Product Filter</h2>
            </div>

            <div className="box-container">
              {/* Slider */}
              <div className="slider">
                <div className="progress"></div>
              </div>
              {/* Range Input */}
              <div className="range-input">
                <input type="range" className="range-min" min="0" max="1000" value="250" step="10" />
                <input type="range" className="range-max" min="0" max="1000" value="750" step="10" />
              </div>
              {/* Price Wrap */}
              <div className="price-wrap">
                {/* Price Input */}
                <div className="price-input">
                  {/* Minimum Price Field */}
                  <div className="field">
                    <span>$</span>
                    <input type="number" className="input-min" value="250" />
                  </div>
                  {/* Separator */}
                  <div className="separator">-</div>
                  {/* Maximum Price Field */}
                  <div className="field">
                    <span>$</span>
                    <input type="number" className="input-max" value="750" />
                  </div>
                </div>
                {/* Filter Button */}
                <span className="btn">FILTER</span>
              </div>
            </div>
          </div>
          {/* ===== Filter Products (End) ===== */}

          {/* ===== Popular Products Area (Start) ===== */}
          <div className="popular-products sidebar-item">
            {/* Sidebar Heading: Popular Products */}
            <div className="sidebar-heading">
              <h2>popular products</h2>
            </div>

            {/* Popular Products */}
            <div className="box-container">
              {/* Popular Product 1 */}
              <div className="post-item">
                <img src={product1} alt="Popular-Product-Image" />
                <div className="content">
                  <a href="Product-Single.html">pancake</a>
                  <div className="price"><p>$40.00 <span>$50.00</span></p> </div>
                </div>
              </div>

              {/* Popular Product 2 */}
              <div className="post-item">
                <img src={product2}alt="Popular-Product-Image" />
                <div className="content">
                  <a href="Product-Single.html">smoothie</a>
                  <div className="price"><p>$40.00 <span>$50.00</span></p> </div>
                </div>
              </div>

              {/* Popular Product 3 */}
              <div className="post-item">
                <img src={product3} alt="Popular-Product-Image" />
                <div className="content">
                  <a href="Product-Single.html">bread</a>
                  <div className="price"><p>$40.00 <span>$50.00</span></p> </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===== Popular Products Area (End) ===== */}
        </div>
        {/* ========== Shop Sidebar Area (End) ========== */}

        {/* ========== Shop Container (Start) ========== */}
        <div className="shop-container">
          {/* ===== Shop Header (Start) ===== */}
          <div className="intro">
            {/* Showing Products Count */}
            <div className="showing">showing 9 of 30 products</div>

            {/* Display Styles */}
            <div className="styles">
              <a href="Shop-Grid.html" className="fas fa-th"></a>
              <a href="Shop-List.html" className="fas fa-list"></a>
            </div>

            {/* Sorting Type */}
            <div className="sorting-type">
              {/* Sorting Label */}
              <label htmlFor="sort">sort by:</label>

              {/* Sorting Options */}
              <select name="sort" id="sort">
                <option value="default">default</option>
                <option value="name, A to Z">name, A to Z</option>
                <option value="mname, Z to A">name, Z to A</option>
                <option value="price, low to high">price, low to high</option>
                <option value="price, high to low">price, high to low</option>
              </select>
            </div>
          </div>
          {/* ===== Shop Header (End) ===== */}

          {/* ===== Products (Start) ===== */}
          <div className="product-container grid">
            {/* Product-1 */}
            <div className="product-item">
              <div className="image">
                <img src={product1} alt="Product-Image" />
                <div className="icon-box">
                  <a href="Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                  <a href="Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                  <a href="Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
              </div>
              <div className="content">
                {/* Product Rating */}
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <a href="Product-Single.html"><h3>pancake</h3></a>
                <div className="price">$7.00 <span>$10.00</span></div>
              </div>
            </div>

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
                <div className="price">$9.00 <span>$12.00</span></div>
              </div>
            </div>

            {/* Product-3 */}
            <div className="product-item">
              <div className="image">
                <img src={product3} alt="Product-Image" />
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
                <div className="price">$10.00 <span>$12.00</span></div>
              </div>
            </div>

            {/* Product-4 */}
            <div className="product-item">
              <div className="image">
                <img src={product4} alt="Product-Image" />
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
                <div className="price">$8.00 <span>$12.00</span></div>
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
                <div className="price">$10.00 <span>$12.00</span></div>
              </div>
            </div>

            {/* Product-6 */}
            <div className="product-item">
              <div className="image">
                <img src={product6} alt="Product-Image" />
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
                <a href="Product-Single.html"><h3>brownie</h3></a>
                <div className="price">$9.00 <span>$11.00</span></div>
              </div>
            </div>

            {/* Product-7 */}
            <div className="product-item">
              <div className="image">
                <img src={product7} alt="Product-Image" />
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
                <a href="Product-Single.html"><h3>pie</h3></a>
                <div className="price">$11.00 <span>$15.00</span></div>
              </div>
            </div>

            {/* Product-8 */}
            <div className="product-item">
              <div className="image">
                <img src={product8} alt="Product-Image" />
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
                <a href="Product-Single.html"><h3>cake</h3></a>
                <div className="price">$13.00 <span>$17.00</span></div>
              </div>
            </div>

            {/* Product-9 */}
            <div className="product-item">
              <div className="image">
                <img src={product9} alt="Product-Image" />
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
                <a href="Product-Single.html"><h3>croissant</h3></a>
                <div className="price">$7.00 <span>$12.00</span></div>
              </div>
            </div>
          </div>
          {/* ===== Products (Ends) ===== */}

          {/* ===== Pagination (Start) ===== */}
          <div className="pages-no">
            <div className="container">
              {/* Previous Page Button */}
              <div className="item">
                <i className="fas fa-arrow-left"></i>
              </div>
              {/* Page Numbers */}
              <div className="numbers">
                <div className="item active">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
              </div>
              {/* Next Page Button */}
              <div className="item">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          {/* ===== Pagination (End) ===== */}
        </div>
        {/* ========== Shop Container (End) ========== */}
      </section>
      {/* ==================== Shop-Grid Area (End) ==================== */}

      {/* ==================== Footer Area (Start) ==================== */}
      <footer className="footer">
        <div className="box-container">
          {/* == StartUp Description & Social Account Links == */}
          <div className="footer-item">
            {/* Logo */}
            <a className="logo" href="../../index.html">
              <img src="../../assets/images/Logo/Logo.png" alt="logo" />
              <div className="logo-name">
                <h3>Sweet Delight</h3>
              </div>
            </a>
            {/* Description */}
            <p>Indulge in the Bakery Experience of Tomorrow! From Customized Creations to Flavorful Delights, We Redefine Sweet
              Possibilities. Savoring Moments Today with Innovative Baking Excellence.</p>
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
              <p><i className="fas fa-caret-right"></i><a href="../About/About.html">about</a></p>
              <p><i className="fas fa-caret-right"></i><a href="../Pages/Service-Single.html">services</a></p>
              <p><i className="fas fa-caret-right"></i><a href="../Portfolio/Portfolio.html">portfolio</a></p>
              <p><i className="fas fa-caret-right"></i><a href="../Blog/Blog-Grid.html">blogs</a></p>
              <p><i className="fas fa-caret-right"></i><a href="Shop-Grid.html">shop</a></p>
              <p><i className="fas fa-caret-right"></i><a href="../Contact/Contact.html">contact</a></p>
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
          <div className='footer-item'>
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

export default ShopGrid