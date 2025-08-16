import React from 'react'

const WishlistCard = ({ image, name, price, status, cartLink }) => {
  return (
    <>
    <div className="wishlist-item">
      <div className="box">
        <img src={image} alt="wishlist image" />
      </div>
      {/* Product Image */}
      <div className="name box">{name}</div>
      {/* Product Name */}
      <div className="price box">{price}</div>
      {/* Product Price */}
      <div className={`status box ${status === "inStock" ? "in" : "out"}`}>
        {status}
      </div>
      {/* Product Status */}
      <div className="action box">
        <a href="#" className="icon fas fa-trash-alt"></a>
        <a href={cartLink} className="icon fas fa-shopping-cart"></a>
      </div>
    </div>
    </>
  )
}

export default WishlistCard