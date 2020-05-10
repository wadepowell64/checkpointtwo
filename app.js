let burgerseaten = 0
let mouths = 0
let limbs = 1
let heads = 0 * 2
let stomachs = 0
let score = 100


setInterval(limbMultiplier, 10000)

function limbMultiplier() {

  burgerseaten *= limbs
  var myJSON = JSON.stringify(burgerseaten)
  document.getElementById("burgerseaten").innerHTML = myJSON
  updateBurgersEaten()
}


let mouth = {
  price: 10
}

let limb = {
  price: 10
}

let head = {
  price: 10
}

let stomach = {
  price: 2
}

function eat() {
  burgerseaten = burgerseaten + 1;
  var myJSON = JSON.stringify(burgerseaten)
  document.getElementById("burgerseaten").innerHTML = myJSON
  updateBurgersEaten()
}

function updateBurgersEaten() {
  burgerseaten = burgerseaten += mouths;
  burgerseaten = burgerseaten += heads;

  let updateBurgersEaten = burgerseaten
  var myJSON = JSON.stringify(updateBurgersEaten)
  document.getElementById("updateBurgersEaten").innerHTML = myJSON
}

function buyMouth() {
  if (burgerseaten < mouth.price) {
    alert("YOU HAVEN'T EATEN ENOUGH BURGERS! YOU DON'T DESERVE ANOTHER MOUTH!")
  } else {
    document.getElementById("likethat").play()
    mouths = mouths + 1;
    var myJSON = JSON.stringify(mouths)
    document.getElementById("mouths").innerHTML = myJSON
    console.log("mouths updated")
    updateMouths();
  }
}

function updateMouths() {
  burgerseaten -= mouth.price
  var myJSON = JSON.stringify(burgerseaten)
  document.getElementById("burgerseaten").innerHTML = myJSON

  mouth.price = mouth.price * 2
  console.log("function connected")
  let updateMouths = mouths
  var myJSON = JSON.stringify(updateMouths)
  document.getElementById("updateMouths").innerHTML = myJSON
}

function buyLimb() {
  if (burgerseaten < limb.price) {
    alert("YOU HAVEN'T EATEN ENOUGH BURGERS! YOU DON'T DESERVE ANOTHER LIMB!")
  } else {
    document.getElementById("awwwyis").play()
    limbs = limbs + 1;
    var myJSON = JSON.stringify(limbs)
    document.getElementById("limbs").innerHTML = myJSON
    console.log("limbs updated")
    updateLimbs();
  }
}

function updateLimbs() {
  burgerseaten -= limb.price
  var myJSON = JSON.stringify(burgerseaten)
  document.getElementById("burgerseaten").innerHTML = myJSON

  limb.price = limb.price * 4
  console.log("function connected")
  let updateLimbs = limbs
  var myJSON = JSON.stringify(updateLimbs)
  document.getElementById("updateLimbs").innerHTML = myJSON
}

function buyHead() {
  if (burgerseaten < head.price) {
    alert("YOU HAVEN'T EATEN ENOUGH BURGERS! YOU DON'T DESERVE ANOTHER HEAD!")
  } else {
    document.getElementById("reallytasty").play()
    heads = heads + 1;
    var myJSON = JSON.stringify(heads)
    document.getElementById("heads").innerHTML = myJSON
    console.log("heads updated")
    updateHeads();
  }
}

function updateHeads() {
  burgerseaten -= head.price
  var myJSON = JSON.stringify(burgerseaten)
  document.getElementById("burgerseaten").innerHTML = myJSON

  head.price = head.price * 3
  console.log("function connected")
  let updateHeads = heads
  var myJSON = JSON.stringify(updateHeads)
  document.getElementById("updateHeads").innerHTML = myJSON
}

function buyStomach() {
  if (limbs < stomach.price) {
    alert("YOU HAVEN'T EATEN ENOUGH BURGERS! YOU DON'T DESERVE ANOTHER STOMACH!")
  } else {
    document.getElementById("morecheeseburgers").play()
    burgerseaten = burgerseaten += 20000
    stomachs = stomachs + 1;
    var myJSON = JSON.stringify(stomachs)
    document.getElementById("stomachs").innerHTML = myJSON
    console.log("stomachs updated")
    updateStomachs();

  }
}

function updateStomachs() {
  limbs -= stomach.price
  var myJSON = JSON.stringify(limbs)
  document.getElementById("limbs").innerHTML = myJSON

  stomach.price = stomach.price * 2
  console.log("function connected")
  let updateStomachs = stomachs
  var myJSON = JSON.stringify(updateStomachs)
  document.getElementById("updateStomachs").innerHTML = myJSON
}

if (burgerseaten <= 5000) {
  setInterval(eat, 3000)
} else if (burgerseaten > 5000) {
  setInterval(eat, 1000)
}

var timeLeft = 30;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    gameOver();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

function gameOver() {
  alert("Time's up, nerd. Thanks for playing!");
  location.reload()
}

function moreTime() {
  document.getElementById("no").play()
  alert("lol I'm not giving you more time dude just click the buttons faster")
}
