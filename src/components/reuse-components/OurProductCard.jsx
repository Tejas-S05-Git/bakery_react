import React from 'react'

const OurProductCard = ({
  image,
  title,
  price,
  oldPrice,
  rating = 5, // default full 5 stars
  wishlistLink,
  cartLink,
  detailLink
}) => {
  return (
   <>
      <div className="product-item">
      <div className="image">
        <img src={image} alt="Product-Image" />
        <div className="icon-box">
          <a href={wishlistLink} className="icon">
            <i className="far fa-heart"></i>
          </a>
          <a href={cartLink} className="icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <a href={detailLink} className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </div>
      <div className="content">
        <div className="rating">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="fa-solid fa-star"></i>
          ))}
        </div>
        <a href={detailLink}>
          <h3>{title}</h3>
        </a>
        <div className="price">
          ${price.toFixed(2)} <span>${oldPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
   </>
  )
}

export default OurProductCard