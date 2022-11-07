const { isValidObjectId } = require('mongoose')
const jwt= require('jsonwebtoken')
const LogicController = require('../logic_db/logic.js')

const headerValidation= function(req,res,next){
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    else next() }

const idValidation = function(req,res,next){
    let userId = req.params.userId
    if(isValidObjectId(userId)) next()
    res.send("this is not a valid object id")}


const tokenValidation = function(req,res,next){
    
    let decodedToken = jwt.verify(token, 'assignment/auth-1');
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    else
    req.decodedToken= decodedToken
  next()}

  


module.exports.idValidation= idValidation
module.exports.headerValidation = headerValidation
module.exports.tokenValidation = tokenValidation