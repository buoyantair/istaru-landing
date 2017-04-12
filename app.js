var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.use(express.static('assets'));
app.get('/', function (req, res) {
  res.render('index', { pageTitle: 'I Star You - Home'})
})

app.listen(port, ()=>{
  console.log("We're up and running senpai!")
})
