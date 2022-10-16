const express = require('express');
const router = express.Router();
const load = require('../logger/logger.js')
const abc = require('../util/helper.js')
const xyz = require('../validator/formatter.js')
const lodash = require('lodash')


router.get('/test-me', function (req, res) {
    console.log("problem no. 1")
    console.log("Calling function:", load.bells("vanshika"))
    console.log("\n")
    console.log("problem no. 2")
    console.log("Calling function:", abc.Date())
    console.log("Calling function:", abc.MONTH())
    console.log("Calling function:", abc.info())
    console.log("\n")
    console.log("Problem No. 3")
    console.log("Calling function:", xyz.lower('FunctionUp'))
    console.log("Calling function:", xyz.upper('functionUp'))  
    console.log("\n")
    console.log("Problem No. 4")
    let mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let splits = lodash.chunk(mon, 4)
    console.log("Calling function",splits)
    console.log('\n')
    let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]
    let initial = lodash.tail(arr)
    console.log("Calling function",initial)
    console.log("\n")
    console.log("Problem No. 5")
    let merge = lodash.union([1,2], [2, 5], [5, 6,7], [6,7], [12, 13])
    console.log("Calling function",merge)
    console.log('\n')
    let objec = lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
])
    console.log("Calling function", objec)
    res.send('My first ever api!')

});
module.exports = router;

