const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect('mongodb://localhost/FifthCircle')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const mainRoutes = require('./routes/main')
const generateMusic = require('./routes/generate-musicdb')
const userRoutes = require('./routes/user')

app.use(mainRoutes)
app.use(generateMusic)
app.use(userRoutes)

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})

module.exports = app;