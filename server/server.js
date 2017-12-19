var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
  console.log(req.body);
})

app.listen(3000, () =>{
  console.log('Started on port 3000');
})

// Users - email-require-trim-string-minlength1
//



// var newTodo = new Todo({
//   text: 'Finish Node Course',
//   completed: false
// });

// var newUser = new User({
//   email: 'Ny@g.com'
// });
//
// newUser.save().then((doc)=>{
//   console.log('Save User',doc);
// },(e)=>{
//   console.log('Unable to save user',e);
// });

// newTodo.save().then((doc) => {
//   console.log('Save Todo',doc)
// }, (e) => {
//   console.log('Unable to save Todo');
// });
