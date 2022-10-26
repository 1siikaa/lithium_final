const BookModel = require('../db/bookdb.js')
const createBook = async function (req, res ){
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send({msg: saveData})
}

const bookList = async function (req, res){
    let getdata = await BookModel.find().select({bookName:1, authorName:1, _id:0,tags:0, indianPrice:0, europePrice:0, year:0, totalPages:0, stockAvailable:0})
    res.send({msg: getdata})
}

const getBooksInYear = async function (req, res){
    let year = req.query.year
    let getyear = await BookModel.find({year : year})
    res.send({msg: getyear})
}

const getParticularBooks = async function (req, res){
    let bn = req.query.bn
    let ip = req.query.ip
    let ep = req.query.ep
    let an = req.query.an
    let t  = req.query.t
    let y =  req.query.y
    let tp = req.query.tp
    let sa = req.query.sa
    let getparticulardata = await BookModel.find({$or:[{bookName : bn},{year: y}, {stockAvailable: sa},{europePrice:ep}, {tags:t}, {authorName:an},{indianPrice:ip},{totalPages:tp},{stockAvailable : sa}]})
    res.send({msg: getparticulardata})
}

const getXINRBooks = async function (req, res){
    let getpricedata = await BookModel.find({
        indianPrice:{$in:['100INR', '200INR', '500INR']}
    })
    res.send({msg: getpricedata})
}

const getRandomBooks = async function (req, res){
    let getrandomdata = await BookModel.find({
        $or:[{stockAvailable: true},{totalPages:{$gt:500}}]
    })
    res.send({msg: getrandomdata})
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks