import React from 'react'
import logo from "../assets/images/Logo/Logo.png"
import { Link } from 'react-router-dom'


const Checkout = () => {
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
                    <h2>Checkout</h2>
                </div>

                <div className="link">
                    <a href="../../index.html"> Home</a>
                    <i className="fa-solid fa-angles-right"></i>
                    <span className="page">Checkout</span>
                </div>
            </div>
            {/* ==================== Page-Title (End) ==================== */}

            {/* ==================== Checkout Area (Start) ==================== */}
            <section>
                <form action="#" className="checkout">
                    <div className="box-1">
                        {/* ========== Billing-Address Area (Start) ========== */}
                        <div className="billing address checkout-item">
                            <div className="heading">
                                <h2>billing address</h2>
                            </div>

                            <div className="form">
                                {/* First and Last name input */}
                                <div className="input-box">
                                    <input
                                        type="text"
                                        name="first-name"
                                        placeholder="first name"
                                        id="b-first-name"
                                        className="box"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="last-name"
                                        placeholder="last name"
                                        id="b-last-name"
                                        className="box"
                                        required
                                    />
                                </div>

                                {/* Company input */}
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="company"
                                    id="b-company"
                                    className="box"
                                    required
                                />

                                {/* Country input */}
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="country"
                                    id="b-country"
                                    className="box"
                                    required
                                />

                                {/* Address input */}
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="address"
                                    id="b-address"
                                    className="box"
                                    required
                                />

                                {/* City and ZIP input */}
                                <div className="input-box">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="town/city"
                                        id="b-city"
                                        className="box"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="zip"
                                        placeholder="postcode/ZIP"
                                        id="b-zip"
                                        className="box"
                                        required
                                    />
                                </div>

                                {/* Phone and Email input */}
                                <div className="input-box">
                                    <input
                                        type="number"
                                        name="number"
                                        placeholder="phone no"
                                        id="b-number"
                                        className="box"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email address"
                                        id="b-email"
                                        className="box"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ========== Billing-Address Area (End) ========== */}

                        {/* ========== Shipping-Address Area (Start) ========== */}
                        <div className="shipping address checkout-item">
                            <div className="heading">
                                <h2>shipping address</h2>
                            </div>

                            {/* Shipping Address Form */}
                            <div className="form">
                                {/* First and Last name input */}
                                <div className="input-box">
                                    <input
                                        type="text"
                                        name="first-name"
                                        placeholder="first name"
                                        id="s-first-name"
                                        className="box"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="last-name"
                                        placeholder="last name"
                                        id="s-last-name"
                                        className="box"
                                        required
                                    />
                                </div>

                                {/* Company input */}
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="company"
                                    id="s-company"
                                    className="box"
                                    required
                                />

                                {/* Country input */}
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="country"
                                    id="s-country"
                                    className="box"
                                    required
                                />

                                {/* Address input */}
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="address"
                                    id="s-address"
                                    className="box"
                                    required
                                />

                                {/* City and ZIP input */}
                                <div className="input-box">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="town/city"
                                        id="s-city"
                                        className="box"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="zip"
                                        placeholder="postcode/ZIP"
                                        id="s-zip"
                                        className="box"
                                        required
                                    />
                                </div>

                                {/* Phone and Email input */}
                                <div className="input-box">
                                    <input
                                        type="number"
                                        name="number"
                                        placeholder="phone no"
                                        id="s-number"
                                        className="box"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email address"
                                        id="s-email"
                                        className="box"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ========== Shipping-Address Area (End) ========== */}
                    </div>

                    <div className="box-2">
                        {/* ========== Payment-Method Area (Start) ========== */}
                        <div className="payment-methods checkout-item">
                            <div className="heading">
                                <h2>payment method</h2>
                            </div>

                            <div className="content">
                                {/* Payment Method: Direct Bank Transfer */}
                                <div className="payment">
                                    <input
                                        type="radio"
                                        id="direct-bank-transfer"
                                        name="payment"
                                        value="DIRECT"
                                        defaultChecked
                                    />
                                    <label htmlFor="direct-bank-transfer">
                                        direct bank transfer
                                    </label>

                                    {/* Payment Method Content */}
                                    <div className="payment-body active">
                                        <p>
                                            Make your payment directly into our bank account. Please use
                                            your Order ID as the payment reference. Your order won't be
                                            shipped until the funds have our account.
                                        </p>
                                    </div>
                                </div>

                                {/* Payment Method: Cash On Delivery */}
                                <div className="payment">
                                    <input
                                        type="radio"
                                        id="cash-on-delivery"
                                        name="payment"
                                        value="CASH"
                                    />
                                    <label htmlFor="cash-on-delivery">cash on delivery</label>

                                    {/* Payment Method Content */}
                                    <div className="payment-body">
                                        <p>
                                            Please send your cheque to Store Name, Store Street, Store
                                            Town, Store State / County, Store Postcode.
                                        </p>
                                    </div>
                                </div>

                                {/* Payment Method: Paypal */}
                                <div className="payment">
                                    <input
                                        type="radio"
                                        id="paypal"
                                        name="payment"
                                        value="PAYPAL"
                                    />
                                    <label htmlFor="paypal">paypal</label>

                                    {/* Payment Method Content */}
                                    <div className="payment-body">
                                        <p>
                                            Pay via PayPal; you can pay with your credit card if you
                                            don't have a PayPal account.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========== Payment-Method Area (End) ========== */}

                        {/* ========== Cart-Total Area (Start) ========== */}
                        <div className="shop-summary checkout-item">
                            <div className="heading">
                                <h2>cart total</h2>
                            </div>

                            <div className="summary-list">
                                {/* Subtotal */}
                                <div className="summary-item">
                                    <div className="name summary-box">sub total</div>
                                    <div className="value summary-box">$150.00</div>
                                </div>

                                {/* Delivery Fee */}
                                <div className="summary-item">
                                    <div className="name summary-box">delivery fee</div>
                                    <div className="value summary-box">$20.00</div>
                                </div>

                                {/* Discount */}
                                <div className="summary-item">
                                    <div className="name summary-box">discount</div>
                                    <div className="value summary-box">$30.00</div>
                                </div>

                                {/* Tax */}
                                <div className="summary-item">
                                    <div className="name summary-box">tax</div>
                                    <div className="value summary-box">$10.00</div>
                                </div>

                                {/* Total */}
                                <div className="summary-item">
                                    <div className="name summary-box">total</div>
                                    <div className="value summary-box">$150.00</div>
                                </div>
                            </div>
                        </div>
                        {/* ========== Cart-Total Area (End) ========== */}

                        <button type="submit" className="btn">
                            place order
                        </button>
                    </div>
                </form>
            </section>
            {/* ==================== Checkout Area (End) ==================== */}












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

export default Checkout