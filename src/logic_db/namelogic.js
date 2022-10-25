const NameModel = require('../db/namedb.js')
const createNames = async function (req, res ){
    let data = req.body
    let saveData = await NameModel.create(data)
    res.send({msg: saveData})
}

const getList = async function (req, res){
    let getdata = await NameModel.find({firstName : "1siikaa"})
    res.send({msg: getdata})
}

module.exports.addNames = createNames
module.exports.fetchNames = getList