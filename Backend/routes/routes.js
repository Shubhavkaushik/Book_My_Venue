const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const collections = require('mongodb')
const User = require('../Models/User')
const managerDb = require('../Models/managerDb')
const jwtSecret = "thisprojectiscompletedunderorbytheblessingofjaishreeram";
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcryptjs');


const storage = multer.diskStorage({
  destination: './uploads1',
  filename: function (req, file, cb) {

    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({ storage: storage });




router.post("/managerData",   (req, res)=> {
  console.log(req.body)
  let Image1 = req.body.Image1;
  let Image2 =req.body.Image2;
  let Image3 = req.body.Image3;
  let Image4 = req.body.Image4;
  let Image5 = req.body.Image5;
  let Banquet_Type = req.body.Banquet_Type;
  let capacity = req.body.capacity;
  let location = req.body.location;
  let Name = req.body.Name;
  let description= req.body.description;
  let banquet_name= req.body.banquet_name;


  managerDb.create({
     Image1, Image2, Image3, Image4, Image5, location, capacity,Banquet_Type,Name,banquet_name,description
   });

 
});

router.post("/SignupData", async (req, res) => {

  try {
    let fullName = req.body.fullName;
    let phoneNumber = req.body.phoneNumber;
    let newID = req.body.newID;
    let password = req.body.password;
    let confirmpassword = req.body.confirmpassword;
    let category = req.body.category;
    let location = req.body.location;
   


    let userData = await User.findOne({ newID: newID })
    if (userData) {
      res.json('User Exist');

    }
    else {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(confirmpassword,salt);
      await User.create({
        fullName, phoneNumber, newID, password, location, category
      });
      //     const data ={
      //       user:{
      //           id:userData._id
      //       }}

      // const authToken= jwt.sign(data,jwtSecret);
      // return res.render('login',{success:true,authToken:authToken});

      //     res.render('login');

    }
  } catch (error) {
    res.json('Error');
  }
})


router.post('/LoginData', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;


  const userData = await User.findOne({ newID: username })
  if (!userData) {
    res.status(400).json({error:"User Not Found"})
  }

  else if (userData) {
    const confpassword = await bcrypt.compare(password,userData.password);
    if (!confpassword) {
      {
        res.status(400).json({error:"Wrong UserName or Password"})
      }

    }
    else if(confpassword) {
      const data = {user:{id:userData._id}}
      const authToken = jwt.sign(data,jwtSecret,{expiresIn: '24h'});
      const category = userData.category;
      res.json({success: true,authToken,category});
    }
  }

 
})

router.get("/getdata",async(req,res)=>{
  let arr = [global.banquet_item,global.StateCategories];
  res.json(arr)
})


module.exports = router;
