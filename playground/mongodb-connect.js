//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
/*
  db.collection('Todos').insertOne({
    text :'Something to do',
    completed:false
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert todo ',err);
    }

    console.log(JSON.stringify(result.ops,undefined,2));
  });
*/

/*
db.collection('Users').insertOne({
  name :'Ayoub',
  age:23,
  location:'Manouba'

},(err,result)=>{
  if(err){
    return console.log('Unable to insert user ',err);
  }

  console.log(JSON.stringify(result.ops,undefined,2));
});
*/
  db.close();
});
