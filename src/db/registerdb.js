const mongoose = require('mongoose')
const registerSchema = new mongoose.Schema
({
    firstName: String,
    lastName : String,
     mobile: String,
    emailId : String,
    password :String,
    gender : {
        type: String,
        enum: ["male", "female", "others"]
    },
	isDeleted:{
        type: Boolean,
        default: false

    } ,
    age : Number},
    { timestamps : true});

     module.exports = mongoose.model('Register', registerSchema)