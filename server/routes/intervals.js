const router = require('express').Router();
const Interval = require('../models/interval')

//get random interval
router.get('/api/interval', (req, res) => {
  Interval.aggregate([{ $sample: {size: 10}}])
  .exec((err, interval) => {
    if (err) throw err;
    res.send(JSON.stringify(interval))
  })
})

module.exports = router;