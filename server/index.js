
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js')
require('./models/Users.js')
require('./services/passport.js');



const app = express();
require('./routes/authRoutes.js')(app)

mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
  res.send({ bye : 'buddy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
