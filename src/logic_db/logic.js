const RegisterModel = require('../db/registerdb.js')
const { isValidObjectId } = require('mongoose')
const jwt= require('jsonwebtoken')
const middleware = require('../middleware/auth.js')

const createUser = async function (req, res ){
    let info = req.body
    let register = await RegisterModel.create(info)
    res.send({msg: register})}

    const getUser = async function (req, res ){
        let get = await RegisterModel.find()
        res.send({msg: get})}

const logInUser= async function (req, res ){
    let userName = req.body.emailId
    let passkey = req.body.password
    let _id= req.body._id
    
    let user = await RegisterModel.findOne({emailId: userName, password: passkey})
    if(!user){
    return res.send({msg: "emailId or password is not correct."})
    }
    let token = await jwt.sign({userId: user}, 'assignment/auth-1')
    res.send({data:token})}

const createAuthorization = async function(req, res){
  let userId = req.params.userId;
  let userDetails = await RegisterModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
    res.send({ status: true, data: userDetails });
}

const updateMobile = async function(req, res, next){
    let info= req.body.mobile
    let userId = req.params.userId;
    let updatedUser = await RegisterModel.findOneAndUpdate({_id: userId},
     {$set:{mobile: info}},
     {new:true});
   res.send({data: updatedUser})
}

const markDirty = async function(req, res, next){
    let info= req.body.isDeleted
    let userId = req.params.userId;
   let deleteUser = await RegisterModel.findOneAndUpdate({_id: userId},
     {$set:{isDeleted: info}},
     {new:true});
   res.send({data: deleteUser})
}


module.exports.createUser = createUser
module.exports.logInUser= logInUser
module.exports.createAuthorization = createAuthorization
module.exports.updateMobile= updateMobile
module.exports.markDirty = markDirty
module.exports.getUser= getUser
