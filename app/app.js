/*eslint-env node*/

var express = require('express');
var app = express();

// https://github.com/Ginden/capitals
const countries = require('capitals-coordinates');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('form', { title: 'Hey', message: 'Hello there!'});
});  

app.get('/sendContinent', function (req, res) {
  var continent = req.query.continent;
  res.render('countries', { countries:countries.findByContinent(continent)});
});    

app.get('/sendCity', function (req, res) {
  var continent = req.query.continent;
  res.render('countries', { countries:countries.findByContinent(continent)});
});   

app.get('/sendCountry', function (req, res) {
  var country = req.query.country;
  countries.rawData.forEach(function(nazione) {
    if (country === nazione.properties.country)
      res.render('capital', { result: nazione.properties.capital}); 
  });
});  


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
