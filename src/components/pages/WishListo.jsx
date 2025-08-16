import React from 'react'
import product1 from "../../assets/images/Shop/Products/Product-1.jpg"
import product2 from "../../assets/images/Shop/Products/Product-2.jpg"
import product3 from "../../assets/images/Shop/Products/Product-3.jpg"
import WishlistCard from '../reuse-components/WishlistCard'
const WishListo = () => {
  return (
    <>
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

                   <WishlistCard
                   image={product1}
                   name="Cupcake"
                   price="$50.00"
                   status="inStock"
                   cartLink="Cart.html"
                   />
                   <WishlistCard
                   image={product1}
                   name="Cupcake"
                   price="$50.00"
                   status="outOfStock"
                   cartLink="Cart.html"
                   />
                 
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default WishListo