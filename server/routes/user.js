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

module.exports = router;