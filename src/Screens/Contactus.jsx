import React from 'react'

const Contactus = () => {
  return (
    <>
  <title>BookmyVenue</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:ital,wght@0,300;1,700&display=swap');\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    font-family:\"Poppins\",sans-serif;\n}\n    body {\n      background-color: transparent;\n                 background: rebeccapurple;\n\n      font-family: Arial, sans-serif;\n    }\n    \n    .container {\n      max-width: 600px;\n      margin: 0 auto;\n      padding: 20px;\n      background-color: rgba(255, 255, 255, 0.8);\n      border-radius: 10px;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    }\n    \n    h1 {\n      text-align: center;\n    }\n    \n    .form-group {\n      margin-bottom: 20px;\n    }\n    \n    .form-group label {\n      display: block;\n      font-weight: bold;\n      margin-bottom: 5px;\n    }\n    \n    .form-group input[type=\"text\"],\n    .form-group textarea {\n      width: 100%;\n      padding: 8px;\n      border-radius: 4px;\n      border: 1px solid #ccc;\n      box-sizing: border-box;\n    }\n    \n    .form-group textarea {\n      height: 120px;\n    }\n    \n    .form-group button {\n      background-color: #4CAF50;\n      color: white;\n      border: none;\n      padding: 10px 20px;\n      font-size: 16px;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n    \n    .form-group button:hover {\n      background-color: #45a049;\n    }\n\nheader{\n    z-index: 999;\n    position: absolute;\n    top:0;\n    left:0;\n    width:100%;\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n    padding: 15px 200px;\n    transition:0.5s ease;\n}\nheader .brand{\n    color: white;\n    font-size:1.5em;\n    font-weight:700;\n    text-transform: uppercase;\n    text-decoration: none;\n}\nheader .navigation{\n    position: relative;\n}\nheader .navigation .navigation-items a{\n    position: relative;\n    color:white;\n    font-size:1em;\n    font-weight: 500;\n    text-decoration: none;\n    margin-left:30px;\n    transition:0.3s ease;\n}\nheader .navigation .navigation-items a:before{\n    content:'';\n    position: absolute;\n    background-color: white;\n    width:0;\n    height:3px;\n    bottom:0;\n    left:0;\n    transition: 0.3s ease;\n}\n\nheader .navigation .navigation-items a:hover:before{\n    width:100%;\n}\n    @media(max-width: 1040px){\n    header{\n        padding: 12px 20px;\n    }\n    section{\n        padding:100px 20px;\n    }\n    .home .media-icons{\n        right:15px;\n    }\n    header .navigation{\n        display: none;\n        /* width:100%;\n        height:100vh;\n        top:0;\n        left:0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(1, 1, 1, 0.5); */\n    }\n    header .navigation.active{\n        display: none;\n        width:100%;\n        height:100vh;\n        top:0;\n        left:0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(1, 1, 1, 0.5);\n    }\n    header .navigation .navigation-items a{\n        color:white;\n        font-size:1.2em;\n        margin:20px;\n    }\n    header .navigation .navigation-items a:before{\n        background: #222;\n        height:5px;\n    }\n    header .navigation.active .navigation-items {\n        background: rgb(30, 224, 224);\n        width:600px;\n        max-width: 600px;\n        margin:20px;\n        padding:40px;\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 5px;\n        box-shadow: 0 5px 25px rgb(1 1 1 / 20%);\n    }\n    .menu-btn{\n        background: url(menu.png);\n        background-size:30px;\n        background-position:center;\n        width: 30px;\n        height: 30px;\n        cursor:pointer;\n        transition: 0.3s ease; \n    }\n    .menu-btn.active{\n        z-index:999;\n        background: url(close.png) no-repeat;\n        background-size:25px ;\n        /* background-position: center; */\n        width:30px;\n        height:30px;\n        cursor:pointer;\n        transition: 0.3s ease;\n    }\n }\n  "
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
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="container">
    <h1>Contact Us</h1>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required=""
          defaultValue={""}
        />
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</>
  )
}

export default Contactus