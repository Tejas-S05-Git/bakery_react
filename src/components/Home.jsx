import React from 'react'
import logo from "../assets/images/Logo/Logo.png"
import home1 from "../assets/images/Home/Home-1.jpg"
import home2 from "../assets/images/Home/Home-2.jpg"
import home3 from "../assets/images/Home/Home-3.jpg"
import about1 from "../assets/images/About/About-1.jpg"
import about2 from "../assets/images/About/About-2.jpg"
import about3 from "../assets/images/About/About-3.jpg"
import about4 from "../assets/images/About/About-4.jpg"
import service1 from "../assets/images/Service/Services/Service-1.jpg"
import service2 from "../assets/images/Service/Services/Service-2.jpg"
import service3 from "../assets/images/Service/Services/Service-3.jpg"
import service4 from "../assets/images/Service/Services/Service-4.jpg"
import service5 from "../assets/images/Service/Services/Service-5.jpg"
import service6 from "../assets/images/Service/Services/Service-6.jpg"

import bagel from "../assets/images/Menu/Bread/Bagel.jpg"
import baguette from "../assets/images/Menu/Bread/Baguette.jpg"
import bananaBread from "../assets/images/Menu/Bread/Banana-Bread.jpg"
import cheeseBread from "../assets/images/Menu/Bread/Cheese-Bread.jpg"
import Brioche from "../assets/images/Menu/Bread/Brioche.jpg"
import RyeBread from "../assets/images/Menu/Bread/Rye-Bread.jpg"
import BreadRoll from "../assets/images/Menu/Bread/Bread-roll.jpg"
import SodaBread from "../assets/images/Menu/Bread/Soda-Bread.jpg"

import product1 from "../assets/images/Shop/Products/Product-1.jpg"
import product2 from "../assets/images/Shop/Products/Product-2.jpg"
import product3 from "../assets/images/Shop/Products/Product-3.jpg"
import product4 from "../assets/images/Shop/Products/Product-4.jpg"
import product5 from "../assets/images/Shop/Products/Product-5.jpg"
import product6 from "../assets/images/Shop/Products/Product-6.jpg"
import product7 from "../assets/images/Shop/Products/Product-7.jpg"
import product8 from "../assets/images/Shop/Products/Product-8.jpg"

import team1 from "../assets/images/Team/Team-1.jpg"
import team2 from "../assets/images/Team/Team-2.jpg"
import team3 from "../assets/images/Team/Team-3.jpg"
import team4 from "../assets/images/Team/Team-4.jpg"

import pic1 from "../assets/images/Testimonials/Pic-1.jpg"
import pic2 from "../assets/images/Testimonials/Pic-2.jpg"
import pic3 from "../assets/images/Testimonials/Pic-3.jpg"


import blog1 from "../assets/images/Blog/Blogs/Blog-1.jpg"
import blog2 from "../assets/images/Blog/Blogs/Blog-2.jpg"
import blog3 from "../assets/images/Blog/Blogs/Blog-3.jpg"

import partner1 from "../assets/images/Partners/Partner-1.png"
import partner2 from "../assets/images/Partners/Partner-2.png"
import partner3 from "../assets/images/Partners/Partner-3.png"
import partner4 from "../assets/images/Partners/Partner-4.png"
import partner5 from "../assets/images/Partners/Partner-5.png"
import partner6 from "../assets/images/Partners/Partner-6.png"
import partner7 from "../assets/images/Partners/Partner-7.png"
import partner8 from "../assets/images/Partners/Partner-8.png"
import partner9 from "../assets/images/Partners/Partner-9.png"
import partner10 from "../assets/images/Partners/Partner-10.png"
import partner11 from "../assets/images/Partners/Partner-11.png"
import partner12 from "../assets/images/Partners/Partner-12.png"
import partner13 from "../assets/images/Partners/Partner-13.png"

import { Link } from 'react-router-dom'

const Home = () => {
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
                 <Link to="/WishList">wishlist</Link>
                 <Link to="/Cart">cart</Link>
                 <Link to="/Checkout">checkout</Link>
                  
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
    
      {/* ==================== Home-Slider Area (Start) ==================== */}
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
                <a href="pages/Pages/Menu.html" className="btn">our menu</a> {/* Menu Button */}
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
                <a href="pages/Pages/Menu.html" className="btn">our menu</a> {/* Menu Button */}
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
                <a href="pages/Pages/Menu.html" className="btn">our menu</a> {/* Menu Button */}
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
    {/* ==================== Home-Slider Area (End) ==================== */}
    
    
    {/* ==================== Features Area (Start) ==================== */}
      <section className="features">
          {/* Section Heading */}
          <div className="heading">
            <span>our best features</span>
            <h2>our features</h2>
          </div>
    
          {/* Features */}
          <div className="box-container">
            {/* Feature 1: Free Shipping */}
            <div className="feature-item">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
              </div>
              <div className="content">
                <h3>
                  free <br /> shipping
                </h3>
                <p>Capped at $39 per order</p>
              </div>
            </div>
    
            {/* Feature 2: Card Payment */}
            <div className="feature-item">
              <div className="icon-box">
                <div className="icon">
                  <i className="far fa-credit-card"></i>
                </div>
              </div>
              <div className="content">
                <h3>
                  Card <br /> payment
                </h3>
                <p>12 Months Installments</p>
              </div>
            </div>
    
            {/* Feature 3: Easy Returns */}
            <div className="feature-item">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-undo-alt"></i>
                </div>
              </div>
              <div className="content">
                <h3>
                  easy <br /> returns
                </h3>
                <p>Shop With Confidence</p>
              </div>
            </div>
    
            {/* Feature 4: Quality Guarantee */}
            <div className="feature-item">
              <div className="icon-box">
                <div className="icon">
                  <i className="far fa-check-circle"></i>
                </div>
              </div>
              <div className="content">
                <h3>
                  Quality <br /> Guarantee
                </h3>
                <p>Our Commitment to Quality</p>
              </div>
            </div>
          </div>
        </section>
    
    {/* ==================== About Area (Start) ==================== */}
        <section className="about">
          {/* About Information */}
          <div className="box-container">
            {/* About Image */}
            <div className="image">
              <div>
                <img src={about1} alt="About-Image" /> {/* About Image 1 */}
                <img src={about2} alt="About-Image" /> {/* About Image 2 */}
              </div>
              <div>
                <img src={about3} alt="About-Image" /> {/* About Image 3 */}
                <img src={about4} alt="About-Image" /> {/* About Image 4 */}
              </div>
            </div>
    
            {/* About Content */}
            <div className="content">
              <div className="heading">
                <span>about us</span> {/* Sub Heading */}
                <h2>welcome to sweet delight's bakery.</h2> {/* Main Heading */}
              </div>
    
              <h5>
                where passion and creativity blend seamlessly to bring you the
                finest baked goods.
              </h5>{" "}
              {/* Sub Heading */}
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nemo aperiam quisquam repellat aliquam asperiores debitis quo ex
                laborum. Eius maiores, rem quos totam repudiandae sequi at quia sed
                laudantium? Temporibus, asperiores. Minus debitis nemo quo. Ducimus
                eaque rerum nobis!
              </p>{" "}
              {/* Description */}
              <a href="pages/Contact/Contact.html" className="btn">
                contact us
              </a>{" "}
              {/* Contact Button */}
            </div>
          </div>
        </section>
    
    
        {/* ==================== Count Area (Start) ==================== */}
    <div className="counting">
    
      {/* Statistic Box 1: Delivered Products Count */}
      <div className="box">
        <div className="info">
          <i className="fas fa-shopping-bag"></i> {/* Shopping bag icon */}
          <h1 className="count" data-count="50">50+</h1> {/* Count of delivered products */}
          <h3>Delivered Products</h3>
        </div>
      </div>
    
      {/* Statistic Box 2: Satisfied Clients Count */}
      <div className="box">
        <div className="info">
          <i className="far fa-smile"></i> {/* Smiling face icon */}
          <h1 className="count" data-count="500">500+</h1> {/* Count of satisfied clients */}
          <h3>Satisfied Clients</h3>
        </div>
      </div>
    
      {/* Statistic Box 3: Projects Completed Count */}
      <div className="box">
        <div className="info">
          <i className="fas fa-briefcase"></i> {/* Briefcase icon */}
          <h1 className="count" data-count="300">300+</h1> {/* Count of completed projects */}
          <h3>Projects Completed</h3>
        </div>
      </div>
    
      {/* Statistic Box 4: Professional Experts Count */}
      <div className="box">
        <div className="info">
          <i className="fas fa-users"></i> {/* Users icon */}
          <h1 className="count" data-count="20">20+</h1> {/* Count of professional experts */}
          <h3>Professional Experts</h3>
        </div>
      </div>
    
    </div>
    {/* ==================== Count Area (End) ==================== */}
    
    
      <section className="services">
          {/* Section Heading */}
          <div className="heading">
            <span>what we offer</span>
            <h2>our services</h2>
          </div>
    
          {/* Services */}
          <div className="box-container">
    
            {/* Service 1: Custom Cake Design */}
            <div className="service-item">
              <img
                src={service1}
                alt="Service-Image"
              />
              <div className="content">
                <i className="fas fa-birthday-cake"></i>
                <a href="pages/Pages/Service-Single.html">
                  <h3>Custom Cake Design</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sequi modi. pisicing elit. Eos sequi modi.
                </p>
              </div>
            </div>
    
            {/* Service 2: Online Ordering */}
            <div className="service-item">
              <img
                src={service2}
                alt="Service-Image"
              />
              <div className="content">
                <i className="fas fa-mobile-alt"></i>
                <a href="pages/Pages/Service-Single.html">
                  <h3>Online Ordering</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sequi modi. pisicing elit. Eos sequi modi.
                </p>
              </div>
            </div>
    
            {/* Service 3: Specialty Breads */}
            <div className="service-item">
              <img
                src={service3}
                alt="Service-Image"
              />
              <div className="content">
                <i className="fas fa-bread-slice"></i>
                <a href="pages/Pages/Service-Single.html">
                  <h3>Specialty Breads</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sequi modi. pisicing elit. Eos sequi modi.
                </p>
              </div>
            </div>
    
            {/* Service 4: Baking Workshops */}
            <div className="service-item">
              <img
                src={service4}
                alt="Service-Image"
              />
              <div className="content">
                <i className="fas fa-cookie-bite"></i>
                <a href="pages/Pages/Service-Single.html">
                  <h3>Baking Workshops</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sequi modi. pisicing elit. Eos sequi modi.
                </p>
              </div>
            </div>
    
            {/* Service 5: Catering & Events */}
            <div className="service-item">
              <img
                src={service5}
                alt="Service-Image"
              />
              <div className="content">
                <i className="fas fa-utensils"></i>
                <a href="pages/Pages/Service-Single.html">
                  <h3>catering & events</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sequi modi. pisicing elit. Eos sequi modi.
                </p>
              </div>
            </div>
    
            {/* Service 6: Gift Hampers */}
            <div className="service-item">
              <img
                src={service6}
                alt="Service-Image"
              />
              <div className="content">
                <i className="fas fa-gifts"></i>
                <a href="pages/Pages/Service-Single.html">
                  <h3>Gift Hampers</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sequi modi. pisicing elit. Eos sequi modi.
                </p>
              </div>
            </div>
    
          </div>
        </section>
    
    
       
    
    
        {/* ==================== Menu Area (Start) ==================== */}
    <section className="menu" id="menu">
    
      {/* Menu Section Heading */}
      <div className="heading">
        <span>lets checkout</span>
        <h2>our menu</h2>
      </div>
    
      {/* Menu Filter Buttons */}
      <div className="menu-btn-tabs">
        <button type="button" className="menu-btn active" data-target="#bread">bread</button>
        <button type="button" className="menu-btn" data-target="#cake">cake</button>
        <button type="button" className="menu-btn" data-target="#pastry">pastry</button>
        <button type="button" className="menu-btn" data-target="#beverages">Beverages</button>
      </div>
    
      <div className="box-container">
    
        {/* Bread Menu Items */}
        <div className="menu-gallery active" id="bread">
    
          {/* Bread 1 */}
          <div className="menu-item">
            <div className="image">
              <img src={bagel} alt="Bread-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Bagel</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Bread 2 */}
          <div className="menu-item">
            <div className="image">
              <img src={baguette} alt="Bread-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Baguette</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Bread 3 */}
          <div className="menu-item">
            <div className="image">
              <img src={bananaBread} alt="Bread-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Banana Bread</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Bread 4 */}
          <div className="menu-item">
            <div className="image">
              <img src={BreadRoll}alt="Bread-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Cheese Bread</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Bread 5 */}
          <div className="menu-item">
            <div className="image">
              <img src={Brioche} alt="Bread-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Brioche</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Bread 6 */}
          <div className="menu-item">
            <div className="image">
              <img src={cheeseBread} alt="Bread-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Rye Bread</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Bread 7 */}
          <div className="menu-item">
            <div className="image">
              <img src={RyeBread} alt="Bread-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Bread roll</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Bread 8 */}
          <div className="menu-item">
            <div className="image">
              <img src={SodaBread} alt="Bread-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Soda Bread</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
        </div>
    
        {/* Cake Menu Items */}
        <div className="menu-gallery" id="cake">
    
          {/* Cake 1 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Cakes/Chocolate-Cake.jpg" alt="Cake-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>chocolate cake</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Cake 2 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Cakes/carrot-cake.jpg" alt="Cake-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>carrot cake</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Cake 3 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Cakes/red-velvet.jpg" alt="Cake-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>red velvet cake</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Cake 4 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Cakes/Strawberry-cake.jpg" alt="Cake-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Strawberry cake</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Cake 5 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Cakes/Chiffon-Cake.jpg" alt="Cake-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Chiffon Cake</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Cake 6 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Cakes/Cheese-Cake.jpg" alt="Cake-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Cheese Cake</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Cake 7 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Cakes/Fruit-Cake.jpg" alt="Cake-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Fruit Cake</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Cake 8 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Cakes/Cupcake.jpg" alt="Cake-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>cupcake</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
        </div>
    
        {/* Pastry Menu Items */}
        <div className="menu-gallery" id="pastry">
    
          {/* Pastry 1 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Pastry/Croissant.jpg" alt="Pastry-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Croissant</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Pastry 2 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Pastry/Cherry-Pie.jpg" alt="Pastry-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Cherry Pie</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Pastry 3 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Pastry/Macaron.jpg" alt="Pastry-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Macaron</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Pastry 4 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Pastry/Pecan-Pie.jpg" alt="Pastry-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Pecan Pie</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Pastry 5 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Pastry/Pretzels.jpg" alt="Pastry-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Pretzels</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Pastry 6 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Pastry/Baklava.jpg" alt="Pastry-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Baklava</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Pastry 7 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Pastry/Eclair.jpg" alt="Pastry-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Eclair</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Pastry 8 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Pastry/Puff-Pastry.jpg" alt="Pastry-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Puff Pastry</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
        </div>
    
        {/* Beverages Menu Items */}
        <div className="menu-gallery" id="beverages">
    
          {/* Beverage 1 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Beverages/Americano.jpg" alt="Beverage-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Americano</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Beverage 2 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Beverages/espresso.jpg" alt="Beverage-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>espresso</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Beverage 3 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Beverages/Cappucino.jpg" alt="Beverage-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Cappucino</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Beverage 4 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Beverages/Latte.jpg" alt="Beverage-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Latte</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Beverage 5 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Beverages/Black-Coffee.jpg" alt="Beverage-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Black Coffee</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Beverage 6 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Beverages/Mocha.jpg" alt="Beverage-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Mocha</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Beverage 7 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Beverages/Caf%c3%83%c2%a9-au-Lait.html" alt="Beverage-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Café au Lait</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
          {/* Beverage 8 */}
          <div className="menu-item">
            <div className="image">
              <img src="assets/images/Menu/Beverages/Macchiato.jpg" alt="Beverage-Image" />
            </div>
            <div className="content">
              <div className="intro">
                <h4>Macchiato</h4>
                <span className="price">$20</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
    
        </div>
    
      </div>
    
    
    </section>
    {/* ==================== Menu Area (End) ==================== */}
    
    {/* ==================== Banner Area (Start) ==================== */}
    <section className="banner">
      <div className="content">
        <h2>Savor Sweet Moments with Us!</h2> {/* Offer Heading */}
        <p>
          Indulge in a delightful world of freshly baked goods and treats.
          Our artisan bakers are here to make your moments sweeter with our special offer.
        </p> {/* Offer Description */}
        <a href="pages/Shop/Shop-Grid.html" className="btn">
          Explore Our Products
        </a> {/* Offer Button */}
      </div>
    </section>
    {/* ==================== Banner Area (End) ==================== */}
    
    
    
    
    
    {/* ==================== Shop Area (Start) ==================== */}
    <section className="shop product">
    
      {/* Section Heading */}
      <div className="heading">
        <span>explore our offerings</span>
        <h2>our products</h2>
      </div>
    
      <div className="shop-container">
      
        {/* ===== Products (Start) ===== */}
        <div className="product-container grid">
        
          {/* Product-1 */}
          <div className="product-item">
            <div className="image">
              <img src={product1} alt="Product-Image" /> {/* Product Image */}
              <div className="icon-box">
                <a href="pages/Shop/Wishlist.html" className="icon"><i className="far fa-heart"></i></a> {/* Add to Wishlist Button */}
                <a href="pages/Shop/Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a> {/* Add to Cart Button */}
                <a href="pages/Shop/Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a> {/* Product Detail Page Button */}
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
              <a href="pages/Shop/Product-Single.html"><h3>pancake</h3></a> {/* Product Title */}
              <div className="price">$6.00 <span>$9.00</span></div> {/* Product Price */}
            </div>
          </div>
    
          {/* Product-2 */}
          <div className="product-item">
            <div className="image">
              <img src={product2} alt="Product-Image" />
              <div className="icon-box">
                <a href="pages/Shop/Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                <a href="pages/Shop/Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="pages/Shop/Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
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
              <a href="pages/Shop/Product-Single.html"><h3>smoothie</h3></a>
              <div className="price">$9.00 <span>$12.00</span></div>
            </div>
          </div>
    
          {/* Product-3 */}
          <div className="product-item">
            <div className="image">
              <img src={product3} alt="Product-Image" />
              <div className="icon-box">
                <a href="pages/Shop/Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                <a href="pages/Shop/Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="pages/Shop/Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
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
              <a href="pages/Shop/Product-Single.html"><h3>sandwich</h3></a>
              <div className="price">$40.00 <span>$50.00</span></div>
            </div>
          </div>
    
          {/* Product-4 */}
          <div className="product-item">
            <div className="image">
              <img src={product4} alt="Product-Image" />
              <div className="icon-box">
                <a href="pages/Shop/Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                <a href="pages/Shop/Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="pages/Shop/Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
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
              <a href="pages/Shop/Product-Single.html"><h3>bread</h3></a>
              <div className="price">$40.00 <span>$50.00</span></div>
            </div>
          </div>
    
          {/* Product-5 */}
          <div className="product-item">
            <div className="image">
              <img src={product5} alt="Product-Image" />
              <div className="icon-box">
                <a href="pages/Shop/Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                <a href="pages/Shop/Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="pages/Shop/Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
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
              <a href="pages/Shop/Product-Single.html"><h3>macaroon</h3></a>
              <div className="price">$40.00 <span>$50.00</span></div>
            </div>
          </div>
    
          {/* Product-6 */}
          <div className="product-item">
            <div className="image">
              <img src={product6} alt="Product-Image" />
              <div className="icon-box">
                <a href="pages/Shop/Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                <a href="pages/Shop/Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="pages/Shop/Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
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
              <a href="pages/Shop/Product-Single.html"><h3>brownie</h3></a>
              <div className="price">$40.00 <span>$50.00</span></div>
            </div>
          </div>
    
          {/* Product-7 */}
          <div className="product-item">
            <div className="image">
              <img src={product7} alt="Product-Image" />
              <div className="icon-box">
                <a href="pages/Shop/Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                <a href="pages/Shop/Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="pages/Shop/Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
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
              <a href="pages/Shop/Product-Single.html"><h3>pie</h3></a>
              <div className="price">$40.00 <span>$50.00</span></div>
            </div>
          </div>
    
          {/* Product-8 */}
          <div className="product-item">
            <div className="image">
              <img src={product8} alt="Product-Image" />
              <div className="icon-box">
                <a href="pages/Shop/Wishlist.html" className="icon"><i className="far fa-heart"></i></a>
                <a href="pages/Shop/Cart.html" className="icon"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="pages/Shop/Product-Single.html" className="icon"><i className="fa-solid fa-magnifying-glass"></i></a>
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
              <a href="pages/Shop/Product-Single.html"><h3>cake</h3></a>
              <div className="price">$40.00 <span>$50.00</span></div>
            </div>
          </div>
    
        </div>
        {/* ===== Products (Ends) ===== */}
      
      </div>
    
    </section>
    {/* ==================== Shop Area (End) ==================== */}
    
     {/* ==================== Team Area (Start) ==================== */}
    <section className="team">
    
      {/* Section Heading */}
      <div className="heading">
        <span>meet our expertise</span>
        <h2>our team</h2>
      </div>
    
      {/* Team Members */}
      <div className="box-container">
    
        {/* Team Member 1 */}
        <div className="team-item">
          <img src={team1} alt="Team-Image" /> {/* Team Member Image */}
          <div className="content">
            <div className="intro">
              <a href="pages/About/Team-Single.html"><h3>Lisa Doe</h3></a> {/* Team Member Name */}
              <p>Co-Founder & CEO</p> {/* Team Member Designation */}
            </div>
            <div className="icon-container">
              <a href="#"><i className="fab fa-facebook-f"></i></a> {/* Facebook Icon */}
              <a href="#"><i className="fab fa-linkedin-in"></i></a> {/* LinkedIn Icon */}
              <a href="#"><i className="fab fa-twitter"></i></a> {/* Twitter Icon */}
              <a href="#"><i className="fab fa-instagram"></i></a> {/* Instagram Icon */}
            </div>
          </div>
        </div>
    
        {/* Team Member 2 */}
        <div className="team-item">
          <img src={team2} alt="Team-Image" /> {/* Team Member Image */}
          <div className="content">
            <div className="intro">
              <a href="pages/About/Team-Single.html"><h3>Janny Smith</h3></a> {/* Team Member Name */}
              <p>head baker</p> {/* Team Member Designation */}
            </div>
            <div className="icon-container">
              <a href="#"><i className="fab fa-facebook-f"></i></a> {/* Facebook Icon */}
              <a href="#"><i className="fab fa-linkedin-in"></i></a> {/* LinkedIn Icon */}
              <a href="#"><i className="fab fa-twitter"></i></a> {/* Twitter Icon */}
              <a href="#"><i className="fab fa-instagram"></i></a> {/* Instagram Icon */}
            </div>
          </div>
        </div>
    
        {/* Team Member 3 */}
        <div className="team-item">
          <img src={team3} alt="Team-Image" /> {/* Team Member Image */}
          <div className="content">
            <div className="intro">
              <a href="pages/About/Team-Single.html"><h3>Michael Brown</h3></a> {/* Team Member Name */}
              <p>baker</p> {/* Team Member Designation */}
            </div>
            <div className="icon-container">
              <a href="#"><i className="fab fa-facebook-f"></i></a> {/* Facebook Icon */}
              <a href="#"><i className="fab fa-linkedin-in"></i></a> {/* LinkedIn Icon */}
              <a href="#"><i className="fab fa-twitter"></i></a> {/* Twitter Icon */}
              <a href="#"><i className="fab fa-instagram"></i></a> {/* Instagram Icon */}
            </div>
          </div>
        </div>
    
        {/* Team Member 4 */}
        <div className="team-item">
          <img src={team4} alt="Team-Image" /> {/* Team Member Image */}
          <div className="content">
            <div className="intro">
              <a href="pages/About/Team-Single.html"><h3>Emily White</h3></a> {/* Team Member Name */}
              <p>cake decorator</p> {/* Team Member Designation */}
            </div>
            <div className="icon-container">
              <a href="#"><i className="fab fa-facebook-f"></i></a> {/* Facebook Icon */}
              <a href="#"><i className="fab fa-linkedin-in"></i></a> {/* LinkedIn Icon */}
              <a href="#"><i className="fab fa-twitter"></i></a> {/* Twitter Icon */}
              <a href="#"><i className="fab fa-instagram"></i></a> {/* Instagram Icon */}
            </div>
          </div>
        </div>
    
      </div>
    
    </section>
    {/* ==================== Team Area (End) ==================== */}
    
    
    
    {/* ==================== Testimonials Area (Start) ==================== */}
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
    {/* ==================== Testimonials Area (End) ==================== */}
    
    
    {/* ==================== Blogs Area (Start) ==================== */}
    <section className="blog main">
    
      {/* Section Heading */}
      <div className="heading">
        <span>our recent articles</span>
        <h2>our blogs</h2>
      </div>
    
      {/* Latest Blogs */}
      <div className="box-container">
    
        {/* Blog-1 */}
        <div className="blog-item">
          <div className="image">
            <img src={blog1} alt="Blog-Image" /> {/* Blog Image */}
          </div>
          <div className="content">
            <div className="category">cakes &amp; pastries</div> {/* Blog Category */}
            <a className="main-heading" href="pages/Blog/Blog-Single.html">The Art of Cake Decorating: Tips &amp; Tricks</a> {/* Blog Title */}
            <div className="details">
              <h3><i className="fa-regular fa-user"></i><span>By Admin</span></h3> {/* Author */}
              <h3><i className="fa-regular fa-calendar-days"></i><span>sep 02, 2023</span></h3> {/* Date */}
            </div>
          </div>
        </div>
    
        {/* Blog-2 */}
        <div className="blog-item">
          <div className="image">
            <img src={blog2} alt="Blog-Image" /> {/* Blog Image */}
          </div>
          <div className="content">
            <div className="category">bread &amp; rolls</div> {/* Blog Category */}
            <a className="main-heading" href="pages/Blog/Blog-Single.html">The Perfect Pairings: Coffee and Pastries</a> {/* Blog Title */}
            <div className="details">
              <h3><i className="fa-regular fa-user"></i><span>By Admin</span></h3> {/* Author */}
              <h3><i className="fa-regular fa-calendar-days"></i><span>aug 12, 2023</span></h3> {/* Date */}
            </div>
          </div>
        </div>
    
        {/* Blog-3 */}
        <div className="blog-item">
          <div className="image">
            <img src={blog3} alt="Blog-Image" /> {/* Blog Image */}
          </div>
          <div className="content">
            <div className="category">special occasions</div> {/* Blog Category */}
            <a className="main-heading" href="pages/Blog/Blog-Single.html">Wedding Cake Trends: What's In and What's Out</a> {/* Blog Title */}
            <div className="details">
              <h3><i className="fa-regular fa-user"></i><span>By Admin</span></h3> {/* Author */}
              <h3><i className="fa-regular fa-calendar-days"></i><span>jun 09, 2023</span></h3> {/* Date */}
            </div>
          </div>
        </div>
    
      </div>
    
    </section>
    {/* ==================== Blogs Area (End) ==================== */}
    
    
    
    {/* ==================== Partners Area (Start) ==================== */}
    <section className="partners">
    
      {/* Section Heading */}
      <div className="heading">  
        <span>meet our valued partners</span> 
        <h2>our Partners</h2> 
      </div>
    
      {/* Partner Slider Container */}
      <div className="swiper-container partner-slider">
    
        {/* Partners Logo */}
        <div className="swiper-wrapper">
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner1} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner2} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner3} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner4} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner5} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner6} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner7} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner8} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner9} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner10} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner11} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner12} alt="Partner-Logo" /></a>
          </div>
          <div className="swiper-slide partner-item">
            <a href="#"><img src={partner13} alt="Partner-Logo" /></a>
          </div>
        </div>
      </div> 
    
    </section>
    {/* ==================== Partners Area (End) ==================== */}
    
    
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

export default Home