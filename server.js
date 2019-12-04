const express = require ("express");
const server = express();
const bodyParser = require('body-parser');
const path = require("path");
const studentModel = require("../men_stack/models/student");

//Middlewares
server.use(express.static('public'));
server.use(bodyParser.json());
server.use(express.urlencoded({extended:false}));

//Connection
const connection = require("../men_stack/models/connection");

//Routes
server.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + "/public/html/index.html"))
});

server.get('/register', (req, res)=> {
    res.sendFile(path.join(__dirname + "/public/html/register.html"));
});

server.post('/register', (req, res) => {
  
    let newStudent = new studentModel({
        name: req.body.tfName,
        studentID: req.body.tfstudID,
        school:req.body.cmbSch,
        gender:req.body.selGender,


    });


    newStudent.save();
 
})

server.post('/done', (req,res) => {
    res.sendFile(__dirname + "/public/html/done.html");
})



let port = "8080";
server.listen(port, ()=>{
    console.log(`server is listening on port 8080`)
});