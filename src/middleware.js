const moment = require('moment')

const pattern= function(req, res, next){
    const today= moment().format('YYYY-DD-MM, h:mm:ss a')
    console.log(`${today}, ${req.ip}, ${req.originalUrl}`)
    next()
}


module.exports.pattern = pattern
