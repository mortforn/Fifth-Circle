const router = require('express').Router();
const User = require('../models/user')

//get users
router.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    res.send(JSON.stringify(users))
  })
})

//add a user
router.post('/api/user', (req, res) => {
  let newUser = new User({
    username: req.body.username,
    score: 0
  })
  newUser.save();
  res.send(JSON.stringify(newUser));
})

router.get('/api/user/:id', (req, res) => {
  User.find({ username : req.body.username }, (err, users) => {
    if (err) throw err;
    res.send(JSON.stringify(users))
  })
})

// router.post('/api/:userId/correct', (req, res) => {
//   res.send('poop')
// )}

// router.post('/api/:userId/wrong', (req, res) => {

// )}

module.exports = router;