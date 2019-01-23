const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const server = require('http').Server(app);

mongoose.connect('mongodb://localhost/FifthCircle')

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Headers', ['email', 'Authorization', 'x-forwarded-proto', 'host']);
  res.append('Content-Type','application/json');
  next();
});


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const mainRoutes = require('./routes/main')
const generateMusic = require('./routes/generate-musicdb')
const userRoutes = require('./routes/user')
const intervalRoute = require('./routes/intervals')

app.use(mainRoutes)
app.use(generateMusic)
app.use(userRoutes)
app.use(intervalRoute)

server.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})

module.exports = app;