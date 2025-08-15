import React from 'react'
import OurFeaturesCard from '../reuse-components/OurFeaturesCard'

const OurFeatures = () => {
  return (
    <>
    {/* ==================== Features Area (Start) ==================== */}
      <section className="features">
          {/* Section Heading */}
          <div className="heading">
            <span>our best features</span>
            <h2>our features</h2>
          </div>
    
          {/* Features */}
          <div className="box-container">
            
            <OurFeaturesCard  
               iconClass="fas fa-shipping-fast"
               title="free <br /> shipping"
               description="Capped at $39 per order"/>
            <OurFeaturesCard 
              iconClass="far fa-credit-card"
              title="Card <br /> payment"
              description="12 Months Installments"/>
            <OurFeaturesCard
              iconClass="fas fa-undo-alt"
              title="easy <br /> returns"
              description="Shop With Confidence"
            />
            <OurFeaturesCard
              iconClass="far fa-check-circle"
              title="Quality <br /> Guarantee"
              description="Our Commitment to Quality"
            />
            
          </div>
        </section>
        
    </>
  )
}

export default OurFeatures