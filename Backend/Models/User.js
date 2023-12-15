const mongoose = require("mongoose")

const { Schema } = mongoose;

const UserSchema = new Schema({
    fullName:
    {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    location:
    {
        type: String,
        required: true
    },
    newID:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    date: 
    {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('user', UserSchema)