const ProductModel = require('../db/productdb.js')
const OrderModel = require('../db/orderdb.js')
const UserModel = require('../db/userdb.js')
const { isValidObjectId } = require('mongoose')

const createProduct = async function (req, res ){
    let product = req.body
    let productInfo = await ProductModel.create(product)
    res.send({msg: productInfo})}

const createOrder= async function (req, res ){
    let index
    let amt
    let balnc
    let updates
    let order = req.body
    let{isFreeAppUser}=order
    if(!isFreeAppUser){
    let saveData = await OrderModel.create(order)
    let fetchData = await OrderModel.find().populate("userId").populate("productId")
    for(let i=0; i<fetchData.length; i++){
      index= fetchData[i]
      amt= index.amount
      balnc= index.userId.balance
      
    }
    if(balnc>amt){
        updates= balnc-amt
    let updateData = await UserModel.findOneAndUpdate({balance:balnc},
        {$set:{balance:updates}},
        {upsert:true,new:true})
        console.log(updateData)
        res.send({msg: updateData})
    }
    else
    res.send({Error: "user has insufficient balance"})
}
else{
    let orderData = await OrderModel.create(order)
    res.send(orderData)
}}

const createUser = async function (req, res ){
    let user = req.body
    let storeUser = await UserModel.create(user)
    res.send({msg: storeUser})}




module.exports.createProduct= createProduct
module.exports.createUser = createUser
module.exports.createOrder= createOrder
