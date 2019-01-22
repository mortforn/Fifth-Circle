const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const intervalSchema = new Schema ({
  root: String,
  degree: String,
  note: String,
  source: String,
  
})

const Interval = mongoose.model('interval', intervalSchema);

module.exports = Interval;