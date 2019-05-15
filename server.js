require('babel-register')({
    presets: ['react', 'env']
});

var express = require('express');
var app = express();

app.use('/public', express.static('public'));
app.use(require('./src/routes'));

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
