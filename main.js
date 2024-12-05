
const leds = document.getElementsByClassName("led-glow");
let speed = 150;
const slider = document.getElementById("slider");

slider.oninput = function() {
  speed = Math.abs(slider.max - this.value);
  console.log(speed);
}

function reduceLedBrightness() {
  for (const led of leds) {
    let opacity = parseFloat(led.style.opacity);
    opacity -= 0.3;
    if (opacity < 0) {
      opacity = 0;
    }
    led.style.opacity = opacity;
  }
}

let direction = 1;
let l = 1;
function updateLeds() {
  clearTimeout(ledTimeout);
  reduceLedBrightness();
  l += direction;
  if (l > 5 || l < 0) {
    l -= direction * 2;
    direction *= -1;
  }
  leds[l].style.opacity = 1;
  ledTimeout = setTimeout(updateLeds, speed);
}
let ledTimeout = setTimeout(updateLeds, speed);
