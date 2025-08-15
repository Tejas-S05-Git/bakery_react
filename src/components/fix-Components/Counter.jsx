import React from 'react'

const Counter = () => {
  return (
    <>
    <div className="counting">
    
      {/* Statistic Box 1: Delivered Products Count */}
      <div className="box">
        <div className="info">
          <i className="fas fa-shopping-bag"></i> {/* Shopping bag icon */}
          <h1 className="count" data-count="50">50+</h1> {/* Count of delivered products */}
          <h3>Delivered Products</h3>
        </div>
      </div>
    
      {/* Statistic Box 2: Satisfied Clients Count */}
      <div className="box">
        <div className="info">
          <i className="far fa-smile"></i> {/* Smiling face icon */}
          <h1 className="count" data-count="500">500+</h1> {/* Count of satisfied clients */}
          <h3>Satisfied Clients</h3>
        </div>
      </div>
    
      {/* Statistic Box 3: Projects Completed Count */}
      <div className="box">
        <div className="info">
          <i className="fas fa-briefcase"></i> {/* Briefcase icon */}
          <h1 className="count" data-count="300">300+</h1> {/* Count of completed projects */}
          <h3>Projects Completed</h3>
        </div>
      </div>
    
      {/* Statistic Box 4: Professional Experts Count */}
      <div className="box">
        <div className="info">
          <i className="fas fa-users"></i> {/* Users icon */}
          <h1 className="count" data-count="20">20+</h1> {/* Count of professional experts */}
          <h3>Professional Experts</h3>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Counter