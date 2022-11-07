const RegisterModel = require('../db/registerdb.js')
const { isValidObjectId } = require('mongoose')
const jwt= require('jsonwebtoken')
const middleware = require('../middleware/auth.js')

const createUser = async function (req, res ){
    let info = req.body
    let register = await RegisterModel.create(info)
    res.send({msg: register})}



    const getAllUser = async function (req, res ){
        let get = await RegisterModel.find()
        res.send({msg: get})}



const logInUser= async function (req, res ){
  try{
    if(req.body.emailId && req.body.password){

    let userName = req.body.emailId
    let passkey = req.body.password
    let _id= req.body._id
    
    let user = await RegisterModel.findOne({emailId: userName, password: passkey})

    if(!user){
    return res.status(401).send({msg: "emailId or password is not correct."})
    }

    let payload= {userId : user}
    let token = await jwt.sign(payload, 'assignment/auth-1')
    res.send({data:token})}
    else{
      res.send({msg: "emailId and password is required to login"})
    }
  }

  catch(error){
    res.status(500).send({msg : error.message})
  }}

 

const getAuthorizedUser = async function(req, res){
  try{
  let userId = req.params.userId;
  if(req.validToken.userId._id==userId){
   
  let userDetails = await RegisterModel.findById(userId);
  
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
    else
    res.send({ data: userDetails })
    console.log(userDetails);
}}
catch(error){
  res.status(500).send({msg : error.message})
}}

const updateMobile = async function(req, res, next){
  try{
      let contact= req.body.mobile
      console.log(contact)
      let userId = req.params.userId;
      if(req.validToken.userId._id==userId){
     let updatedUser = await RegisterModel.findOneAndUpdate({_id: userId},
       {$set:{mobile: contact}},
       {new:true});
   res.send({data: updatedUser})
   console.log(updatedUser)
}}
catch(error){
  res.status(500).send({msg : error.message})
}}


const markDirty = async function(req, res, next){
  try{
    let info= req.body.isDeleted
    let userId = req.params.userId;
    if(req.validToken.userId._id==userId){
   let deleteUser = await RegisterModel.findOneAndUpdate({_id: userId},
     {$set:{isDeleted: info}},
     {new:true});
   res.send({data: deleteUser})
}}
catch(error){
  res.status(500).send({msg : error.message})
}}


module.exports.createUser = createUser
module.exports.logInUser= logInUser
module.exports.getAuthorizedUser = getAuthorizedUser
module.exports.updateMobile= updateMobile
module.exports.markDirty = markDirty
module.exports.getAllUser= getAllUser
