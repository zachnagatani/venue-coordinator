const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.use(express.static('client'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port);