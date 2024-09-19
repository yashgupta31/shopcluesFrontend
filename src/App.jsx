import { useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Cart from './pages/Cart/Cart'
import Products from './pages/Products/Products'

function App() {

  return (
    <>
     <Box>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/all/:type' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        {/* <Route path='/auth' element={<Auth />} /> */}
      </Routes>
     </Box>
    </>
  )
}

export default App
