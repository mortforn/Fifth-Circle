const router = require('express').Router();
const Interval = require('../models/interval')

//get random interval
router.get('/api/intervals', (req, res) => {
  Interval.aggregate([{ $sample: {size: 10}}])
  .exec((err, intervals) => {
    if (err) throw err;
    res.send(JSON.stringify(intervals))
  })
})

router.get('/api/major-intervals', (req, res) => {
  Interval.find({ "degree": /Major/i })
  .exec((err, intervals) => {
    if (err) throw err;
    res.send(JSON.stringify(intervals))
  })
})

router.get('/api/minor-intervals', (req, res) => {
  Interval.find({ "degree": /Minor/i })
  .limit(10)
  .exec((err, intervals) => {
    if (err) throw err;
    res.send(JSON.stringify(intervals))
  })
})

router.get('/api/easy-intervals', (req, res) => {
  Interval.find({'degree': {$in: ['Major Third', 'Perfect Fifth', 'Octave']}})
  .limit(10)
  .exec((err, intervals) => {
    res.send(JSON.stringify(intervals))
  })
})

module.exports = router;