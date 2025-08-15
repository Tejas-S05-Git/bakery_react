import React from 'react'

const ServiceCard = ({ image, iconClass, title, link, description }) => {
  return (
   <>
    <div className="service-item">
      <img src={image} alt={title} />
      <div className="content">
        <i className={iconClass}></i>
        <a href={link}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
   </>  
)
}

export default ServiceCard