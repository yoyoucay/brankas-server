var Gpio = require('onoff').Gpio; 
var Buzzer = new Gpio(18, 'out'); 
var blinkInterval = setInterval(blinkBuzzer, 250); 

function blinkBuzzer() {
  if (Buzzer.readSync() === 0) { 
    Buzzer.writeSync(1); //set pin state to 1 (turn Buzzer on)
  } else {
    Buzzer.writeSync(0); //set pin state to 0 (turn Buzzer off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  Buzzer.writeSync(0); // Turn LED off
  Buzzer.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 5000); //stop blinking after 5 seconds