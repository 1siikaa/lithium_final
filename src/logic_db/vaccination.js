const axios = require('axios')


const districtData = async function (req, res ){
    try{
      let district= req.query.district_id
      let date= req.query.date
      let options={
        method: "get" ,
        url:  `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}` 
      }
      let request= await axios(options)
      res.status(200).send({msg: request.data})}
    catch(error){
    res.status(500).send({msg:"Internal Server Error",Error: error.message})
    }}

module.exports.districtData = districtData

