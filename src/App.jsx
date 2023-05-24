import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { CartPage } from './pages/CartPage'
import { DetailProductPage } from './pages/DetailProductPage'
import './App.css'

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/DetailProduct' element={<DetailProductPage />} />
      </Routes>
    </Router>
  )
}
