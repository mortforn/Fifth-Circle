const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: String,
  score: Number,
  gamesFinished: Number
})

const User = mongoose.model('user', userSchema);

module.exports = User;