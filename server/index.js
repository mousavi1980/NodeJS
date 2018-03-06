
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

app.get('/', (req, res) => {
  res.send({ bye : 'buddy' });
});

passport.use(
  new GoogleStrategy(
  {
    clientID : keys.googleClientID,
    clientSecret : keys.googleCleintSecret,
    callBackURL : '/auth/google/callback'
  },
    accessToken => {
    console.log(accessToken);
  }
  )
);

app.get(
  '/auth/goole',
  passport.authenticate('google',
  {
    scope : ['profile','email']
  })
);







)
const PORT = process.env.PORT || 5002;
app.listen(PORT);
