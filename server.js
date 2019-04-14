var http = require('http');
var express = require('express');
var brankas = require('./model/brankas');
var app = express();

//----------
// var Gpio = require('onoff').Gpio;
// var Buzzer = new Gpio(18, 'out');
// var blinkInterval = setInterval(brankas.turnOnBuzzer, 250);
//----------

app.use(express.static(__dirname));

app.get('/on', function (req, res) {
	brankas.turnOnBuzzer();
	res.status(200).send('The Buzzer was turn ON!');
});

app.get('/off', function (req, res) {
	//res.status(200).send('This is a Buzzer page!');
	// if (Buzzer.readSync() === 1) {
	// 	Buzzer.writeSync(0); //set pin state to 1 (turn Buzzer on)
	// } else {
	// 	Buzzer.writeSync(1); //set pin state to 0 (turn Buzzer off)
	// }
	brankas.turnOffBuzzer();
	// clearInterval(brankas);
	res.status(200).send('The Buzzer was turn OFF!');
});

app.get('/lock', function (req, res) {
	brankas.servoLock();
	res.status(200).send('The Servo Was Locked!');
});

app.get('/unlock', function (req, res) {
	brankas.servoUnlock();
	res.status(200).send('The Servo Was Unlocked!');
});


app.get('*', function (req, res) {
	res.status(404).send('Unrecognized API call');
});

// app.use(function (err, req, res, next) {
// 	if (eq.xhr) {
// 		res.status(500).send('Oops, something wrong!');
// 	} else {
// 		next(err);
// 	}

// });

app.listen(8081);
console.log('App Server is listening on port 8081');
