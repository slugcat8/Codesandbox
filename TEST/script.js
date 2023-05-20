var p1 = document.getElementById("puzzle1");
var p2 = document.getElementById("puzzle2");
var p3;
var p4;

var x = 0;

// functions for patrick, squidward, sandy, and krabs images
function changeToSponge(e, div) {
  console.log(e);
  e.classList.add("opaque");
  e.src = "images/spongebob.png";
  document
    .getElementById(div)
    .classList.remove("yellow", "pink", "purple", "green");
  x++;
  if (x === 4) {
    document.getElementById("puzzle1").classList.remove("hidden");
    document.getElementById("puzzle2").classList.remove("hidden");
    document.getElementById("puzzle3").classList.remove("hidden");
    document.getElementById("puzzle4").classList.remove("hidden");
  }
}
// functions for puzzle piece images

function allToSponge() {
  document.getElementById("puzzle1").classList.add("opaque");
  document.getElementById("puzzle1").src = "images/puzzle/sponge1.png";
  document.getElementById("puzzle2").classList.add("opaque");
  document.getElementById("puzzle2").src = "images/puzzle/sponge2.png";
  document.getElementById("puzzle3").classList.add("opaque");
  document.getElementById("puzzle3").src = "images/puzzle/sponge3.png";
  document.getElementById("puzzle4").classList.add("opaque");
  document.getElementById("puzzle4").src = "images/puzzle/sponge4.png";
}

function checkifMatch() {
  if (
    document.getElementById("puzzle1").src.match("images/puzzle/doodle1.jpg") &&
    document.getElementById("puzzle2").src.match("images/puzzle/doodle2.jpg") &&
    document.getElementById("puzzle3").src.match("images/puzzle/doodle3.jpg") &&
    document.getElementById("puzzle4").src.match("images/puzzle/doodle4.jpg")
  ) {
    allToSponge();
    document.getElementById("reset-button").classList.remove("hidden");
  }
}

const pieces = [
  "images/puzzle/doodle1.jpg",
  "images/puzzle/doodle2.jpg",
  "images/puzzle/doodle3.jpg",
  "images/puzzle/doodle4.jpg"
];

var i = 1;
function piece(e) {
  // NOTE: all four puzzle slots can cycle with the same order!
  e.src = pieces[i];
  i++;
  if (i > 3) {
    i = 0;
  }
  checkifMatch();
}

function reset() {
  window.location.reload();
}
