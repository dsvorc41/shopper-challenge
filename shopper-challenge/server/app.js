const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');
app.use('/', express.static('./../build'));

const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const bodyParser = require('body-parser');
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true})); 

const cors = require('cors')
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Methods': 'GET, POST'
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(cookieParser());
app.use(session({
  secret: 'supersecretstring12345!',
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({ mongooseConnection: db })
}))

db.once('open', function() {
  console.log('db open!');
});

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    cellPhoneNumber: String,
    zipCode: String,
    referralCode: String,
});

const User = mongoose.model('Users', userSchema);


app.post('/postUserData', cors(corsOptions), function (req, res) {
  res.set(headers)
  req.session.email = req.body.email;
  req.session.save();
  let user = new User({ 
    firstName: req.body.firstName, 
    lastName: req.body.lastName, 
    email: req.body.email, 
    cellPhoneNumber: req.body.cellPhoneNumber, 
    zipCode: req.body.zipCode, 
    referralCode: req.body.referralCode
  });
  user.save((err, data) => {
    if (err) res.end('Error saving the user!', err)
  })
  res.end()
})
 
//Return the session value when the client checks
app.get('/userSession', function(req,res){
  console.log("# Client email check "+ req.session.email);
  res.set(headers)
  res.end();
});

var PORT = process.env.PORT || 3001
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})