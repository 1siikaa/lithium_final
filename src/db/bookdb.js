const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const bookishSchema = new mongoose.Schema
({
    bookName: String,
    author_id : {type:ObjectId,
        ref: 'NewAuthor',
        required: true
    },
    price: String,
    ratings : Number,
    publisher_id: {
        type: ObjectId,
        ref: 'Publisher',
        required:true
    },
    isHardCover : Boolean
    },
     { timestamps : true});

     module.exports = mongoose.model('NewBook', bookishSchema)
