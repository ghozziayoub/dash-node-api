//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
/*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5aa95ca3ba05e950ea1245ea")
  },{
    $set:{
      completed:true
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });
  */
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5aa84926eac25a2374b55978")
  },{
    $set:{
      name:"Ayoub"
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

//  db.close();
});
