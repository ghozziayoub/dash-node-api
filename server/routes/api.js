const {ObjectID}=require('mongodb');
const express = require('express');
const router = express.Router();

var {mongoose}=require('../db/mongoose');
var {Consumer}=require('../models/consumer');
var {Technician}=require('../models/technician');
var {Counter}=require('../models/Counter');
var {Address}=require('../models/Address');
var {Counterstat}=require('../models/Counterstat');



//Register Consumer
router.post('/register/consumer',(req,res)=>{
  var idconsumer = new ObjectID();

  var consumer = new Consumer({
    consumerid:idconsumer,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    cin:req.body.cin,
    phone:req.body.phone,
    email:req.body.email,
    password:req.body.password
  });

  var refcounter = req.body.refcounter;

  Counter.findOne({refcounter}).then((counter)=>{

  if (!counter) {
    return res.status(404).send();
  }

  var addressid = counter.addressid;

  Address.findOneAndUpdate({addressid},{consumerid:idconsumer}).then((address)=>{
    if (!address) {
      return res.status(404).send();
    }

        consumer.save().then((consumer)=>{
          res.send({consumer});
        },(e)=>{
          res.status(400).send(e);
        });


  }).catch((e)=>{
    res.status(400).send();
  });


}).catch((e)=>{
  res.status(400).send();
});



});

//Login Consumer
router.post('/login/consumer/',(req,res)=>{
  var email = req.body.email;
  var password = req.body.password;

  Consumer.find({email,password}).then((consumer)=>{
    if (!consumer) {
      return res.status(404).send();
    }else if (consumer.email!==email) {
      return res.status(401).send('Ivalid email');
    }else if (consumer.password!==password) {
      return res.status(401).send('Ivalid password');
    }



    res.send({consumer});

  }).catch((e)=>{
    res.status(400).send();
  });

});



//Register Technician
router.post('/register/technician',(req,res)=>{
  var idtechnician = new ObjectID();

  var technician = new Technician({
    technicianid:idtechnician,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    cin:req.body.cin,
    phone:req.body.phone,
    matricule:req.body.matricule,
    email:req.body.email,
    password:req.body.password
  });

  technician.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});

//Login Technician
router.post('/login/technician/',(req,res)=>{
  var email = req.body.email;
  var password = req.body.password;

  Technician.find({email,password}).then((technician)=>{
    if (!technician) {
      return res.status(404).send();
    }else if (technician.email!==email) {
      return res.status(401).send('Ivalid email');
    }else if (technician.password!==password) {
      return res.status(401).send('Ivalid password');
    }

    res.send({technician});

  }).catch((e)=>{
    res.status(400).send();
  });

});



module.exports = router;
