import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CartPage from '../Pages/CartPage'
import Product from '../Pages/Product'
import Signin from '../Pages/Signin'
import SingleProduct from '../Pages/SingleProductPage'
const AllRoutes = () => {
  return (

<Routes>
    <Route path='/' element={<h1>Homepage</h1>} />
    <Route path='/products' element={<Product />} />
    <Route path='/product/:id' element={<SingleProduct />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/cart' element={<CartPage />} />



</Routes>



  )
}

export default AllRoutes