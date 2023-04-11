import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}:any) :any => {
const navigate = useNavigate()
let token = sessionStorage.getItem("token") || null
console.log(token,"tttt")
if(token){
   return children
  }

    return navigate("/signin")
  
  
}

export default PrivateRoute