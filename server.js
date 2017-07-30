var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));









app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','css','style.css'));
});


app.get('/js/jquery.particleground.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','js','jquery.particleground.js'));
});

app.get('/js/demo.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','js','demo.js'));
});

app.get('/img/showicon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','img','showicon.png'));
});



app.get('/css/w3.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','css','w3.css'));
});

app.get('/img/123.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','img','123.png'));
});


app.get('/work.html',function(req, res){
	
	res.sendFile(path.join(__dirname, 'ui', 'work.html'));
});




app.get('/ui/123.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '123.png'));
});

app.get('/loginsuccess.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'loginsuccess.html'));
});


app.get('/index.html',function(req, res){
	
	res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/resume.html',function(req, res){
	
	res.sendFile(path.join(__dirname, 'ui', 'resume.html'));
});


app.get('/ui/w3.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'w3.css'));
});


app.get('/ui/img/coding.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','img', 'coding.jpg'));
});

app.get('/img/html5.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','img', 'html5.png'));
});

app.get('/img/css3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','img', 'css3.png'));
});

app.get('/img/nodejs.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','img', 'nodejs.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
