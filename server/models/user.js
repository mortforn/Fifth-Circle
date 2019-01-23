const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: String,
  score: [Number],
  //state whether or not you got it right, the moment in tim
  //store each interaction as individual item in an array, use mongo
  //to aggregate score 
})

const User = mongoose.model('user', userSchema);

module.exports = User;