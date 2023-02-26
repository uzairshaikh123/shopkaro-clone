
// import './App.css';
// import Signin from './Pages/Signin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import Homepage from './Pages/Homepage';
import AllRoutes from './MainRoutes/AllRoutes';

function App() {
  return (
  <>
<div style={{backgroundColor:"#EEEEEE"}}>

<Navbar />
     <GoogleOAuthProvider clientId="369991425272-n1fpb6hpeds2mp83qef46ftqih1ah03g.apps.googleusercontent.com">
     
<AllRoutes />

  </GoogleOAuthProvider>
  <Footer />
</div>
    </>
  )

}

export default App;
