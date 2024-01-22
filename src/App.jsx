import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Screens/Home'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import AfterLoginUser from './Screens/AfterLoginUser'
import AfterLoginManager from './Screens/AfterLoginManager'
import Contactus from './Screens/Contactus'
import Particular_Card from './Screens/Particular_Card'
import Knowmore from './Screens/Knowmore'
import Testpage from './Screens/Testpage'
import { CartProvider } from './Components/Contextreducer'

const App = () => {
  return (
   
 <CartProvider>
   <Router>  
    <Routes>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/test" element={<Testpage />}></Route>

          <Route exact path="/contactus" element={<Contactus />}></Route> 
          <Route exact path="/afterLoginUser" element={<AfterLoginUser/>}></Route>
          <Route exact path="/afterLoginManager" element={<AfterLoginManager/>}></Route>
          <Route exact path="/particular" element={<Particular_Card/>}></Route>
          <Route exact path="/knowmore" element={<Knowmore/>}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
         <Route exact path="/" element={<Home/>}></Route>
    </Routes>
</Router>
 </CartProvider>
  )
}

export default App
