const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const soundSchema = new Schema ({
  name: String,
  source: String,
  
})

const Sound = mongoose.model('sound', soundSchema);

module.exports = Sound;