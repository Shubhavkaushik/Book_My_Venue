import React from 'react';
import { useState , useEffect} from 'react';
import Navbar2 from '../Components/Navbar2';
import {  useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
// import '../CSS/Afterloginmanager.css'

const AfterLoginManager = () => {
const abc ={
  backgroundColor:"yello"
}




  const navigate = useNavigate();
  const [imageURL1, setImageURL1] = useState('');
  const [imageURL2, setImageURL2] = useState('');
  const [imageURL3, setImageURL3] = useState('');
  const [imageURL4, setImageURL4] = useState('');
  const [imageURL5, setImageURL5] = useState('');
  const [Name , setName]= useState('');
  const [banquetType , setBanquetType]= useState('');
  const [location , setLocation]= useState('');
  const [capacity , setCapacity]= useState('');
  const [banquet_name , setbanquet_name]= useState('');
  const [description , setDescription]= useState('');
 
  useEffect(() => {
    if(!localStorage.getItem('authToken'))
    { 
      navigate("/login")
    }
 
  })
  
  const handleImageUpload = async (e) => {
    e.preventDefault(); 
 const file = e.target.files[0];
 const dataURL = await covertToBase64(file)
 console.log(dataURL);
    if (e.target.name === "image1"){setImageURL1(dataURL)} 
     else if (e.target.name === "image2") { setImageURL2(dataURL) }
     else if (e.target.name === "image3") { setImageURL3(dataURL) }
     else if (e.target.name === "image4") { setImageURL4(dataURL) }
     else { setImageURL5(dataURL) }
 
  }

  const handleClick = async (e) => {
    e.preventDefault()
     const response = await fetch("http://localhost:4444/managerData", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ Image1: imageURL1,Image2:imageURL2,Image3:imageURL3,Image4:imageURL4,Image5:imageURL5,Name:Name,Banquet_Type:banquetType,capacity:capacity,location:location,description:description,banquet_name:banquet_name})
     })

    
  }

  return (
    <>
    <Navbar2></Navbar2>
    <div className="center-content">
      
       <div>
      <>
     
     
      <div className="background-container" style={{}}>
        <title>Event Form</title>
        <h1 style={{ color: 'blue', textAlign: 'center' }}>Event Registration Form</h1>
        <div
          className="ui-state-default ui-corner-all"
          title=".ui-icon-mail-closed"
          style={{ backgroundColor: 'lightblue' }}
        >
          <span className="ui-icon ui-icon-mail-closed" />
        </div>
        <div
          className="ui-state-default ui-corner-all"
          title=".ui-icon-check"
          style={{ backgroundColor: 'lightgreen' }}
        >
          <span className="ui-icon ui-icon-check" />
        </div>
        <div
          className="ui-state-default ui-corner-all"
          title=".ui-icon-plusthick"
          style={{ backgroundColor: 'lightyellow' }}
        >
          <span className="ui-icon ui-icon-plusthick" />
        </div>
        
        <form className="form-container">
          <label htmlFor="images">Select 1 Images:</label>
          <input type="file" name="image1" accept =".jpeg,.png,.jpg" resizeMode='contain' onChange={handleImageUpload} />
          {imageURL1 && (
            <div style={{display:"flex"}}>
              <h3>Uploaded Image:</h3>
              <img src={imageURL1} alt="Uploaded" width="200" />
            </div>
          )}
          <br />
          <br />
          <label htmlFor="images">Select 2 Images:</label>
          <input type="file" id="images" name="image2" accept=".jpeg,.png,.jpg" onChange={handleImageUpload}/>
          {imageURL2 && (
            <div style={{display:"flex"}}>
              <h3>Uploaded Image:</h3>
              <img src={imageURL2} alt="Uploaded" width="200" />
            </div>
          )}
          <br />
          <br />
          <label htmlFor="images">Select 3 Images:</label>
          <input type="file" id="images" name="image3" accept=".jpeg,.png,.jpg" onChange={handleImageUpload} />
          {imageURL3 && (
            <div style={{display:"flex"}}>
              <h3>Uploaded Image:</h3>
              <img src={imageURL3} alt="Uploaded" width="200" />
            </div>
          )}
          <br />
          <br />
          <label htmlFor="images">Select 4 Images:</label>
          <input type="file" id="images" name="image4" accept=".jpeg,.png,.jpg"onChange={handleImageUpload} />
          {imageURL4 && (
            <div style={{display:"flex"}}>
              <h3>Uploaded Image:</h3>
              <img src={imageURL4} alt="Uploaded" width="200" />
            </div>
          )}
          <br />
          <br />
          <label htmlFor="images">Select 5 Images:</label>
          <input type="file" id="images" name="image5" accept=".jpeg,.png,.jpg" onChange={handleImageUpload}/>
          {imageURL5 && (
            <div style={{display:"flex"}}>
              <h3>Uploaded Image:</h3>
              <img src={imageURL5} alt="Uploaded" width="200" />
            </div>
          )}
          <br />
          <br />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required="" onChange={(e)=>{setName(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="banquetType">Banquet Type:</label>
          <select id="banquetType" value={banquetType} name="banquetType" required="" onChange={(e)=>{setBanquetType(e.target.value)}}>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="both">Both</option>
          </select>
          <br />
          <br />
          <label htmlFor="location">Location:</label>
          {/* <input type="text" id="location"  required=""   />
          <label htmlFor="stateDropdown">Select State:</label> */}
      <select
        name="location"
        id="stateDropdown"
        value={location}
        onChange={(e)=>{setLocation(e.target.value)}}
      >  
        <option value="">Select State</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Delhi">Delhi</option>
        <option value="Puducherry">Puducherry</option>
      </select>
      {location && <p>You selected: {location}</p>}
          
          <br />
          <br />
          <label htmlFor="capacity">Capacity:</label>
          <input type="number" id="capacity" name="capacity" required="" onChange={(e)=>{setCapacity(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="name">Banquet Name:</label>
          <input type="text" id="name" name="banquet_name" required="" onChange={(e)=>{setbanquet_name(e.target.value)}}/>
          <br/>
          <br/>
          <label htmlFor="capacity">Description:</label>
          <textarea name="description" onChange={(e)=>{setDescription(e.target.value)}}>Enter Description here...</textarea>
          
          <button type="submit" onClick={handleClick} >Submit</button>
        </form> </div>
      </>
   

    </div>
    </div>
    <Footer></Footer>
  </>
    
  );
};


export default AfterLoginManager;

function covertToBase64(file){
 return new Promise((resolve,reject)=>{
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file);
  fileReader.onload=()=>{
    resolve(fileReader.result)
  };
  fileReader.onerror = (error)=>{
    reject(error)
  }
 })
}
