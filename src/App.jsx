import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopGrid from './components/ShopGrid'
import ShopList from './components/ShopList'
import ProductSingle from './components/ProductSingle'
import WishList from './components/WishList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import HomePage from './components/pages/HomePage'
import Topbar from './components/fix-Components/Topbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Shop-Grid" element={<ShopGrid />} />
          <Route path="/Shop-List" element={<ShopList />} />
          <Route path="/Product-Single" element={<ProductSingle />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App