import React from 'react'

const CartListCard = ({ image, name, price, quantity, total, onRemove }) => {
  return (
    <>
    <div className="cart-item">
      {/* Product Image */}
      <div className="box product">
        <img src={image} alt={name} />
      </div>

      {/* Product Name */}
      <div className="box name">{name}</div>

      {/* Product Price */}
      <div className="box price">${price}</div>

      {/* Quantity */}
      <div className="box quantitly">
        <div className="quantity buttons_added">
          <input type="button" value="-" className="minus" />
          <input
            type="number"
            step="1"
            min="1"
            max="100"
            name="quantity"
            value={quantity}
            readOnly
            className="input-text qty text"
          />
          <input type="button" value="+" className="plus" />
        </div>
      </div>

      {/* Total Price */}
      <div className="box total">${total}</div>

      {/* Action Button */}
      <div className="box action">
        <i
          className="icon fa-solid fa-trash-alt"
          onClick={onRemove}
          style={{ cursor: "pointer", color: "red" }}
        ></i>
      </div>
    </div>
    </>
  )
}

export default CartListCard