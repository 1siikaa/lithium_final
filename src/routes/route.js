const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
});

// Problem no. 1 ==>
router.get('/movies', function(req, res){
let list = ["Rand de basanti","The shining","Lord of the rings", "Batman begins"]
console.log("The path params in the request are : ", req.params)
console.log("The list of movies are : ", list)
res.send(list)
});

// Problem no. 2 & 3 ==>
router.get('/movies/:indexNumber', function(req, res){
    let list = ["Rand de basanti","The shining","Lord of the rings", "Batman begins"]
   const index = req.params.indexNumber
   if(index <= list.length-1){
    console.log("The movie at this index is : ", list[index])
  res.send(list[index])
  }
   else{
    res.send("error message: Please use a valid index.")
   }
  
    }); 


// Problem no. 4 ==>
router.get('/films', function(req, res){
    
        films = [ {
            id: 1,
            name: "The Shining"
           }, {
            id: 2,
            name: "Incendies"
           }, {
            id: 3,
            name: "Rang de Basanti"
           }, {
            id: 4,
            name: "Finding Nemo"
           }]
           
        res.send(films)  
        }) 

        
// Problem no. 5 ==>
router.get('/films/:filmId', function(req, res){
    films = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
const reqFilm = films.find(element=>element.id==req.params.filmId)
if(reqFilm == undefined){
    res.send('No movie exists with this id')
}
res.send(reqFilm)
})
module.exports = router;