const mongoose = require('mongoose');
const validator = require('validator');

var Counter = mongoose.model('Counter',{
  counterid:{
      type : String,
      required:true,
    },
  addressid:{
      type : String,
      required:true,
    },
  gatewayid:{
      type : String,
      required:true,
    },
  refcounter:{
        type : String,
        required:true,
    },
  kia:{
      type : String,
      required:true,
      },
  kib:{
      type : String,
      required:true,
      },
  kv:{
      type : String,
      required:true,
      },
  ke:{
      type : String,
      required:true,
    },
  eg:{
      type : String,
      required:true,
      },
  ec:{
      type : String,
      required:true,
      },
  erg:{
      type : String,
      required:true,
      },
  erc:{
      type : String,
      required:true,
      },
  e1g:{
      type : String,
      required:true,
      },
  e1c:{
      type : String,
      required:true,
      }
});


module.exports = {Counter};
