import React, { useState, useEffect } from 'react';
import MenuButton from '../reuse-components/MenuButton';
import MenuCard from '../reuse-components/MenuCard';

const OurMenu = () => {
  const [data, setData] = useState([]); // single state for all menu items
  const [activeTab, setActiveTab] = useState('bread');

  // Mapping tab name to API URL
  const apiUrls = {
    bread: 'http://localhost:5000/bread',
    cake: 'http://localhost:5000/cake',
    pastry: 'http://localhost:5000/pastry',
    beverages: 'http://localhost:5000/beverages'
  };

  // Fetch data whenever active tab changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrls[activeTab]);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(`Error fetching ${activeTab} data:`, error);
      }
    };

    fetchData();
  }, [activeTab]); // Runs when tab changes

  return (
    <section className="menu" id="menu">
      {/* Menu Section Heading */}
      <div className="heading">
        <span>lets checkout</span>
        <h2>our menu</h2>
      </div>

      {/* Menu Filter Buttons */}
      <div className="menu-btn-tabs">
        <MenuButton label="Bread" target="#bread" onClick={() => setActiveTab('bread')} isActive={activeTab === 'bread'}/>
        <MenuButton label="Cake" target="#cake" onClick={() => setActiveTab('cake')} isActive={activeTab === 'cake'} />
        <MenuButton label="Pastry" target="#pastry" onClick={() => setActiveTab('pastry')} isActive={activeTab === 'pastry'} />
        <MenuButton label="Beverages" target="#beverages" onClick={() => setActiveTab('beverages')} isActive={activeTab === 'beverages'} />
      </div>

      {/* Menu Items */}
      <div className="box-container">
        <div className="menu-gallery active" id={activeTab}>
          {data.length > 0 ? (
            data.map((item, index) => (
              <MenuCard
                key={index}
                image={item.image}
                alt={item.alt}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))
          ) : (
            <p>Loading {activeTab} items...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
