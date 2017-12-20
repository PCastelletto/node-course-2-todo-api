const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var id = '5a3959354b2d9b887c7416cc11';

User.findById(id).then((user)=>{
  if(!user){
    return console.log('User does not exist');
  }
  console.log(user)
}).catch((e)=>{
  console.log(e);
})
//
// if(!ObjectID.isValid(id)){
//   console.log('id is not valid')
// }
//
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log(todos);
// });
//
// Todo.find({
//   _id: id
// }).then((todo)=>{
//   console.log('todo',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('todo by id',todo);
// }).catch((e)=>console.log(e));

// User to find by id: 3 cases
