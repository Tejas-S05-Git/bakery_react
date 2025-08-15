import React, { useEffect, useState } from 'react';
import OurProductCard from '../reuse-components/OurProductCard';

const OurProduct = () => {
  const [products, setProducts] = useState([]);

  // API call
  useEffect(() => {
    fetch('http://localhost:5000/ourProduct')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <section className="shop product">
        {/* Section Heading */}
        <div className="heading">
          <span>explore our offerings</span>
          <h2>our products</h2>
        </div>

        <div className="shop-container">
          {/* ===== Products (Start) ===== */}
          <div className="product-container grid">
            {products.map((product, index) => (
              <OurProductCard
                key={index}
                image={product.image} // API मधून image path येईल
                title={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                wishlistLink={product.wishlistLink}
                cartLink={product.cartLink}
                detailLink={product.detailLink}
              />
            ))}
          </div>
          {/* ===== Products (Ends) ===== */}
        </div>
      </section>
    </>
  );
};

export default OurProduct;
