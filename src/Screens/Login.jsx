import React, { useState ,Link} from 'react'
import { useNavigate } from 'react-router-dom'
 const Login = () => {
 
  
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate = useNavigate();
  const  submitData=async(e)=>{
    e.preventDefault()

 const response =await fetch("http://localhost:4444/LoginData", {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username: email, password: password })
})

const data = await response.json()
console.log(data);
if(!data.success)
{alert("User Not Found or Wrong Password");}

else{
if (data.category === "manager") {
  localStorage.setItem("authToken", data.authToken);
  navigate("/afterLoginManager");
}

else{
  localStorage.setItem("authToken", data.authToken);
  navigate("/afterLoginUser");}
 

}
  }
  return (
    <div><>
    <title>BookmyVenue</title>
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n      @import url(\'https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:ital,wght@0,300;1,700&display=swap\');\n\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: "Poppins", sans-serif;\n      }\n\n      body {\n        margin: 0;\n        padding: 0;\n        background-size: cover;\n        background-position: center;\n        background: rebeccapurple;\n      }\n\n      .container {\n        max-width: 400px;\n        margin: 100px auto;\n        padding: 20px;\n        background-color: rgba(255, 255, 255, 0.5);\n        border-radius: 5px;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n      }\n\n      h2 {\n        text-align: center;\n      }\n\n      .form-group {\n        margin-bottom: 15px;\n      }\n\n      label {\n        display: block;\n        margin-bottom: 5px;\n        font-weight: bold;\n      }\n\n      input[type="email"],\n      input[type="password"] {\n        width: 100%;\n        padding: 10px;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        box-sizing: border-box;\n      }\n\n      .btn {\n        display: block;\n        width: 100%;\n        padding: 10px;\n        background-color: #4CAF50;\n        color: #fff;\n        text-align: center;\n        text-decoration: none;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n      }\n\n      .btn:hover {\n        background-color: #45a049;\n      }\n\n      header {\n        z-index: 999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 15px 200px;\n        transition: 0.5s ease;\n      }\n\n      header .brand {\n        color: white;\n        font-size: 1.5em;\n        font-weight: 700;\n        text-transform: uppercase;\n        text-decoration: none;\n      }\n\n      header .navigation {\n        position: relative;\n      }\n\n      header .navigation .navigation-items a {\n        position: relative;\n        color: white;\n        font-size: 1em;\n        font-weight: 500;\n        text-decoration: none;\n        margin-left: 30px;\n        transition: 0.3s ease;\n      }\n\n      header .navigation .navigation-items a:before {\n        content: \'\';\n        position: absolute;\n        background-color: white;\n        width: 0;\n        height: 3px;\n        bottom: 0;\n        left: 0;\n        transition: 0.3s ease;\n      }\n\n      header .navigation .navigation-items a:hover:before {\n        width: 100%;\n      }\n\n      @media(max-width: 1040px) {\n        header {\n          padding: 12px 20px;\n        }\n\n        section {\n          padding: 100px 20px;\n        }\n\n        .home .media-icons {\n          right: 15px;\n        }\n\n        header .navigation {\n          display: none;\n          /* width:100%;\n        height:100vh;\n        top:0;\n        left:0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(1, 1, 1, 0.5); */\n        }\n\n        header .navigation.active {\n          display: none;\n          width: 100%;\n          height: 100vh;\n          top: 0;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background: rgba(1, 1, 1, 0.5);\n        }\n\n        header .navigation .navigation-items a {\n          color: white;\n          font-size: 1.2em;\n          margin: 20px;\n        }\n\n        header .navigation .navigation-items a:before {\n          background: #222;\n          height: 5px;\n        }\n\n        header .navigation.active .navigation-items {\n          background: rgb(30, 224, 224);\n          width: 600px;\n          max-width: 600px;\n          margin: 20px;\n          padding: 40px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          border-radius: 5px;\n          box-shadow: 0 5px 25px rgb(1 1 1 / 20%);\n        }\n        .alert{\n          text-align: center;\n          color: red; !important\n        }\n    '
      }}
    />
    <header>
      <a href="#" className="brand">
        Book_my_Venue
      </a>
      <div className="menu-btn" />
      <div className="navigation">
        <div className="navigation-items">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">SignUp</a>
          <a href="/contactus">Contact Us</a>
        </div>
      </div>
    </header>
    <div className="container">
      <h2>Welcome back</h2>
      <h2>Login</h2>
      <div>
        <h2 className="alert">
         
        </h2>
      </div>
      <form >
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Enter your username"
            required=""
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" >Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required=""
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

          />
        </div>
        <h4>
          New User ? <a href="/signup">Sign Up</a>
        </h4>
        <br />
        <h4>
          Forget Password? <a href="/forgetpassword">Forget Password</a>
        </h4>
        <br />
        <button type="submit" className="btn" onClick={submitData}>
          Login
        </button>
      </form>
    </div>
  </>
  </div>
  )
}

export default Login;


// axios.post('http://192.168.29.228:4444/LoginData', email,password)
// .then((response) => {
//   // Handle the successful response here
//   console.log(response);
// })
// .catch((error) => {
//   // Handle any errors that occurred during the request
//   console.error('Error:', error);
// });