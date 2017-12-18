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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a3849b83e9f4448af9a894b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err)
  // });
  // console.log('Connected to MongoDB Server')

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos');
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch todos',err)
  // });
  // console.log('Connected to MongoDB Server')

  db.collection('Users').find({name:'Pablillo'}).toArray().then((docs)=>{
    console.log('Users with name Pablillo:');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch Users',err);
  })

  //db.close();

});
