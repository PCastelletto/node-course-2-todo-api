//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {
  name: 'Pablo',
  age: 23,
  loc: 'CO'
}

var {name} = user;
console.log(name);


// NO need to create DB!!, Create when add data
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to Connect to MongoDB Server');
  }

  console.log('Connected to MongoDB Server')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })

  // Insert new doc into Users : name, age, location

  // db.collection('Users').insertOne({
  //   name: 'Pablillo',
  //   age: 231,
  //   location: 'CO'
  // },(err,result) => {
  //   if(err) {
  //     return console.log('Unable to insert to Users',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  //
  // });
  db.close();

});
