

function setup() {
    //createCanvas(windowWidth, windowHeight);
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-container');
    //background("beige");
    //colorMode(HSB);
  }
  
  function draw() {
    //Line from prev pt to current pt
    //of mouse position
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  //listen when we click the mouse
  function mouseClicked() {
    //weights 0 to 10
    stroke("slateBlue");
    strokeWeight(random());
  
    //what if want weights 0 to .4?
    //strokeWeight( random(.4) );
  }
  
  //listen when we release *any* key
  function keyReleased() {
    //color hue values between 20 and 145
    //saturation 0 to 100
    //brightness 80 to 100
    stroke(random(20, 145), random(100), random(80, 100));
  }
  
  //listen for only character keys
  function keyTyped() {
    //weights 0 to 5
    stroke("turquoise");
    strokeWeight(random(5));
  }


  // colorchange

var colorWellRainBow;
var colorWellBlack;
var colorWellWhite;
var defaultColor = "#fbff35";
var defaultColor2 = "#fffff";

let foo = document.querySelector("#overlay")

window.addEventListener("load", startup, false);

//Initialization
function startup() {
  colorWellRainBow = document.querySelector("#colorWell-rainbow");
  colorWellRainBow.value = defaultColor;
  colorWellRainBow.addEventListener("input", updateBackground);
  // colorWellRainBow.select();

  colorWellBlack = document.querySelector("#colorWell-black");
  colorWellBlack.value = defaultColor2;
  colorWellBlack.addEventListener("input", updateFonts);
  // colorWellBlack.addEventListener("change", updateAll);
  // colorWellBlack.select();

  /*
  colorWellWhite = document.querySelector("#colorWell-white");
  colorWellWhite.value = defaultColor;
  colorWellWhite.addEventListener("input", updateFonts);
  colorWellWhite.select();
  */
}

//reacting to color changes / background
function updateBackground(event) {
    document.body.style.background = event.target.value;
  
}

// fonts
function updateFonts(event) {
  document.body.style.color = event.target.value;
    console.log("color set!")
    console.log(event.target.value)
  }




