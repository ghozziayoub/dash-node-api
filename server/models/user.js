const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User',{
  name:{
      type : String,
      required:true,
      },
  lname:{
      type : String,
      required:true,
      },
  email:{
      type : String,
      required:true,
      },
  phone:{
      type : String,
      required:true,
      },
  refClient:{
      type : String,
      required:true,
      }
});


module.exports = {User};
