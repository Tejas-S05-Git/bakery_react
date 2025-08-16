import React from 'react'

const ShopListCard = ({ 
  image, 
  title, 
  description, 
  price, 
  oldPrice, 
  wishlistLink, 
  cartLink, 
  detailLink, 
  rating = 0   // default 0 stars
}) => {
  return (
    <>
     <div className="product-item">
      {/* Product Image with Icons */}
      <div className="image">
        <img src={image} alt="Product-Image" />
        <div className="icon-box">
          <a href={wishlistLink} className="icon"><i className="far fa-heart"></i></a> {/* Wishlist */}
          <a href={cartLink} className="icon"><i className="fa-solid fa-cart-shopping"></i></a> {/* Cart */}
          <a href={detailLink} className="icon"><i className="fa-solid fa-magnifying-glass"></i></a> {/* Details */}
        </div>
      </div>

      {/* Product Content */}
      <div className="content">
        {/* Rating */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <i 
              key={i} 
              className={`fa-solid fa-star ${i < rating ? "text-yellow-500" : "text-gray-400"}`}
            ></i>
          ))}
        </div>

        {/* Title */}
        <a href={detailLink}><h3>{title}</h3></a>

        {/* Description */}
        <p>{description}</p>

        {/* Price */}
        <div className="price">
          {price} <span>{oldPrice}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default ShopListCard