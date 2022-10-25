const BookModel = require('../db/bookdb.js')
const createBook = async function (req, res ){
    let data = req.body
    let saveData = await NameModel.create(data)
    res.send({msg: saveData})
}

const bookList = async function (req, res){
    let getdata = await NameModel.find({firstName : "1siikaa"})
    res.send({msg: getdata})
}

const getBooksInYear = async function (req, res){
    let getdata = await NameModel.find({firstName : "1siikaa"})
    res.send({msg: getdata})
}

const getParticularBooks = async function (req, res){
    let getdata = await NameModel.find({firstName : "1siikaa"})
    res.send({msg: getdata})
}

const getXINRBooks = async function (req, res){
    let getdata = await NameModel.find({firstName : "1siikaa"})
    res.send({msg: getdata})
}

const getRandomBooks = async function (req, res){
    let getdata = await NameModel.find({firstName : "1siikaa"})
    res.send({msg: getdata})
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks