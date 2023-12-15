import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Screens/Home'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import AfterLoginUser from './Screens/AfterLoginUser'
import AfterLoginManager from './Screens/AfterLoginManager'
import Contactus from './Screens/Contactus'
import Dialogue from './Components/Dialogue'
import Particular_Card from './Components/Particular_Card'
const App = () => {
  return (
    <Router>  
    
      <Routes>

           
            
           
        {/*   <Route exact path="/myOrder" element={<MyOrder />}></Route>*/}
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
         <Route exact path="/dialogue" element={<Dialogue />}></Route> 
            <Route exact path="/contactus" element={<Contactus />}></Route> 
            <Route exact path="/afterLoginUser" element={<AfterLoginUser/>}></Route>
            <Route exact path="/afterLoginManager" element={<AfterLoginManager/>}></Route>
            <Route exact path="/particular" element={<Particular_Card/>}></Route>
        
           <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    

  </Router>
 
  )
}

export default App
