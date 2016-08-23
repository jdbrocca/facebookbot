var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log('Example app listening on port ' + process.env.PORT + '!')
})