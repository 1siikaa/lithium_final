const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const bookishSchema = new mongoose.Schema
({
    bookName: String,
    author_id : {type:ObjectId,
        ref: 'Composer',
    },
    },
     { timestamps : true});

     module.exports = mongoose.model('Novel', bookishSchema)
