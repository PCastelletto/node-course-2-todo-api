const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

//Everithing removed
// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove()
//
// Todo.findByIdAndRemove('')
//
Todo.findByIdAndRemove('5a42d88df25058f38a129af5').then((todo)=>{
  console.log(todo);
})

Todo.findOneAndRemove({_id: '5a42d88df25058f38a129af5'}).then((todo) => {
  console.log(todo);
})
