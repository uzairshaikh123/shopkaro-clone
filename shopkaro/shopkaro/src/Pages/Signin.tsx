import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import '../CSS/signin.css'
// import { googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

const Signin = () => {
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

console.log("user",user)
console.log(profile)
    return (
        <div className='main'>


            <div className="wrapper">
                <div className="form-wrapper sign-in">
                    <form action="">
                        <h2 style={{ fontSize: "20px", color: "white" }}>Login</h2>
                        <div className="input-group">
                            <input type="text" required />
                            <label htmlFor="">Username</label>
                        </div>
                        <div className="input-group">
                            <input type={show ? 'text' : 'password'} required />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="remember">
                            <label htmlFor="" typeof="checkbox">
                                Remember me
                            </label>
                            <button type='submit' style={{ backgroundColor: "#0ef" }}>Login</button>
                            <div className="signUp-link">
                                <p>Dont't have an account? <a href="" className='signUpBtn-link' onClick={handletoggle}>Sign Up</a></p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{width:"40px"}} onClick={() => login()}>
                                   
                                    <img style={{width:"40px"}} src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" />
                                </button>
                            </div>

                        </div>
                    </form>
                                {/* <button  onClick={logOut}>Log out</button> */}

                </div>
                <div className="form-wrapper sign-up">
                    <form action="">
                        <h2 style={{ fontSize: "20px", color: "white" }}>Sign Up</h2>
                        <div className="input-group">
                            <input type="text" required />
                            <label htmlFor="">Username</label>
                        </div>
                        <div className="input-group">
                            <input type="email" required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-group">
                            <input type={"password"} required />
                            <label htmlFor="">Password</label>
                            {/* <input  type='checkbox' /> */}
                        </div>
                        <div className="remember">
                            <label htmlFor="" typeof="checkbox">
                                I agree to the terms and conditions
                            </label>
                            <button type='submit' style={{ backgroundColor: "#0ef" }}>Sign Up</button>
                            <div className="signUp-link">
                                <p>Already have an account? <a href="#" className='signInBtn-link' onClick={handletoggle}>Sign In</a></p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{width:"40px"}} onClick={() => login()}>
                                   
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