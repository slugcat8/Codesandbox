// variables keep our code short
var b1 = document.getElementById("one");
var b2 = document.getElementById("two");
var b3 = document.getElementById("three");
var b4 = document.getElementById("four");
var b5 = document.getElementById("five");
var b6 = document.getElementById("six");
var b7 = document.getElementById("seven");
var b8 = document.getElementById("eight");
var b9 = document.getElementById("nine");
var b10 = document.getElementById("ten");

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten"
];

var x = 0;

// parameterized funcions that takes the element that was just clicked as its input
function correctClick(e) {
  e.classList.add("green");
  e.classList.remove("press-effect");
  e.removeAttribute("onclick");
  x++;
}

function incorrectClick(e) {
  e.classList.add("red");
  setTimeout(function () {
    e.classList.remove("red");
  }, 1000);
}

function endSequence() {
  b1.removeAttribute("onclick");
  b2.removeAttribute("onclick");
  b3.removeAttribute("onclick");
  b4.removeAttribute("onclick");
  b5.removeAttribute("onclick");
  b6.removeAttribute("onclick");
  b7.removeAttribute("onclick");
  b8.removeAttribute("onclick");
  b9.removeAttribute("onclick");
  b10.removeAttribute("onclick");

  b1.classList.add("fade");
  b2.classList.add("fade");
  b3.classList.add("fade");
  b4.classList.add("fade");
  b5.classList.add("fade");
  b6.classList.add("fade");
  b7.classList.add("fade");
  b8.classList.add("fade");
  b9.classList.add("fade");
  b10.classList.add("fade");
}

// My Function
function sequenceClick(e) {
  if (e.id.match(numbers[x])) {
    correctClick(e);
    console.log(numbers[x]);
    if (x === 10) {
      endSequence();
    }
  } else {
    incorrectClick(e);
  }
}

// write a parameterized function that will...
// remove the onclick attribute of the number just clicked
// set onclick attribute of next number in sequence
// turn green if correctly clicked in ascending order
// turn red if a number is clicked out of order

//https://www.w3schools.com/jsref/met_element_setattribute.asp
