var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // configure to use promises
//mongoose.connect('mongodb://Nyepz:test@ds131697.mlab.com:31697/udemy-node-course');
mongoose.connect(process.env.MONGODB_URI);
//
module.exports = {
  mongoose
}
