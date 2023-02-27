import React, { useState, useEffect,useRef } from 'react'
import axios, { AxiosResponse } from 'axios';
import '../CSS/signin.css'
// import { googleLogout } from '@react-oauth/google';
import { Navigate, useNavigate } from 'react-router-dom';
import { inputdet } from '../Utils/types';

const AdminSignin = () => {
    const [email,setemail] = useState("")
  
    const [password,setepassword] = useState("")
    const [logindata,setlogindata] = useState<inputdet[]>([])
const navigate=useNavigate()
 
   
    const handletoggle = (e: any) => {
        e.preventDefault()
        let wrapper = document.querySelector('.wrapper');
        wrapper?.classList.toggle('active')
    }

   
useEffect(()=>{

axios.get("https://shopkaro-backend.onrender.com/admin").then((res:AxiosResponse<inputdet[]>)=>{

setlogindata(res.data)


})


},[])




const handlechange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    

let name = e.target.name
let val = e.target.value
if(name=="email"){

    setemail(val)
}else if(name=="password"){
setepassword(val)
}


}
const checklogin=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()

console.log(email)
console.log(password)

if(email=="admin@shopkaro.com" && password=="adminuser"){

    return window.location.replace("https://shopkaro-admin.vercel.app/dashboard")


}





// if(logindata.length==0){
//     alert("user not found ! Please Sign up")
// }else{
//    let data= logindata.filter((e)=>{
   

//         return e.email==email && e.password==password
//     })
//     if(data.length){
//         alert("Sign in successfull")
// navigate("/")
//     }else{
//         alert("user not found ! Please Sign up")
//     }
// }


}









    return (
        <div className='main' style={{marginTop:"150px"}}>


            <div className="wrapper">
                <div className="form-wrapper sign-in">
                    <form action="" onSubmit={checklogin}>
                        <h2 style={{ fontSize: "20px", color: "white" }}>ADMIN LOGIN</h2>
                        <div className="input-group">
                            <input type="text" name={"email"} required onChange={(e)=>handlechange(e)} />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-group">
                            <input type={'password'} onChange={handlechange} required name="password" />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="remember">
                            
                
                            <button type='submit' style={{ backgroundColor: "#0ef" }} className='btn'>Login</button>
                            <div className="signUp-link">
                               
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                               
                            </div>

                        </div>
                    </form>
                                {/* <button  onClick={logOut}>Log out</button> */}

                </div>
                
            </div>

        </div>
    )
}

export default AdminSignin