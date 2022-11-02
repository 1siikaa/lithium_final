const mongoose = require('mongoose')
const OrderModel = require('../db/orderdb.js')
const UserModel = require('../db/userdb.js')
const productSchema = new mongoose.Schema
({
    
	name: String,
	category: String,
	price:{
        type: Number,
        required: true
    }
}
  ,
     { timestamps : true});

     module.exports = mongoose.model('Product', productSchema)
