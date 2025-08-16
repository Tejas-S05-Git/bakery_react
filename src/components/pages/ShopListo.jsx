import React from 'react'

import product1 from "../../assets/images/Shop/Products/Product-1.jpg"
import product2 from "../../assets/images/Shop/Products/Product-2.jpg"
import product3 from "../../assets/images/Shop/Products/Product-3.jpg"
import product4 from "../../assets/images/Shop/Products/Product-4.jpg"
import product5 from "../../assets/images/Shop/Products/Product-5.jpg"
import product6 from "../../assets/images/Shop/Products/Product-6.jpg"
import product7 from "../../assets/images/Shop/Products/Product-7.jpg"
import product8 from "../../assets/images/Shop/Products/Product-8.jpg"
import product9 from "../../assets/images/Shop/Products/Product-9.jpg"
import OurProductCard from '../reuse-components/OurProductCard'
import ShopListCard from '../reuse-components/ShopListCard'
import Button from '../reuse-components/Button'
import Footer from '../fix-Components/Footer'
const ShopListo = () => {
  return (
    <>
    <div className="page-title">
            <div className="title">
              <h2>Shop List</h2>
            </div> 
    
            <div className="link">
              <a href="../../index.html"> Home</a>
              <i className="fa-solid fa-angles-right"></i>
              <span className="page">Shop List</span>
            </div>
          </div>
          {/* ==================== Page-Title (End) ==================== */}
    
          {/* ==================== Shop-List Area (Start) ==================== */}
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
                     <Button
                label={"Filter"}
                /> 
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
                    <img src={product1} alt="Popular-Product-Image" /> {/* Product Image */}
                    <div className="content">
                      <a href="Product-Single.html">pancake</a> {/* Product Title */}
                      <div className="price"><p>$40.00 <span>$50.00</span></p> </div> {/* Product Price */}
                    </div>
                  </div>
    
                  {/* Popular Product 2 */}
                  <div className="post-item">
                    <img src={product2} alt="Popular-Product-Image" /> {/* Product Image */}
                    <div className="content">
                      <a href="Product-Single.html">smoothie</a> {/* Product Title */}
                      <div className="price"><p>$40.00 <span>$50.00</span></p> </div> {/* Product Price */}
                    </div>
                  </div>
    
                  {/* Popular Product 3 */}
                  <div className="post-item">
                    <img src={product3} alt="Popular-Product-Image" /> {/* Product Image */}
                    <div className="content">
                      <a href="Product-Single.html">bread</a> {/* Product Title */}
                      <div className="price"><p>$40.00 <span>$50.00</span></p> </div> {/* Product Price */}
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
                <div className="showing">showing 4 of 30 products  </div>
    
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
              <div className="product-container list">

               <ShopListCard
               image={product1}
               title="Pancake"
               description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugit inventore numquam error odit dolorum veniam recusandae doloribus dolor et minus sed hic distinctio, tenetur, voluptatem quia excepturi maxime repellat!"
               price="$10.00"
               oldPrice="$12.00"
               wishlistLink="Wishlist.html"
               cartLink="Cart.html"
               detailLink="Product-Single.html"
               rating={4} 
               />
               <ShopListCard
               image={product2}
               title="smoothie"
               description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugit inventore numquam error odit dolorum veniam recusandae doloribus dolor et minus sed hic distinctio, tenetur, voluptatem quia excepturi maxime repellat!"
               price="$12.00"
               oldPrice="$14.00"
               wishlistLink="Wishlist.html"
               cartLink="Cart.html"
               detailLink="Product-Single.html"
               rating={4} 
               />
               
            
               
              </div>
              {/* ===== Products (End) ===== */}
    
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
          
    </>
  )
}

export default ShopListo