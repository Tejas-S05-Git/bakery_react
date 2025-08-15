import React from 'react'

const Button = ({ label, href, className }) => {
  return (
    <>
    <a href={href} className={`btn ${className || ""}`}>
      {label}
    </a>
    </>
  )
}

export default Button