const BookModel = require('../db/bookdb.js')
const AuthorModel = require('../db/authordb.js')
const lodash = require('lodash')


const createBook = async function (req, res ){
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send({msg: saveData})
}

const createAuthor = async function (req, res ){
    let info = req.body
    let storeData = await AuthorModel.create(info)
    res.send({msg: storeData})
}



const bookList = async function (req, res){
    
    let getauthor = await AuthorModel.find().populate('author_id')
res.send({msg: getauthor})
}

const findBookPrice = async function (req, res){
    let findBook = await BookModel.findOneAndUpdate({bookName : "2 States"},
    {$set:{price: 100}},
    {new:true})
    let ids=findBook.author_id
    console.log(ids)
    let respond
    let start = []
    let findAuthor = await AuthorModel.find()
    respond = findAuthor.filter((fill)=>fill.author_id==ids)
    start.push(respond)
    res.send({msg: start})

}

const findCost = async function (req, res){
    let findBookCost = await BookModel.find({price:{$gte:50,$lte:100}})
    let author = await AuthorModel.find()
    let array = []
    let ind
    let arr
    let ref
    let index
    let newarr =[]
    for(let i=0; i<findBookCost.length; i++){
       ind = findBookCost[i]
       arr = ind.author_id
       array.push(arr)
    }
    let newar=lodash.uniq(array)
    for(let j=0; j<array.length;j++){
        index = newar[j]
        ref = author.filter((ele)=>ele.author_id==index)
        newarr.push(ref)
            }
    res.send({msg:newarr})
}



module.exports.createBook = createBook
module.exports.createAuthor= createAuthor
module.exports.bookList = bookList
module.exports.findBookPrice= findBookPrice
module.exports.findCost= findCost
