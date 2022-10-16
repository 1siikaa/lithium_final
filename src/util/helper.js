const printDate = function(){
    const d = new Date()
    return d
}
module.exports.Date = printDate

const printMonth = function(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const m = new Date()
    let month = months[m.getMonth()]
     return month
}
module.exports.MONTH = printMonth

const getBatchInfo = function(){
    const a= 3
    const b=5
    const batch = "lithium"
    const topic = "Nodejs module system"
    return `${batch} W${a}D${b}, the topic for today is ${topic}.`
}
module.exports.info = getBatchInfo