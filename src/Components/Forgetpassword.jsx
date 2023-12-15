import React from 'react'

const Forgetpassword = () => {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Forgot Password</title>
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n  body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background-color: #f4f4f4;\n  }\n\n  .container {\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n    width: 500px;\n  }\n\n  .container h2 {\n    margin-top: 0;\n  }\n\n  .form-group {\n    margin-bottom: 15px;\n  }\n\n  label {\n    display: block;\n    margin-bottom: 5px;\n  }\n\n  input[type="text"],\n  input[type="email"] {\n    width: 90%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n\n  button {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 3px;\n    cursor: pointer;\n  }\n\n  button:hover {\n    background-color: #0056b3;\n  }\n'
      }}
    />
    <div className="container">
      <h2>Forgot Password</h2>
      <form action="/getOtp" method="post">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="number"
            id="mobile"
            name="number"
            placeholder="Enter your mobile number"
            required=""
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </>
  
  )
}

export default Forgetpassword