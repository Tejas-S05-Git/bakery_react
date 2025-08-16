import React from 'react'
import product1 from "../../assets/images/Shop/Products/Product-1.jpg"
import product2 from "../../assets/images/Shop/Products/Product-2.jpg"
import product3 from "../../assets/images/Shop/Products/Product-3.jpg"
import product4 from "../../assets/images/Shop/Products/Product-4.jpg"
import product5 from "../../assets/images/Shop/Products/Product-5.jpg"
import CartListCard from '../reuse-components/CartListCard'
import Button from '../reuse-components/Button'
const Carto = () => {
  return (
    <>
     <div className="page-title">
            <div className="title">
              <h2>Cart</h2>
            </div>
    
            <div className="link">
              <a href="../../index.html"> Home</a>
              <i className="fa-solid fa-angles-right"></i>
              <span className="page">Cart</span>
            </div>
          </div>
          {/* ==================== Page-Title (End) ==================== */}
    
          {/* ==================== Cart Area (Start) ==================== */}
          <section className="cart">
            {/* ========== Shopping-Cart Area (Start) ========== */}
            <div className="shopping-cart">
              <div className="container">
                {/* Cart Title */}
                <div className="shoplist-title">
                  <h3>product</h3>
                  <h3>name</h3>
                  <h3>price</h3>
                  <h3>quantity</h3>
                  <h3>total</h3>
                  <h3>action</h3>
                </div>
    
                {/* Cart Items */}
                <div className="box-container">
                  {/* Cart Item-1 */}

                  <CartListCard
                   image={product1}
                   name="Pancake"
                   price="50.00"
                   quantity="1"
                   total="50.00"
                   onRemove={() => alert("Removed!")}
                  />
                  <CartListCard
                   image={product2}
                   name="smoothie"
                   price="50.00"
                   quantity="1"
                   total="50.00"
                   onRemove={() => alert("Removed!")}
                  />
                 
                </div>
              </div>
            </div>
            {/* ========== Shopping-Cart Area (End) ========== */}
    
            {/* ========== Cart-Total Area (Start) ========== */}
            <div className="cart-total">
              {/* Cart Tag */}
              <form className="cart-tag">
                <input
                  type="text"
                  id="coupon-code"
                  name="text"
                  placeholder="your coupon"
                  required
                />
                <Button label={"apply"} />
                
              </form>
    
              {/* Cart Summary */}
              <div className="cart-summary">
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
               <Button 
               label={"proceed to checkout"}
               href={"Checkout.html"}
               className={"btn"}
               />
               
              </div>
            </div>
            {/* ========== Cart-Total Area (End) ========== */}
          </section>
    </>
  )
}

export default Carto