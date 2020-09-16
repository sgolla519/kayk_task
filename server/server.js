var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var db=require('./dbconfig/db');

var cors = require('cors')
app.use(cors())

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res)=>{
//     res.send({"result":"success"});
// })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(require('./api/routes/index'))

app.listen(3000, ()=>{
    console.log("connecting the server port no 3000")
})