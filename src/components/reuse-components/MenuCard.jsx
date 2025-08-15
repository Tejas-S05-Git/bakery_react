import React from 'react'

const MenuCard = ({ image, alt, title, price, description }) => {
  return (
    <>
     <div className="menu-item">
      <div className="image">
        <img src={image} alt={alt} />
      </div>
      <div className="content">
        <div className="intro">
          <h4>{title}</h4>
          <span className="price">{price}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
    </>
  )
}

export default MenuCard