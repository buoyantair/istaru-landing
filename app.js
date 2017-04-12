var express = require('express');

var app = express();
app.set('view engine', 'pug');
app.use(express.static('assets'));
app.get('/', function (req, res) {
  res.render('index', { pageTitle: 'I Star You - Home'})
})

app.listen(process.env.port, ()=>{
  console.log("We're up and running senpai!")
})
