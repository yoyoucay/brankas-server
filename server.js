var http = require('http');
var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.get('/home', function(req, res) {
	res.status(200).send('This is a home page!');
});

app.get('/buzzer', function(req, res) {
	res.status(200).send('This is a Buzzer page!');
});

app.get('*', function(req, res) {
	res.status(404).send('Unrecognized API call');
});

app.use(function (err, req, res, next){
	if(eq.xhr){
		res.status(500).send('Oops, something wrong!');
	} else {
		next(err);
	}

});

app.listen(8081);
console.log('App Server is listening on port 8081');