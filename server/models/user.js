const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: String,
  correct: [{ type: Schema.Types.ObjectId, ref: 'interval' }],
  wrong: [{ type: Schema.Types.ObjectId, ref: 'interval' }]
  //state whether or not you got it right, the moment in tim
  //store each interaction as individual item in an array, use mongo
  //to aggregate score 
})

const User = mongoose.model('user', userSchema);

module.exports = User;