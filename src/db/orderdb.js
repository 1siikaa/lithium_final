const mongoose = require('mongoose')
const ProductModel = require('../db/productdb.js')
const UserModel = require('../db/userdb.js')
const orderSchema = new mongoose.Schema

({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
	productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: Date},
    
    { timestamps : true});

     module.exports = mongoose.model('Order', orderSchema)
