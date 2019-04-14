var Gpio = require('onoff').Gpio;
var Buzzer = new Gpio(18, 'out');

// var pool = require('./databaseConfig.js');
var brankasModule = {
  turnOnBuzzer: function () {
    if (Buzzer.readSync() === 0) {
      Buzzer.writeSync(1); //set pin state to 1 (turn Buzzer on)
      // setInterval(Buzzer.writeSync(1), 250);
    } else {
      console.log('Already turn on dude !');;
    }
  },
  turnOffBuzzer: function () {
    if (Buzzer.readSync() === 1) {
      Buzzer.writeSync(0); //set pin state to 1 (turn Buzzer on)
    } else {
      console.log('Already turn off dude !');
    }
    // clearInterval();
    // Buzzer.unexport();
  }
};
module.exports = brankasModule
