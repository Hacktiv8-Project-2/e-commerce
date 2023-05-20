import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Home } from './pages/Home'
import { CartPage } from './pages/CartPage'
import { DetailProduct } from './pages/DetailProduct'
import './App.css'

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/DetailProduct' element={<DetailProduct />} />
      </Routes>
    </Router>
  )
}
