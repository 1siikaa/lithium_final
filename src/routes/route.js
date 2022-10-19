const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// problem 1 ===>
router.get('/solution', function (req, res){
    let arr = [1,2,3,4,6,7,8,9]
    let total = 0
    for(let i=0; i<arr.length; i++){
        total = total + arr[i]
    }
    let arra = [1,2,3,4,5,6,7,8,9]
    let n = arra.length
    let sum = (n*(n+1)/2)
    let missingNumber = sum - total
    res.send({data: missingNumber})
});

// problem no.2 ===>
router.get('/soln', function (req, res){
    let arrrr = [100, 101, 102, 104, 105, 106]
    let tot = 0
    for(let i=0; i<arrrr.length; i++){
        tot = tot + arrrr[i]
    }
    let len = (arrrr.length)+1
    console.log(len)
    let first = arrrr.shift()
    console.log(first)
    let summ = (len/2)*(2*first + len-1)
    console.log(summ)
    let missingNum = summ - tot
    res.send({data: missingNum})
});
module.exports = router;