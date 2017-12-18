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

  //deleteMany, deleteOne, findOneAndDelete

  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // },(err)=>{
  //   console.log('Unable to Delete Documents',err);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // },(err)=>{
  //   console.log('Unable to Delete Documents',err);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // })
  db.collection('Users').deleteMany({name:'Jen'}).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({name:'Ow'}).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log('OWww Errror',err);
  });
  //db.close();

});
