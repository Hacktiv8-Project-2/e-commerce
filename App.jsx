import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './component/navbar-admin'
import Products from './pages/stock'
import Recap from './pages/recap'


function App() {

  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Products />}/>
            <Route path='/recap' element={<Recap/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
