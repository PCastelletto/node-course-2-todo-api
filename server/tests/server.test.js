const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'First test todo',
},{
  text: 'Second test todo'
}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    Todo.insertMany(todos);
  }).then(()=>done(),(e)=>done(e));
});

describe('GET /todos', () => {
  it('should get all todos', (done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  })
});

describe('POST /todos', () =>{
  it('should create a new todo',(done) =>{
    var text = 'test pepino';
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .end((err,res)=>{
        if(err) {
          return done(err);
        }
        Todo.find().then((todos)=>{
          expect(todos.length).toBe(3);
          done()
        }).catch((e)=>done(e));

      })
  });

  it('should not create todo with invalid body date', (done)=>{
    request(app)
    .post('/todos')
    .send({text:' '})
    .expect(400)
    .end(done)
  });
});
