const { isValidObjectId } = require('mongoose')
const jwt= require('jsonwebtoken')
const LogicController = require('../logic_db/logic.js')

const headerValidation= function(req,res,next){
    let token = req.headers["x-auth-token"];
    if (!token) return res.status(400).send({ status: false, Error:"BAD REQUEST",msg: "token must be present" });
    else next() }

const idValidation = function(req,res,next){
    let userId = req.params.userId
    if(userId){
    if(isValidObjectId(userId))
    next()
    else
    res.status(400).send({Error:"BAD REQUEST",msg:"this is not a valid object id"})}
    else
    res.status(400).send({Error:"BAD REQUEST",msg:"userId is required"})}


const tokenValidation = function(req,res,next){
    let token = req.headers["x-auth-token"];
    let validToken = jwt.verify(token, 'assignment/auth-1');
    if (!validToken)
      return res.status(403).send({ status: false, Error:"Authentication Failed (FORBIDDEN) " , msg: "token is invalid" });
    else
    req.validToken= validToken
  next()}

  


module.exports.idValidation= idValidation
module.exports.headerValidation = headerValidation
module.exports.tokenValidation = tokenValidation