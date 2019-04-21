var Gpio = require('onoff').Gpio;
var PiServo = require('pigpio').Gpio;
var Buzzer = new Gpio(15, 'out');
var Servo = new PiServo(22, { mode: Gpio.OUTPUT });

var brankasModule = {
  turnOnBuzzer: function () {
    if (Buzzer.readSync() === 0) {
      Buzzer.writeSync(1);
    } else {
      console.log('Already turn on dude !');;
    }
  },
  turnOffBuzzer: function () {
    if (Buzzer.readSync() === 1) {
      Buzzer.writeSync(0);
    } else {
      console.log('Already turn off dude !');
    }
  },
  servoLock: function () {
    Servo.servoWrite(600);
  },
  servoUnlock: function () {
    Servo.servoWrite(1500);
  }

};
module.exports = brankasModule
