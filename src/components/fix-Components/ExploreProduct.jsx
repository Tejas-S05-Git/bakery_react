import React from 'react'
import Button from '../reuse-components/Button'

const ExploreProduct = () => {
  return (
    <>
     <section className="banner">
      <div className="content">
        <h2>Savor Sweet Moments with Us!</h2> {/* Offer Heading */}
        <p>
          Indulge in a delightful world of freshly baked goods and treats.
          Our artisan bakers are here to make your moments sweeter with our special offer.
        </p> {/* Offer Description */}
        <Button label="Explore Our Products" href="pages/Shop/Shop-Grid.html" />
        
      </div>
    </section>
    </>
  )
}

export default ExploreProduct