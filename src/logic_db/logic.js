const RegisterModel = require('../db/registerdb.js')
const { isValidObjectId } = require('mongoose')
const jwt= require('jsonwebtoken')
const middleware = require('../middleware/auth.js')

const createUser = async function (req, res ){
    try{
    let info = req.body
    if(Object.keys(info).length!==0){
    let register = await RegisterModel.create(info)
    res.status(201).send({msg: register})}
    else
    res.status(400).send({msg:"BAD REQUEST"})}

    catch(error){
    res.status(500).send({msg:"Internal Server Error",Error: error.message})
    }}


    const getAllUser = async function (req, res ){
      try{
        if(RegisterModel){
        let get = await RegisterModel.find()
        res.status(200).send({msg: "SUCCESSFUL", data: get})}
      else{
        res.status(204).send({msg: "NO CONTENT"})
      }}
        catch(error){
        res.status(500).send({msg:"Internal Server Error",Error: error.message})  
        }}



const logInUser= async function (req, res ){
  try{
    if(req.body.emailId && req.body.password){

    let userName = req.body.emailId
    let passkey = req.body.password
    let _id= req.body._id
    
    let user = await RegisterModel.findOne({emailId: userName, password: passkey})

    if(!user){
    return res.status(401).send({msg: "emailId or password is not correct."}) }

    let payload= {userId : user}
    let token = await jwt.sign(payload, 'assignment/auth-1')
    res.status(200).send({data:token})}
    else{
      res.status(400).send({ ERROR:"BAD REQUEST", msg: "emailId and password is required to login"})
    } }
   catch(error){
    res.status(500).send({msg:"Internal Server Error", Error: error.message})}}

 

const getAuthorizedUser = async function(req, res){
  try{
  let userId = req.params.userId;
  if(req.validToken.userId._id==userId){
   
  let userDetails = await RegisterModel.findById(userId);
  
  if (!userDetails)
    return res.status(204).send({ status: false, msg: "No such user exists" });
    else
    res.status(200).send({ msg:"SUCCESSFUL",data: userDetails })
    console.log(userDetails)}
else
res.status(401).send({ERROR:"Unauthorized error occured"})}
catch(error){
  res.status(500).send({ERROR:"Internal Server Error",msg : error.message})
}}

const updateMobile = async function(req, res, next){
  try{
      let body= req.body
      if(Object.keys(body).length!==0){
      let contact= body.mobile
      let userId = req.params.userId;
      if(req.validaToken.userId._id){
      if(req.validToken.userId._id==userId){
     let updatedUser = await RegisterModel.findOneAndUpdate({_id: userId},
       {$set:{mobile: contact}},
       {new:true});
   res.status(205).send({msg:"UPDATED SUCCESSFULLY",data: updatedUser})}
   else{
    res.status(401).send({ERROR:"Unauthorized error occured"})}}
   else{
  res.status(400).send({msg:"BAD REQUEST"})}}}
  catch(error){
  res.status(500).send({msg:"Internal Server Error",msg : error.message})
}}


const markDirty = async function(req, res, next){
  try{
    let content= req.body
    if(Object.keys(content).length!==0){
    let info= content.isDeleted
    let userId = req.params.userId;
    if(req.validaToken.userId._id){
    if(req.validToken.userId._id==userId){
   let deleteUser = await RegisterModel.findOneAndUpdate({_id: userId},
     {$set:{isDeleted: info}},
     {new:true});
   res.status(205).send({msg:"UPDATED SUCCESSFULLY",data: deleteUser})}
   else{
    res.status(401).send({ERROR:"Unauthorized error occured"})}}
   else{
  res.status(400).send({msg:"BAD REQUEST"})}}}
catch(error){
  res.status(500).send({msg:"Internal Server Error",msg : error.message})
}}


module.exports.createUser = createUser
module.exports.logInUser= logInUser
module.exports.getAuthorizedUser = getAuthorizedUser
module.exports.updateMobile= updateMobile
module.exports.markDirty = markDirty
module.exports.getAllUser= getAllUser
