const mongoose = require('mongoose')
const ProductModel = require('../db/productdb.js')
const OrderModel = require('../db/orderdb.js')
const userSchema = new mongoose.Schema
({
    
    name: String,
	balance:{
        type: Number,
        default:100
    },
	address:String,
	age: Number,
 	gender: {
        type:String,
        enum: ["male", "female", "others"]
    },
	isFreeAppUser: {
              type: Boolean,
              default: false
    } 
}, 
    
    { timestamps : true});

     module.exports = mongoose.model('User', userSchema)