var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({foo: 'bar'});
});

app.listen(3000, function () {
  console.log('Desmay is listening on port 3000!');
});