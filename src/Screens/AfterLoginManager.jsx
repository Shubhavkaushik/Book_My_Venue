import React from 'react';
import { useState , useEffect} from 'react';
import background from "../CSS/background.jpg";
import Footer from '../Components/Footer';
import Navbar2 from '../Components/Navbar2';
import {  useNavigate } from 'react-router-dom';
// import '../CSS/Afterloginmanager.css'
const AfterLoginManager = () => {
  const formstyle={ color: 'rgb(84 6 70)',fontFamily:'sans-serif',fontSize:'18px',fontStyle:'Italic',textShadow:'2px 2px 10px'}
  const inputstyle={width:'300px',border:'1px solid #ddd', borderRadius:'3px',outline:'0',padding:'7px',backgroundColor:'#fff',boxShadow:'inset 1px 1px 5px rgba(0 ,0 ,0 ,0.3)'}
  const navigate = useNavigate();
  const [imageURLs, setImageURLs] = useState(['', '', '', '', '']);
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
  const handleImageUpload = async (e, index) => {
    e.preventDefault();
    const file = e.target.files[0];
    const dataURL = await covertToBase64(file);
    const updatedImageURLs = [...imageURLs];
    updatedImageURLs[index] = dataURL;
    setImageURLs(updatedImageURLs);
  };


  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4444/managerData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Images: imageURLs,
        Name,
        Banquet_Type: banquetType,
        capacity,
        location,
        description,
        banquet_name
      })
    });
  };
  return (
    <>
    <div><Navbar2></Navbar2></div>
    <br></br>
    <br></br>
  
    <div className="center-content">
       <div>
      <>
      <div className="background-container" style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%"}}>
        <title>Event Form</title>
        <h1 style={{ color: '#0d0e2e', textAlign: 'center', fontStyle: 'italic'}}>Event Registration Form</h1>

        <form className="form-container" style={{  maxWidth: '600px',  padding: '20px', borderRadius: '10px', margin :'0px 0px 0px 359px',backgroundColor: 'rgba(148,188,189,0.5)' }}>
          
          <label htmlFor="name" style={formstyle}>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input style={inputstyle} type="text" id="name" name="name" placeholder="Enter your Name" required="" onChange={(e)=>{setName(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="banquetType" style={formstyle}>Banquet Type:&nbsp;&nbsp;</label>
          <select style={inputstyle} id="banquetType" value={banquetType} name="banquetType" required="" onChange={(e)=>{setBanquetType(e.target.value)}}>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="both">Both</option>
          </select>
          <br />
          <br />
          <label htmlFor="location" style={formstyle}>Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          {/* <input type="text" id="location"  required=""   />
          <label htmlFor="stateDropdown">Select State:</label> */}
      <select style={inputstyle}
        name="location"
        id="location"
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
          <label htmlFor="capacity" style={formstyle}>Capacity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input style={inputstyle} placeholder="Enter Number of person" type="number" id="capacity" name="capacity" required="" onChange={(e)=>{setCapacity(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="banquetname" style={formstyle}>Banquet Name:</label>
          <input style={inputstyle} placeholder="Enter Banquet Name" type="text" id="banquetname" name="banquet_name" required="" onChange={(e)=>{setbanquet_name(e.target.value)}}/>
          <br/>
          <br/>
          <label htmlFor="description" style={formstyle}>Description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <textarea style={inputstyle} placeholder="Description of the Banquet " name="description" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
          
          
          <br/>
          {imageURLs.map((url, index) => (
                <React.Fragment key={index}>
                  <br />
                  <label style={formstyle} htmlFor={`image${index + 1}`} >Select Image {index + 1}:</label>
                  <input style={{width:'87px',border:'1px solid #ddd', borderRadius:'3px',outline:'0',padding:'3px',backgroundColor:'#fff',boxShadow:'inset 1px 1px 5px rgba(0 ,0 ,0 ,0.3)'}} type="file" id={`image${index + 1}`} name={`image${index + 1}`} accept=".jpeg,.png,.jpg" onChange={(e) => handleImageUpload(e, index)} />
                  {url && (
                    <div style={{ display: "flex" }}>
                      <h3>Uploaded Image:</h3>
                      <img src={url} alt={`Uploaded ${index + 1}`} width="200" />
                    </div>
                  )}
                </React.Fragment>
              ))}
          <br />
          <button style={{ width:'100px',fontFamily:'sans-serif',borderRadius:'3px', backgroundColor:'pink',padding:'7px',fontSize:'16px',fontWeight:'600',cursor:'pointer',border:'1px solid',boxShadow:'1px 1px 5px'}} type="submit" onClick={handleClick} >Submit</button>
        </form> </div>
      </>
    </div><Footer></Footer>
    </div>
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
