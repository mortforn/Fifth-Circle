const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gameSchema = new Schema ({
  queue = [{ type: Schema.Types.ObjectId, ref: 'interval' }]
})

const Game = mongoose.model('game', gameSchema);

module.exports = Interval;