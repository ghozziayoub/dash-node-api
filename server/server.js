const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var {User}=require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.post('/user',(req,res)=>{
  var user = new User({
    name:req.body.name,
    lname:req.body.lname,
    email:req.body.email,
    phone:req.body.phone,
    refClient:req.body.refClient
  });

  user.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});

app.get('/users',(req,res)=>{

  User.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });

});




app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});
