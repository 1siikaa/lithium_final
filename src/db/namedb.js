const mongoose = require('mongoose')
const nameSchema = new mongoose.Schema
({
    firstName : String,
    lastName : String,
    age : Number,
    gender : {
        type : String,
        required : true,
        enum : ["female", "LGBTQ", "male"]
    },
    emailId : {
        type: String,
        unique : true,
        required : true
    },
    mobile_no : { 
        type : String,
        unique : true,
        required : true

    }},
     { timestamps : true});

     module.exports = mongoose.model('Name', nameSchema)
