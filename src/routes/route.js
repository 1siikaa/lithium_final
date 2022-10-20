const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

 let persons= [
    {
    "name": "PK",
    "age": 10,
    "votingStatus": false
 },
 {
    "name": "SK",
    "age": 20,
    "votingStatus": false
 },
 {
    "name": "AA",
    "age": 70,
    "votingStatus": false
 },
 {
    "name": "SC",
    "age": 5,
    "votingStatus": false
 },
 {
    "name": "HO",
    "age": 40,
    "votingStatus": false
 }
 ]
router.post('/person', function(req, res){

   let Age = req.query.votingAge
   let final =[]
   let index
   const result = persons.filter((element)=> element.age > Age)
   for(let i=0; i<result.length; i++){
    index = result[i]
    if(index.votingStatus==false)  index.votingStatus= true
   final.push(index)
   }
   console.log(final)
   res.send({data: final, status: true})
})
module.exports = router;

