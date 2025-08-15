import React from 'react'

const OurFeaturesCard = ({ iconClass, title, description }) => {
  return (
    <>
          <div className="feature-item">
      <div className="icon-box">
        <div className="icon">
          <i className={iconClass}></i>
        </div>
      </div>
      <div className="content">
        {/* Using dangerouslySetInnerHTML so we can keep <br /> in title */}
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        <p>{description}</p>
      </div>
    </div>
    </>
  )
}

export default OurFeaturesCard