var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'mi_secreto_token') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log('Example app listening on port ' + process.env.PORT + '!')
})