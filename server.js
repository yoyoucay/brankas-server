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

app.get('/buzzer/:state', function (req, res) {
	var state = req.params.state;
	res.header("Access-Controll-Allow-Origin", "*");
	res.header("Access-Controll-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
	brankas.pin_write(7, state, function (err, result) {
		if (!err) {
			if (state == 1) {
				'Buzzer Hidup'
				res.send(result);
			} else {
				'Buzzer mati'
				res.send(result);
			}
		} else {
			console.log(err);
			res.status(500).send(err);
		}
	});
	//res.status(200).send('Buzzer ON!');
});

app.post('/off', function (req, res) {
	res.header("Access-Controll-Allow-Origin", "*");
	res.header("Access-Controll-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
	brankas.pin_write(7, 0);
	res.status(200).send('Buzzer ON!');
});

//app.post('/on', function (req, res) {
//	brankas.turnOnBuzzer(req, res);
//	res.status(200).send('The Buzzer was turn ON!');
//});

//app.post('/off', function (req, res) {
//	brankas.turnOffBuzzer(req, res);
//	res.status(200).send('The Buzzer was turn OFF!');
//});

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

app.listen(9898);
console.log('App Server is listening on port 9898');

