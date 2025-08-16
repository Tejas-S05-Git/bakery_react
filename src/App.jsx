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
import Shop from './components/pages/Shop'
import ShopListo from './components/pages/ShopListo'
import Footer from './components/fix-Components/Footer'
import WishListo from './components/pages/WishListo'
import Carto from './components/pages/Carto'
import CheckoutPage from './components/pages/CheckoutPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-list" element={<ShopListo />} />
          <Route path="/WishList" element={<WishListo />} />
          <Route path="/Cart" element={<Carto />} />
          <Route path="/Checkout" element={<CheckoutPage />} />



          <Route path="/Shop-Grid" element={<ShopGrid />} />
          {/* <Route path="/Shop-List" element={<ShopList />} /> */}
          <Route path="/Product-Single" element={<ProductSingle />} />
          {/* <Route path="/WishList" element={<WishList />} /> */}
          {/* <Route path="/Cart" element={<Cart />} /> */}
          {/* <Route path="/Checkout" element={<Checkout />} /> */}

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  )
}

export default App