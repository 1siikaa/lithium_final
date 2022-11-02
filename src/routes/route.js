const { resolve } = require('dns');
const express = require('express');
const router = express.Router();

router.get('/createmiddleware',function(req,res){
    const data = "Hi, I am working fine."
    res.send(data)
})

router.get('/interuption', function(req,res){
    const info = "Trying ..."
    res.send(info)
})


module.exports = router;

