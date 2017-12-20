var express = require('express');
var bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');
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
  //res.status(200).send({text:'wiii'});

  //find by id
    //success: if todo => send it back else
      //id not found 404 with empty
    //error : send back 400 and send empty body
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
module.exports = {
  app
}
