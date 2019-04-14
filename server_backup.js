var http = require('http');
var express = require('express');

var app = express();

//----------
var Gpio = require('onoff').Gpio; 
var Buzzer = new Gpio(18, 'out'); 
//var blinkInterval = setInterval(blinkBuzzer, 250); 
//----------

app.use(express.static(__dirname));

app.get('/on', function(req, res) {
	
	if (Buzzer.readSync() === 0) { 
    		Buzzer.writeSync(1); //set pin state to 1 (turn Buzzer on)
  	} else {
    		Buzzer.writeSync(0); //set pin state to 0 (turn Buzzer off)
  	}

	return res.status(200).send('Buzzer was turn ON !');
});

app.get('/off', function(req, res) {
	
 	if (Buzzer.readSync() === 1) { 
    		Buzzer.writeSync(0); //set pin state to 1 (turn Buzzer on)
  	} else {
    		Buzzer.writeSync(1); //set pin state to 0 (turn Buzzer off)
  	}
	
	return res.status(200).send('Buzzer was turn OFF !');
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