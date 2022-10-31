const BookModel = require('../db/bookdb.js')
const AuthorModel = require('../db/authordb.js')
const PublisherModel = require('../db/publisherdb.js')
const lodash = require('lodash')
const { isValidObjectId } = require('mongoose')

const createPublisher = async function (req, res ){
    let information = req.body
    let storeInfo = await PublisherModel.create(information)
    res.send({msg: storeInfo})
}

const createBook = async function (req, res ){
    let data = req.body
    let{author_id, publisher_id}=data

    if(!author_id) res.send({msg: "this field is required"})
    if(!publisher_id) res.send({msg:"this field is required"})

    if(!isValidObjectId(author_id)) res.send({msg:"author_id is not a valid ObjectId"})
    if(!isValidObjectId(publisher_id)) res.send({msg:"publisher_id is not valid ObjectId"})

    let validAuthor = await AuthorModel.findById(data.author_id)
    if(!validAuthor)
    res.send({msg:"this author is not present"})

    let validPublisher = await PublisherModel.findById(data.publisher_id)
    if(!validPublisher) 
    res.send({msg:"this publisher is not present"})

    let saveData = await BookModel.create(data) 
    res.send({msg: saveData})
     }
 
     
     /*
const createBookWithError1 = async function (req, res ){
    let data1 = req.body
    let saveData1 = await BookModel.create(data1)
    if(saveData1.author_id && saveData1.publisher_id)
    res.send({msg: saveData1})
    else 
    res.send({msg: "this field is required."})
}

const createBookWithError2 = async function (req, res ){
    let data2 = req.body
    let saveData2 = await BookModel.create(data2)
    let authordata = await AuthorModel.find()
    let element
    let index
    for(let i=0; i<authordata.length; i++){
    element = authordata[i]
    index = element._id
    if(saveData2.author_id !== index) 
    res.send({msg: "sorry, this author is not present"})
    }
}

const createBookWithError3 = async function (req, res ){
    let data3 = req.body
    let saveData3 = await BookModel.create(data3)
    let publisherdata = await PublisherModel.find()
    let ele
    let ind
    for(let j=0; j<publisherdata.length; j++){
    ele = publisherdata[j]
    ind = ele._id
    if(saveData3.publisher_id !== ind) 
    res.send({msg: "sorry, this publisher is not present"})
    }
} */

const createAuthor = async function (req, res ){
    let info = req.body
    let storeData = await AuthorModel.create(info)
    res.send({msg: storeData})
}

const bookList = async function (req, res){
let getauthor = await BookModel.find().populate('author_id').populate('publisher_id')
res.send({msg: getauthor})
}

const modifyBook = async function(req, res){
    let updates = await BookModel.updateMany({publisherName:{ $in:["Penguin", "HarperCollins"]}})
    let 
}
module.exports.createPublisher=createPublisher
module.exports.createBook = createBook
module.exports.modifyBook = modifyBook
module.exports.createAuthor= createAuthor
module.exports.bookList = bookList
