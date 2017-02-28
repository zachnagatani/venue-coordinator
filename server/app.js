const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      initPassport = require('./auth/init');

mongoose.connect(process.env.MONGOLAB_URI);

// Serve static files from client
app.use(express.static('client'));
// Server static files from node_modules
app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Initialize passport
app.use(passport.initialize());
// Se/deserializiation of users
initPassport(passport);

// Root file for front-end
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port);