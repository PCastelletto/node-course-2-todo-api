var env = process.env.NODE_ENV || 'development';
if(env ==='development') {
  process.env.PORT=3000;
  process.env.MONGODB_URI='mongodb://localhost:27017/TodoApp'
} else if (env ===test) {
  process.env.PORT=3000;
  process.env.MONGODB_URI='mongodb://localhost:27017/TodoAppTest'
} else if (env===production) {
  process.env.MONGODB_URI='mongodb://Nyepz:test@ds131697.mlab.com:31697/udemy-node-course'
}
