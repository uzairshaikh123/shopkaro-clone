import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './Components/Navbar';
function App() {
  return (

    <div className="App">
     <GoogleOAuthProvider clientId="369991425272-n1fpb6hpeds2mp83qef46ftqih1ah03g.apps.googleusercontent.com">
              
    <Navbar />
     <Signin />
  </GoogleOAuthProvider>
    </div>
  );
}

export default App;
