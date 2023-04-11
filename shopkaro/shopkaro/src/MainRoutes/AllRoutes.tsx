import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Payment from '../component_payment/Payment'
import AdminSignin from '../Pages/AdminSignin'
import CartPage from '../Pages/CartPage'
import Homepage from '../Pages/Homepage'
import Productfun from '../Pages/Product'
import Signin from '../Pages/Signin'
import SingleProduct from '../Pages/SingleProductPage'
import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {




  return (

<Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/products' element={<Productfun />} />
    <Route path='/product/:id' element={<SingleProduct />} />
      
    <Route path='/signin' element={
      <Signin />
 
    } />
    <Route path='/cart' element={
       <PrivateRoute> 
    <CartPage />
       </PrivateRoute>
    } />

    <Route path='/payment' element={<Payment />} />
    <Route path='/admin' element={<AdminSignin />} />
 </Routes>



  )
}

export default AllRoutes

