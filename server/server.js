const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

con

mongoose.connect('mongodb://localhost/fifthcircle')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const mainRoutes = require('./routes/main');

app.use(mainRoutes)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log('Server listening on port ' + port)
})

module.exports = app;