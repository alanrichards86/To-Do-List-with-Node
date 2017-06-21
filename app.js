const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

var listItems = [];


app.get('/', function(req, res){
  console.log(listItems);
  res.render('main', { listItems: listItems});
});

app.post('/', function(req, res){
  listItems.push(req.body.list);
  res.redirect('/');
  console.log(req.body);
});


app.listen(3000, function(){
  console.log('Its working !!!');
})
