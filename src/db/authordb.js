const mongoose = require('mongoose')
const authorishSchema = new mongoose.Schema
({
    
    authorName : String,
    age: Number},
    { timestamps : true});

     module.exports = mongoose.model('Composer', authorishSchema)
