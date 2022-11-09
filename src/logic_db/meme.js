const axios = require('axios')

const getMeme= async function (req, res ){
    try{
      let options={
        method: "get" ,
        url:  `https://api.imgflip.com/get_memes`
      }
      let request= await axios(options)
      
      res.status(200).send({data:request.data})}
     catch(error){
      res.status(500).send({msg:"Internal Server Error", Error: error.message})}}
  
   
  
  const createMeme = async function(req, res){
    try{
    const {template_id, text0, text1, username, password}= req.query
    let options={
      method: "post" ,
      url:  `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}
      &password=${password}`
    }
    let request= await axios(options)
      res.status(200).send({ msg:"SUCCESSFUL",data: request.data })}
      
  catch(error){
    res.status(500).send({ERROR:"Internal Server Error",msg : error.message})
  }}
  

module.exports.getMeme= getMeme
module.exports.createMeme = createMeme