import React from 'react'
import Button from '../reuse-components/Button'

const CheckoutPage = () => {
  return (
    <>
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
                        <Button 
                        label={"place order"}/>
                    
                    </div>
                </form>
            </section>
    </>
  )
}

export default CheckoutPage