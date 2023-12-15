const mongoose = require("mongoose")

const { Schema } = mongoose;

const DatabaseSchema = new Schema({
    Image1:
    {
        type: Buffer,
        //required: true
    },
    Image2:
    {
        type: Buffer,
       // required: true
    },
    Image3:
    {
        type: Buffer,
        //required: true
    },
    Image4:
    {
        type: Buffer,
        //required: true
    },
    Image5:
    {
        type: Buffer,
        //required: true
    },
    Name:{
        type: String,
        required: true
    },
    Banquet_Type:
    {
        type: String,
        required: true
    },
    capacity:
    {
        type: String,
        required: true
    },
    location:
    {
        type: String,
        required: true
    },
    banquet_name:
    {
        type: String,
        required: true
    },   
    description:
    {
        type: String,
        required: true
    },      
    date: 
    {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('managerDb', DatabaseSchema)
