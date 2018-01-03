require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
  console.log(req.body);
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({
      todos,
      custom: 'holi'
    });
  },(e)=>{
    res.status(400).send(e);
  });
});

// GET /todos/12312321
app.get('/todos/:id', (req,res) =>{
  var id = req.params.id;
  if(!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo) {
      return res.status(404).send()
    }
    res.status(200).send({todo});
  }).catch((e)=>res.status(400).send());
});

app.delete('/todos/:id',(req,res) => {
  // get the id
  var id = req.params.id;
  if(!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo) {
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((e)=>res.status(400).send());
});

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);
  console.log(body);
  if(!ObjectId.isValid(id)) {
    return res.status(404).send('');
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body},{new: true}).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) =>{
    console.log(e);
    res.status(400).send(e);
  })
});



app.listen(port, () =>{
  console.log(`Started on port ${port}`);
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
module.exports = {
  app
}
