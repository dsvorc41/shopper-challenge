const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');
app.use('/', express.static('./../build'));
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true})); 

const cors = require('cors')
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
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


// var fluffy = new User({ firstName: 'fluffy' });

// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
// });


app.post('/postUserData', cors(corsOptions), function (req, res) {
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
  res.end();
  User.find(function (err, Users) {
    if (err) return console.error(err);
    console.log(Users);
  })
})

var PORT = process.env.PORT || 3001
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})