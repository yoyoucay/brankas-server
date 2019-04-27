var Gpio = require('onoff').Gpio;
var PiServo = require('pigpio').Gpio;
var Buzzer = new Gpio(15, 'out');
var Servo = new PiServo(22, { mode: Gpio.OUTPUT });
var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT);

var brankasModule = {
  pin_write: function (pin, val, callback) {
    gpio.write(pin, val, function (err, result) {

      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        if (val == 1) {
          var result = "ON !";
        } else if (val == 0) {
          var result = "OFF !";
        } else {
          var result = "Undefined !"
        }
        console.log(result);
        return callback(null, result)
      }
    });
  },
  turnOnBuzzer: function (req, res) {
    gpio.write(7, true, function (err) {
      if (err) throw err;
      console.log('Menghidupkan pin 7');
      return res.status(200).send('Berhasil menghidupkan Buzzer');
    });
  },
  turnOffBuzzer: function (req, res) {
    gpio.write(7, false, function (err) {
      if (err) throw err;
      console.log('Mematikan pin 7');
      return res.status(200).send('Berhasil Mematikan Buzzer');
    });
  },
  servoLock: function () {
    Servo.servoWrite(600);
  },
  servoUnlock: function () {
    Servo.servoWrite(1500);
  }

};
module.exports = brankasModule

