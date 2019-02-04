const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const server = require('http').Server(app);

const PORT = process.env.NODE_ENV || 8000

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/FifthCircle'
mongoose.connect(MONGODB_URI)

if (process.env.NODE_ENV === 'production') {
  app.use(function(req, res, next){
    console.log('request', req);
    if(req.header('x-forwarded-proto') !== 'https'){
      console.log('redirecting', req);
      res.redirect('https://radiant-beach-20088.herokuapp.com/' + req.url);
    }else{
      next();
    }
  })
  }

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

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log('Node.js listening on port ' + PORT)
})

module.exports = app;