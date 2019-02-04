const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const server = require('http').Server(app);

const PORT = process.env.NODE_ENV || 8000

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/FifthCircle'
mongoose.connect(MONGODB_URI)

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

server.listen(PORT, () => {
  console.log('Node.js listening on port ' + PORT)
})

module.exports = app;