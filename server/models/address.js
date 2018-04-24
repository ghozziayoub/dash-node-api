const mongoose = require('mongoose');
const validator = require('validator');

var Address = mongoose.model('Address',{
  addressid:{
      type : String,
      required:true,
    },
  consumerid:{
      type : String,
      required:true,
    },
  street:{
      type : String,
      required:true,
      },
  city:{
      type : String,
      required:true,
      },
  state:{
      type : String,
      required:true,
      },
  zip:{
      type : String,
      required:true,
    }
});


module.exports = {Address};
