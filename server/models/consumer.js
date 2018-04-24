const mongoose = require('mongoose');
const validator = require('validator');

var Consumer = mongoose.model('Consumer',{
  consumerid:{
      type : String,
      required:true,
    },
  firstname:{
      type : String,
      required:true,
      },
  lastname:{
      type : String,
      required:true,
      },
  cin:{
      type : String,
      required:true,
      },
  phone:{
      type : String,
      required:true,
    },
  email:{
      type : String,
      required:true,
      },
  password:{
      type : String,
      required:true,
      }
});


module.exports = {Consumer};
