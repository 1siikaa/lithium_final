const axios = require('axios')

let weather= async function (req, res ){
    try{
      let q= req.query.q
    let appid= req.query.appid
  
    
    let options={
      method: "get" ,
      url:  `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
    
    }
    let request= await axios(options)
    let data= request.data.main.temp
    
    res.status(200).send({temp: data})}
      catch(error){
      res.status(500).send({msg:"Internal Server Error",Error: error.message})  
      }}

      let weatherOfOtherCities= async function (req, res ){
        try{
          let cities = [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
          let temperature = []
        let appid= req.query.appid
        for(let i=0; i<cities.length; i++){
          let store ={city: cities[i]}
        let options={
          method: "get" ,
          url:  `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`
        }
        let request= await axios(options)
        store.temp= request.data.main.temp
        temperature.push(store)
        
      }
      let sorted= temperature.sort(function(a,b){return a.temp - b.temp})
        res.status(200).send({temp: sorted})}
          catch(error){
          res.status(500).send({msg:"Internal Server Error",Error: error.message})  
          }}
  

module.exports.weatherOfOtherCities = weatherOfOtherCities
module.exports.weather= weather



