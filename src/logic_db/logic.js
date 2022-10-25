const BookModel = require('../db/mydb.js')

const createBooks = async function (req, res) {
    let data= req.body
    let storeData = await BookModel.create(data)
    res.send({msg: storeData})
}

const getBooks = async function (req, res) {
    let listOfBooks = await BookModel.find()
    res.send({msg: listOfBooks})
}

module.exports.addBook = createBooks
module.exports.fetchBook = getBooks



