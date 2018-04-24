const mongoose = require('mongoose');
const validator = require('validator');

var Counterstat = mongoose.model('Counterstat',{
  counterstatsid:{
      type : String,
      required:true,
    },
  counterid:{
      type : String,
      required:true,
    },
  day:{
      type : String,
      required:true,
    },
  energy_month_start:{
      type : String,
      required:true,
      },
  energy_month_current:{
      type : String,
      required:true,
      },
  datetime_qh_start:{
      type : String,
      required:true,
      },
  datetime_qh_end:{
      type : String,
      required:true,
    },
  power_qh:{
      type : String,
      required:true,
      }
});


module.exports = {Counterstat};
