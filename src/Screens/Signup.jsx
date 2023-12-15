import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const Signup = () => {
 

  const [fullName, setfullName] = useState("")
  const [category, setcategory] = useState("")
  const [location, setlocation] = useState("")
  const [newID, setnewID] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) 
     alert("Password and ConfirmPassword not Match")


    else {
    
      const response = await fetch("http://localhost:4444/SignupData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName: fullName, password: password ,phoneNumber:phoneNumber,newID:newID,
          confirmpassword:confirmpassword,category:category,location:location})
      })

      const data = await response.json()
     
      if (data === "User Exist")
      { alert("User Exist")}
    
      
    
    }
  }


  return (
    <div><>
      <title>BookmyVenue</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    /* CSS styling for the form */\n        @import url(\'https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:ital,wght@0,300;1,700&display=swap\');\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    font-family:"Poppins",sans-serif;\n}\nheader{\n    z-index: 999;\n    position: absolute;\n    top:0;\n    left:0;\n    width:100%;\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n    padding: 15px 200px;\n    transition:0.5s ease;\n}\nheader .brand{\n    color: white;\n    font-size:1.5em;\n    font-weight:700;\n    text-transform: uppercase;\n    text-decoration: none;\n}\nheader .navigation{\n    position: relative;\n}\nheader .navigation .navigation-items a{\n    position: relative;\n    color:white;\n    font-size:1em;\n    font-weight: 500;\n    text-decoration: none;\n    margin-left:30px;\n    transition:0.3s ease;\n}\nheader .navigation .navigation-items a:before{\n    content:\'\';\n    position: absolute;\n    background-color: white;\n    width:0;\n    height:3px;\n    bottom:0;\n    left:0;\n    transition: 0.3s ease;\n}\n\nheader .navigation .navigation-items a:hover:before{\n    width:100%;\n}\n@media(max-width: 1040px){\n    header{\n        padding: 12px 20px;\n    }\n    section{\n        padding:100px 20px;\n    }\n    .home .media-icons{\n        right:15px;\n    }\n    header .navigation{\n        display: none;\n        /* width:100%;\n        height:100vh;\n        top:0;\n        left:0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(1, 1, 1, 0.5); */\n    }\n    header .navigation.active{\n        display: none;\n        width:100%;\n        height:100vh;\n        top:0;\n        left:0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(1, 1, 1, 0.5);\n    }\n    header .navigation .navigation-items a{\n        color:white;\n        font-size:1.2em;\n        margin:20px;\n    }\n    header .navigation .navigation-items a:before{\n        background: #222;\n        height:5px;\n    }\n    header .navigation.active .navigation-items {\n        background: rgb(30, 224, 224);\n        width:600px;\n        max-width: 600px;\n        margin:20px;\n        padding:40px;\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 5px;\n        box-shadow: 0 5px 25px rgb(1 1 1 / 20%);\n    }\n    .menu-btn{\n        background: url(menu.png);\n        background-size:30px;\n        background-position:center;\n        width: 30px;\n        height: 30px;\n        cursor:pointer;\n        transition: 0.3s ease; \n    }\n    .menu-btn.active{\n        z-index:999;\n        background: url(close.png) no-repeat;\n        background-size:25px ;\n        /* background-position: center; */\n        width:30px;\n        height:30px;\n        cursor:pointer;\n        transition: 0.3s ease;\n    }\n }\n    body {\n      background-image: url(\'background-image.jpg\'); /* Replace with your background image */\n      background-size: cover;\n      background-repeat: no-repeat;\n      display: flex;\n      background: rebeccapurple;\n      justify-content: center;\n      align-items: center;\n      height: 150vh;\n    }\n    \n    .signup-form {\n            border-radius: 5px;\n\n      min-width: 400px;\n      padding: 20px;\n      background-color: rgba(255, 255, 255, 0.7); /* Transparent background */\n    }\n    \n    .signup-form label {\n      display: block;\n      margin-bottom: 10px;\n    }\n    \n    .signup-form input[type="text"], .category,\n           .signup-form input[type="number"],\n      .signup-form input[type="email"],\n    .signup-form input[type="password"] {\n      width: 100%;\n      padding: 10px;\n      border: none;\n      border-radius: 5px;\n      margin-bottom: 20px;\n    }\n    \n    .signup-form button {\n      background-color: #4CAF50;\n      color: white;\n      padding: 10px 20px;\n      border: none;\n      cursor: pointer;\n    }\n\n    .title{\n        text-align: center;\n    }\n    .alert{\n        text-align: center;\n        color: red;\n        text-size-adjust: 50px;\n    }\n\n    \n\n  '
        }}
      />
      <header>
        <a to="#" className="brand">
          Book_my_Venue
        </a>
        <div className="menu-btn" />
        <div className="navigation">
          <div className="navigation-items">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
      </header>
      <br /><br></br>
     
      <div className="signup-form">
        <div className="alert">
        </div>
        <h2 className="title">
          Welcome <br />
          Sign Up
        </h2>
        <form method="post" action="/SignupData">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required=""
            placeholder="Enter your username"
            onChange={(e) => setfullName(e.target.value)}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            minLength={10}
            name="phoneNumber"
            required=""
            maxLength={10}
            placeholder="Enter your Phone_number"
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <label htmlFor="category">Category</label>
          <select className="category " name="category" value={category} onChange={(e) => setcategory(e.target.value)}>
            <option hidden="" selected="">
              Select a category
            </option>
            <option value="user" type="text">
              Looking for Banquet
            </option>
            <option value="manager" type="text">
              Add Banquet
            </option>
          </select>
          <label htmlFor="newID">New ID</label>
          <input
            type="email"
            id="newID"
            name="newID"
            required=""
            placeholder="Enter your New User ID"
            onChange={(e) => setnewID(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required=""
            placeholder="Enter your Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            required=""
            placeholder="Re-enter your Password"
            onChange={(e) => setconfirmpassword(e.target.value)}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            required=""
            placeholder="Enter your location"
            onChange={(e) => setlocation(e.target.value)}
          />
          <h4>
            Existing User ? <Link to="/login">Login</Link>
          </h4>
         
          <button type="submit" onClick={handleClick}>Signup</button>
        </form>
        
      </div>
    </>
    </div>
  )
}

export default Signup