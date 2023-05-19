import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { DetailProduct } from './pages/DetailProduct'
import './App.css'

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/DetailProduct' element={<DetailProduct />} />
      </Routes>
    </Router>
  )
}
