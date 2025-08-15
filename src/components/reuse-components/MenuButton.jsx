import React from 'react'

const MenuButton = ({ label, target, className, onClick, isActive, type = "button" }) => {
  return (
<>
<button
      type={type}
      className={`menu-btn ${isActive ? 'active' : ''} ${className || ""}`}
      data-target={target}
      onClick={onClick}
    >
      {label}
    </button>
</>
  )
}

export default MenuButton