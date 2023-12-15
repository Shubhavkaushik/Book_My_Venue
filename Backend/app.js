const path = require('path');
const request = require("./routes/routes");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4444;
const { ppid } = require('process');
const { mongoConnect } = require('./db.js');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({extended: false}));

app.use("/",request);
app.use("/signup",request);
app.use("/login",request);
app.use("/contactus",request);
app.use("/forgetpassword",request);
app.use("/SignupData",request);
app.use("/LoginData",request);
app.use("/Sorry",request);
app.use("/dummy",request);
app.use("/getOtp",request);
app.use("/managerData",request);
app.use("/getdata",request)
app.use(fileUpload());
mongoConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('http://localhost:' + PORT);
        });
    })