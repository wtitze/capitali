/*eslint-env node*/

var express = require('express');
var app = express();

// https://github.com/Ginden/capitals
const countries = require('capitals-coordinates');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('form', { title: 'Le nazioni dei continenti', message: 'Inserisci il nome del continente'});
});  

app.get('/capital', function (req, res) {
  res.render('formCapital', { title: 'La capitale di una nazione', message: 'Inserisci il nome della capitale'});
});  

app.get('/sendContinent', function (req, res) {
  var continent = req.query.continent;
  res.render('countries', { countries:countries.findByContinent(continent)});
});    

app.get('/sendCapital', function (req, res) {
  var city = req.query.capital;
  countries.rawData.forEach(function(nazione) {
    if (city === nazione.properties.capital)
      res.render('result', { message: "la nazione è: ", result: nazione.properties.country}); 
  });});   

app.get('/sendCountry', function (req, res) {
  var country = req.query.country;
  countries.rawData.forEach(function(nazione) {
    if (country === nazione.properties.country)
      res.render('result', { message: "la capitale è: ", result: nazione.properties.capital}); 
  });
});  


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
