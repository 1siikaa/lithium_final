const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Vanshika:1siikaaon7*@cluster0.9talhbs.mongodb.net/Vanshika-07032001", {useNewUrlParser:true})
.then(()=>console.log('mongoDB is connected successfully'))
.catch(err=>console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
