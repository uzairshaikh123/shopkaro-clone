import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import Signin from './Pages/Signin';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './Components/Navbar';
import Product from './Pages/Product';
import AllRoutes from './MainRoutes/AllRoutes';

function App() {
  
  return (


    <>

<Navbar />
     <GoogleOAuthProvider clientId="369991425272-n1fpb6hpeds2mp83qef46ftqih1ah03g.apps.googleusercontent.com">
  


<AllRoutes />

  </GoogleOAuthProvider>
    </>

  );
}

export default App;
