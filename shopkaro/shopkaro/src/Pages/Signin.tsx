import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import React, { useState, useEffect,useRef } from 'react'
import axios, { AxiosResponse } from 'axios';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import '../CSS/signin.css'
// import { googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { Navigate, useNavigate } from 'react-router-dom';
import { inputdet } from '../Utils/types';
import { sign } from 'crypto';
let t=sessionStorage.getItem("token") || ""
console.log("s",t)
const Signin = () => {
    const [email,setemail] = useState("")
    const [token,settoken] = useState(sessionStorage.getItem("token")|| "")
    const [username,setusername] = useState("")
    const [signupemail,setsignupemail] = useState("")
    const [signuppassword,setsignuppassword] = useState("")
    const [password,setepassword] = useState("")
    
    const [state,setstate]=useState<boolean>()
    const [logindata,setlogindata] = useState<inputdet[]>([])
const navigate=useNavigate()
    const [user, setUser] = useState<any>([]);
    const [profile, setProfile] = useState<any>([]);
    const [show, setshow] = useState<boolean>(false)
    const handletoggle = (e: any) => {
        e.preventDefault()
        let wrapper = document.querySelector('.wrapper');
        wrapper?.classList.toggle('active')
    }

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

useEffect(()=>{

axios.get("https://shopkaro-backend.onrender.com/login").then((res:AxiosResponse<inputdet[]>)=>{
    setlogindata(res.data)
})
},[])




    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

   

const handlechange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    

let name = e.target.name
let val = e.target.value
if(name=="email"){

    setemail(val)
}else if(name=="password"){
setepassword(val)
}else if(name=="signupemail"){
    setsignupemail(val)

}else if(name=="signuppassword"){
    setsignuppassword(val)
}else if(name=="username"){
    setusername(val)
}



}


console.log("l",logindata)

if(t){
    return  <Navigate to="/" />
 }


const checklogin=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()


if(logindata.length==0){
    alert("user not found ! Please Sign up")
}else{
   let data = logindata.filter((e)=>{
   

        return e.email==email && e.password==password
    })
    if(data.length){
        console.log(state)
        setstate(true)
        window.location.reload();
    }else{
        alert("user not found ! Please Sign up")
    }
}


}

const handlesignup=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
let obj={
    "username":username,
    "email":signupemail,
    "password":signuppassword
}
    if(signupemail && signuppassword){
        axios.post("https://shopkaro-backend.onrender.com/login",obj).then((res)=>{
console.log(signupemail,signuppassword)
          setstate(true)
          window.location.reload();

        })
        
    }else{
        alert("fill all the details")
    }
}


if(token){
return <Navigate to="/" />
}
console.log("t",token)



if(user.access_token){
  
    sessionStorage.setItem("token",user.access_token)
    alert("Sign in successfull")
return  <Navigate to="/" />
 }

if(state){
    sessionStorage.setItem("token","uqwhdlkqjelwqkoek")
    alert("Sign in successfull")
    return  <Navigate to="/" />
}

console.log(state)

    return (
        <div className='main' style={{marginTop:"150px"}}>


            <div className="wrapper">
                <div className="form-wrapper sign-in">
                    <form action="" onSubmit={checklogin}>
                        <h2 style={{ fontSize: "20px", color: "white" }}>Login</h2>
                        <div className="input-group">
                            <input type="text" name={"email"} required onChange={(e)=>handlechange(e)} />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-group">
                            <input type={show ? 'text' : 'password'} onChange={handlechange} required name="password" />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="remember">
                            <input type="checkbox" style={{height:"15px",width:"15px",marginRight:"5px",marginBottom:"15px"}}/>
                            <label htmlFor="" typeof="checkbox">
                                Remember me
                            </label>
                            <button type='submit' style={{ backgroundColor: "#0ef" }} className='btn'>Login</button>
                            <div className="signUp-link">
                                <p>Dont't have an account? <a href="" className='signUpBtn-link'  onClick={handletoggle}>Sign Up</a></p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button  className='btn' style={{width:"40px"}} onClick={() => login()}>
                                   
                                    <img style={{width:"40px"}} src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" />
                                </button>
                            </div>

                        </div>
                    </form>
                                {/* <button  onClick={logOut}>Log out</button> */}

                </div>
                <div className="form-wrapper sign-up">
                    <form action="" onSubmit={handlesignup}>
                        <h2 style={{ fontSize: "20px", color: "white" }}>Sign Up</h2>
                        <div className="input-group">
                            <input type="text" onChange={handlechange} required name={"username"}/>
                            <label htmlFor="" >Username</label>
                        </div>
                        <div className="input-group">
                            <input type="email" onChange={handlechange} required name={"signupemail"}/>
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-group">
                            <input type={"password"} required  name={"signuppassword"} onChange={handlechange}/>
                            <label htmlFor="">Password</label>
                            {/* <input  type='checkbox' /> */}
                        </div>
                        <div className="remember">
                        <input type="checkbox" style={{height:"15px",width:"15px",marginRight:"5px",marginBottom:"15px"}}/>

                            <label htmlFor="" typeof="checkbox" style={{marginBottom:"15px",fontSize:"15px"}}>
                                I agree to the terms and conditions
                            </label>
                            <button type='submit' style={{ backgroundColor: "#0ef" }} className='btn'>Sign Up</button>
                            <div className="signUp-link">
                                <p>Already have an account? <a href="" className='signInBtn-link' onClick={handletoggle}>Sign In</a></p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button  style={{width:"40px"}} onClick={() => login()}>
                                   
                                    <img style={{width:"40px"}} src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Signin