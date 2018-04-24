const mongoose = require('mongoose');
const validator = require('validator');

var Measure = mongoose.model('Measure',{
  measureid:{
      type : String,
      required:true,
    },
  counterid:{
      type : String,
      required:true,
    },
  iph1:{
      type : String,
      required:true,
    },
  uph1:{
      type : String,
      required:true,
      },
  power:{
      type : String,
      required:true,
      },
  reactive_power:{
      type : String,
      required:true,
      },
  apparent_power:{
      type : String,
      required:true,
    },
  cos_phi:{
      type : String,
      required:true,
      }
});


module.exports = {Measure};
