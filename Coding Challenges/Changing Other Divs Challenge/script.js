// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");
var b5 = document.getElementById("box5");
var b6 = document.getElementById("box6");
var b7 = document.getElementById("box7");

function turnOrange() {
  b2.classList.remove("purple");
  b3.classList.remove("red");
  b5.classList.remove("black");
  b6.classList.remove("dark-grey");
  b7.classList.remove("light-grey");

  b2.classList.add("orange");
  b3.classList.add("orange");
  b5.classList.add("orange");
  b6.classList.add("orange");
  b7.classList.add("orange");
}

function removePurple() {
  document.getElementById("box1").classList.add("remove_all");
  document.getElementById("box3").classList.add("remove_all");
  document.getElementById("box4").classList.add("remove_all");
  document.getElementById("box5").classList.add("remove_all");
  document.getElementById("box6").classList.add("remove_all");
  document.getElementById("box7").classList.add("remove_all");
}

function turnGreen() {
  document.getElementById("box2").classList.remove("purple");
  document.getElementById("box4").classList.remove("orange");
  document.getElementById("box5").classList.remove("black");
  document.getElementById("box6").classList.remove("dark-grey");
  document.getElementById("box7").classList.remove("light-grey");

  document.getElementById("box2").classList.add("green");
  document.getElementById("box4").classList.add("green");
  document.getElementById("box5").classList.add("green");
  document.getElementById("box6").classList.add("green");
  document.getElementById("box7").classList.add("green");
}

function lengthenAll() {
  document.getElementById("box1").classList.add("tall");
  document.getElementById("box2").classList.add("tall");
  document.getElementById("box3").classList.add("tall");
  document.getElementById("box5").classList.add("tall");
  document.getElementById("box6").classList.add("tall");
  document.getElementById("box7").classList.add("tall");
}
function turnBackgroundBlack() {
  document.getElementById("back_layer").classList.add("turn_background_black");
}
function addText() {
  document.getElementById("box1").classList.add("add_text");
  document.getElementById("box2").classList.add("add_text");
  document.getElementById("box3").classList.add("add_text");
  document.getElementById("box4").classList.add("add_text");
  document.getElementById("box5").classList.add("add_text");
  document.getElementById("box7").classList.add("add_text");
}
function addImage() {
  document.getElementById("img1").classList.remove("hide");
  document.getElementById("img2").classList.remove("hide");
  document.getElementById("img3").classList.remove("hide");
  document.getElementById("img4").classList.remove("hide");
  document.getElementById("img5").classList.remove("hide");
  document.getElementById("img6").classList.remove("hide");
}

function wildCard() {
  // add "spin" and "tall" to divs
  document.getElementById("box1").classList.add("tall");
  document.getElementById("box1").classList.add("spin");

  document.getElementById("box2").classList.add("tall");
  document.getElementById("box2").classList.add("spin");

  document.getElementById("box3").classList.add("tall");
  document.getElementById("box3").classList.add("spin");

  document.getElementById("box4").classList.add("tall");
  document.getElementById("box4").classList.add("spin");

  document.getElementById("box5").classList.add("tall");
  document.getElementById("box5").classList.add("spin");

  document.getElementById("box6").classList.add("tall");
  document.getElementById("box6").classList.add("spin");

  document.getElementById("box7").classList.add("tall");
  document.getElementById("box7").classList.add("spin");

  // unhide baby blue box
  document.getElementById("box9").classList.remove("hide");
}

function killSwitch() {
  document.getElementById("box1").classList.remove("tall");
  document.getElementById("box1").classList.remove("spin");
}

// rename this function so it's name describes what it does!
// then add your own code here!

// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
