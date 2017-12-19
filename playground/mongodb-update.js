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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a3851343e9f4448af9a8be2')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a3846c950b2f17dce70f765')
  },{
    $set: {
      name: 'Ow'
    },
    $inc: {
      age: 1000
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  })
  //db.close();

});
