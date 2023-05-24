import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { CartPage } from './pages/CartPage'
import { DetailProductPage } from './pages/DetailProductPage'
import { checkUserAdmin } from './utils/checkUserAdmin'
import Products from './pages/admin/stock'
import Recap from './pages/admin/recap'
import './App.css'

export const App = () => {
  useEffect(() => { }, [checkUserAdmin()])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={checkUserAdmin() ? <Products /> : <Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/recap' element={<Recap />} />
        <Route path='/DetailProduct/:productId' element={<DetailProductPage />} />
      </Routes>
    </Router>
  )
}
