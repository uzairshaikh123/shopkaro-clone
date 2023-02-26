import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}:any) => {
const navigate = useNavigate()
let token = sessionStorage.getItem("token")
useEffect(()=>{
    if(token==null){
    navigate("/signin")
    }
},[])



  return (
    <div>

{children}

    </div>
  )
}

export default PrivateRoute