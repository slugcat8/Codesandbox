// Variables

var swapCounter = 1;

var el1_id;
var el1_src;

var el2_id;
var el2_src;

var gen_id;

var r1c1 = document.getElementById("r1c1");
var r1c2 = document.getElementById("r1c2");
var r1c3 = document.getElementById("r1c3");
var r2c2 = document.getElementById("r2c2");
var r2c3 = document.getElementById("r2c3");
var r3c2 = document.getElementById("r3c2");
var r3c3 = document.getElementById("r3c3");
var r3c4 = document.getElementById("r3c4");
var r4c4 = document.getElementById("r4c4");

let maxIndex = 15;

var stoneSlide = document.getElementById("stone_slide");

// Lists

const tiles = [
  "images/tiles/right_arrow.png",
  "images/tiles/right_arrow.png",
  "images/tiles/down_curve.png",
  "images/tiles/right_curve.png",
  "images/tiles/left_curve.png",
  "images/tiles/up_curve.png",
  "images/tiles/right_arrow.png",
  "images/tiles/down_curve.png",
  "images/tiles/up_curve.png",
  "images/tiles/down_arrow.png",
  "images/tiles/left_arrow.png",
  "images/tiles/down_curve.png",
  "images/tiles/right_curve.png",
  "images/tiles/left_curve.png",
  "images/tiles/up_arrow.png",
  "images/tiles/right_arrow.png"
];

// Functions

function flipMystery() {
  let randTile = Math.floor(Math.random() * maxIndex);
  console.log(randTile);
  document.getElementById(gen_id).src = tiles[randTile];
  tiles.splice(randTile, 1);
  maxIndex--;
  console.log(tiles);
}

function swapElements(t) {
  gen_id = t.getAttribute("id");
  if (document.getElementById(gen_id).src.match("images/tiles/unflipped.png")) {
    flipMystery();
    return;
  }
  if (swapCounter === 1) {
    //var el1 = t;
    el1_id = t.getAttribute("id");
    el1_src = t.getAttribute("src");
    console.log(el1_src);
    swapCounter++;
    document.getElementById(el1_id).classList.toggle("tile-select");
  } else if (swapCounter === 2) {
    //var el2 = t;
    el2_id = t.getAttribute("id");
    console.log(el2_id);
    el2_src = t.getAttribute("src");
    swapCounter++;
    console.log(el1_src);
    console.log(el2_id);
    document.getElementById(el2_id).src = el1_src;
    document.getElementById(el1_id).src = el2_src;
    document.getElementById(el1_id).classList.toggle("tile-select");
    document.getElementById(el2_id).setAttribute("id", el1_id);
    document.getElementById(el1_id).setAttribute("id", el2_id);
    stoneSlide.load();
    stoneSlide.play();
    swapCounter = 1;

    setTimeout(checkIfWin, 1000);
  }
}

function win() {
  document.getElementById("modal").style.display = "flex";
}

function checkIfWin() {
  if (
    r1c1.src.match("images/tiles/right_arrow.png") &&
    r1c2.src.match("images/tiles/right_arrow.png") &&
    r1c3.src.match("images/tiles/down_curve.png") &&
    r2c2.src.match("images/tiles/right_curve.png") &&
    r2c3.src.match("images/tiles/left_curve.png") &&
    r3c2.src.match("images/tiles/up_curve.png") &&
    r3c3.src.match("images/tiles/right_arrow.png") &&
    r3c4.src.match("images/tiles/down_curve.png") &&
    r4c4.src.match("images/tiles/up_curve.png")
  ) {
    win();
  }
}
