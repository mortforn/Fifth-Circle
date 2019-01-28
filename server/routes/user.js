const router = require('express').Router();
const User = require('../models/user')

//get users and sort by score
router.get('/api/users', (req, res) => {
  User.aggregate([{ $sort: {score: -1}}], (err, users) => {
    if (err) throw err;
    res.send(JSON.stringify(users))
  })
})

router.post('/api/user', (req, res) => {
  const username = req.body.username;
  User.findOne({ username: username}, (err, existingUser) => {
    if (err) throw err
    if (existingUser) {
      return res.status(422, 'Username already exists')
    }
    let newUser = new User({
      username: req.body.username,
      score: 0,
      gamesFinished: 0,
      })
    newUser.save();
    res.send(JSON.stringify(newUser));
    })
})


router.get('/api/user/:id', (req, res) => {
  User.find({ username : req.body.username }, (err, users) => {
    if (err) throw err;
    res.send(JSON.stringify(users))
  })
})

// router.post('/api/:username/finalscore', (req, res) => {
//   User.find({ username: req.body.username}, (err, user) => {
//     if (err) throw err;
//     if (!user) {
//       return res.send(404, 'No user was found');
//     }
//     user.score = req.body.score;
//     res.send(JSON.stringify(user))
//   })
// })

router.post('/api/user/finalscore', (req, res) => {
  User.findOneAndUpdate(
    {'username' : req.body.username},
    { $inc: {'score' : Number(req.body.score), 'gamesFinished': 1}}
  ).exec((err, updatedUser) => {
    if (err) throw err
    res.send(JSON.stringify(updatedUser))
  })
})

module.exports = router;