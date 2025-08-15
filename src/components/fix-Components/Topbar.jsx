import React from 'react'
import logo from "../../assets/images/Logo/Logo.png"
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <> 
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
    
    </>
  )
}

export default Topbar