// Variables
var swapCounter = 1;

var el1_id;
var el1_src;

var el2_id;
var el2_src;

var gen_id;

var r1c1 = document.getElementById("r1c1");
var r2c1 = document.getElementById("r2c1");
var r3c1 = document.getElementById("r3c1");
var r4c1 = document.getElementById("r4c1");

var r1c2 = document.getElementById("r1c2");
var r2c2 = document.getElementById("r2c2");
var r3c2 = document.getElementById("r3c2");
var r4c2 = document.getElementById("r4c2");

var r1c3 = document.getElementById("r1c3");
var r2c3 = document.getElementById("r2c3");
var r3c3 = document.getElementById("r3c3");
var r4c3 = document.getElementById("r4c3");

var r1c4 = document.getElementById("r1c4");
var r2c4 = document.getElementById("r2c4");
var r3c4 = document.getElementById("r3c4");
var r4c4 = document.getElementById("r4c4");

var r1c1_src;
var r2c1_src;
var r3c1_src;
var r4c1_src;

var r1c2_src;
var r2c2_src;
var r3c2_src;
var r4c2_src;

var r1c3_src;
var r2c3_src;
var r3c3_src;
var r4c3_src;

var r1c4_src;
var r2c4_src;
var r3c4_src;
var r4c4_src;

var hintButton = document.getElementById("hint_button");

var maxIndex = 15;

var mysteryCounter = 16;

var isBoardSwapped = false;
var isTileSelected;

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

function preventNullReading() {
  if (isBoardSwapped === false) {
    document.getElementById(el1_id).classList.remove("tile-select");
  } else if (isBoardSwapped === true) {
    if (isTileSelected === true) {
      document.getElementById(el1_id).classList.add("tile-select");
    } else if (isTileSelected === false) {
      document.getElementById(el1_id).classList.remove("tile-select");
    }
  }
}

function boardSwap() {
  if (isBoardSwapped === false) {
    preventNullReading();
    r1c1_src = r1c1.getAttribute("src");
    r2c1_src = r2c1.getAttribute("src");
    r3c1_src = r3c1.getAttribute("src");
    r4c1_src = r4c1.getAttribute("src");

    r1c2_src = r1c2.getAttribute("src");
    r2c2_src = r2c2.getAttribute("src");
    r3c2_src = r3c2.getAttribute("src");
    r4c2_src = r4c2.getAttribute("src");

    r1c3_src = r1c3.getAttribute("src");
    r2c3_src = r2c3.getAttribute("src");
    r3c3_src = r3c3.getAttribute("src");
    r4c3_src = r4c3.getAttribute("src");

    r1c4_src = r1c4.getAttribute("src");
    r2c4_src = r2c4.getAttribute("src");
    r3c4_src = r3c4.getAttribute("src");
    r4c4_src = r4c4.getAttribute("src");

    r1c1.src = "images/tiles/empty_dot.png";
    r2c1.src = "images/tiles/empty_dot.png";
    r3c1.src = "images/tiles/blank.png";
    r4c1.src = "images/tiles/blank.png";

    r1c2.src = "images/tiles/empty_dot.png";
    r2c2.src = "images/tiles/empty_dot.png";
    r3c2.src = "images/tiles/empty_dot.png";
    r4c2.src = "images/tiles/blank.png";

    r1c3.src = "images/tiles/down_curve.png";
    r2c3.src = "images/tiles/left_curve.png";
    r3c3.src = "images/tiles/right_arrow.png";
    r4c3.src = "images/tiles/empty_dot.png";

    r1c4.src = "images/tiles/blank.png";
    r2c4.src = "images/tiles/blank.png";
    r3c4.src = "images/tiles/down_curve.png";
    r4c4.src = "images/tiles/empty_dot.png";

    r1c1.removeAttribute("onclick");
    r2c1.removeAttribute("onclick");
    r3c1.removeAttribute("onclick");
    r4c1.removeAttribute("onclick");

    r1c2.removeAttribute("onclick");
    r2c2.removeAttribute("onclick");
    r3c2.removeAttribute("onclick");
    r4c2.removeAttribute("onclick");

    r1c3.removeAttribute("onclick");
    r2c3.removeAttribute("onclick");
    r3c3.removeAttribute("onclick");
    r4c3.removeAttribute("onclick");

    r1c4.removeAttribute("onclick");
    r2c4.removeAttribute("onclick");
    r3c4.removeAttribute("onclick");
    r4c4.removeAttribute("onclick");

    var allTiles = document.querySelectorAll(".correct-position");
    var allTilesArr = Array.from(allTiles);

    var i = 0;
    allTilesArr.forEach(function () {
      allTilesArr[i].style.visibility = "hidden";
      i++;
    });

    var allTileImgs = document.querySelectorAll(".clear");
    var allTileImgsArr = Array.from(allTileImgs);

    i = 0;
    allTileImgsArr.forEach(function () {
      allTileImgsArr[i].classList.add("tag");
      allTileImgsArr[i].style.visibility = "visible";
      allTileImgsArr[i].classList.remove("clear");
      i++;
    });

    isBoardSwapped = true;
  } else if (isBoardSwapped === true) {
    preventNullReading();
    r1c1.src = r1c1_src;
    r2c1.src = r2c1_src;
    r3c1.src = r3c1_src;
    r4c1.src = r4c1_src;

    r1c2.src = r1c2_src;
    r2c2.src = r2c2_src;
    r3c2.src = r3c2_src;
    r4c2.src = r4c2_src;

    r1c3.src = r1c3_src;
    r2c3.src = r2c3_src;
    r3c3.src = r3c3_src;
    r4c3.src = r4c3_src;

    r1c4.src = r1c4_src;
    r2c4.src = r2c4_src;
    r3c4.src = r3c4_src;
    r4c4.src = r4c4_src;

    r1c1.setAttribute("onclick", "swapElements(this)");
    r2c1.setAttribute("onclick", "swapElements(this)");
    r3c1.setAttribute("onclick", "swapElements(this)");
    r4c1.setAttribute("onclick", "swapElements(this)");

    r1c2.setAttribute("onclick", "swapElements(this)");
    r2c2.setAttribute("onclick", "swapElements(this)");
    r3c2.setAttribute("onclick", "swapElements(this)");
    r4c2.setAttribute("onclick", "swapElements(this)");

    r1c3.setAttribute("onclick", "swapElements(this)");
    r2c3.setAttribute("onclick", "swapElements(this)");
    r3c3.setAttribute("onclick", "swapElements(this)");
    r4c3.setAttribute("onclick", "swapElements(this)");

    r1c4.setAttribute("onclick", "swapElements(this)");
    r2c4.setAttribute("onclick", "swapElements(this)");
    r3c4.setAttribute("onclick", "swapElements(this)");
    r4c4.setAttribute("onclick", "swapElements(this)");

    i = 0;
    var allTagImgs = document.querySelectorAll(".tag");
    var allTagImgsArr = Array.from(allTagImgs);

    allTagImgsArr.forEach(function () {
      allTagImgsArr[i].parentElement.style.visibility = "visible";
      allTagImgsArr[i].style = "visible";
      allTagImgsArr[i].classList.add("clear");
      allTagImgsArr[i].removeAttribute("onclick");
      i++;
    });

    isBoardSwapped = false;
  }
}

function playSound(i) {
  if (i === 1) {
    var stoneSlide = new Audio();
    stoneSlide.src = "audio/stone_slide.mp3";
    stoneSlide.play();
  } else if (i === 2) {
    var ding = new Audio();
    ding.src = "audio/ding.mp3";
    ding.play();
  } else if (i === 3) {
    var marioSound = new Audio();
    marioSound.src = "audio/mario_sound.mp3";
    marioSound.play();
  } else if (i === 4) {
    var victory = new Audio();
    victory.src = "audio/victory.mp3";
    victory.play();
  }
}

function activateBoardSwapFunctionality() {
  playSound(3);
  hintButton.src = "images/cycle.png";
  hintButton.addEventListener("click", boardSwap);
}

function flipMystery() {
  let randTile = Math.floor(Math.random() * maxIndex);
  document.getElementById(gen_id).src = tiles[randTile];
  tiles.splice(randTile, 1);
  maxIndex--;
  mysteryCounter--;
  if (mysteryCounter < 1) {
    activateBoardSwapFunctionality();
  }
}

function swapSound(t) {
  if (t === false) {
    playSound(1);
  } else {
    playSound(2);
  }
}

function checkIfCorrectPosition(el, parent_id) {
  if (
    document.getElementById(el).src.match("images/tiles/right_arrow.png") &&
    document.getElementById(el).getAttribute("id").match("r1c1")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else if (
    document.getElementById(el).src.match("images/tiles/right_arrow.png") &&
    document.getElementById(el).getAttribute("id").match("r1c2")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else if (
    document.getElementById(el).src.match("images/tiles/down_curve.png") &&
    document.getElementById(el).getAttribute("id").match("r1c3")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else if (
    document.getElementById(el).src.match("images/tiles/right_curve.png") &&
    document.getElementById(el).getAttribute("id").match("r2c2")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else if (
    document.getElementById(el).src.match("images/tiles/left_curve.png") &&
    document.getElementById(el).getAttribute("id").match("r2c3")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else if (
    document.getElementById(el).src.match("images/tiles/up_curve.png") &&
    document.getElementById(el).getAttribute("id").match("r3c2")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else if (
    document.getElementById(el).src.match("images/tiles/right_arrow.png") &&
    document.getElementById(el).getAttribute("id").match("r3c3")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else if (
    document.getElementById(el).src.match("images/tiles/down_curve.png") &&
    document.getElementById(el).getAttribute("id").match("r3c4")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else if (
    document.getElementById(el).src.match("images/tiles/up_curve.png") &&
    document.getElementById(el).getAttribute("id").match("r4c4")
  ) {
    swapSound(true);
    document.getElementById(parent_id).style.visibility = "visible";
    document.getElementById(el).classList.add("clear");
    document.getElementById(el).removeAttribute("onclick");
  } else {
    swapSound(false);
  }
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
    swapCounter++;
    document.getElementById(el1_id).classList.add("tile-select");
    isTileSelected = true;
  } else if (swapCounter === 2) {
    //var el2 = t;
    el2_id = t.getAttribute("id");
    el2_src = t.getAttribute("src");
    var parent_id = document.getElementById(el2_id).parentElement.id;
    swapCounter++;
    document.getElementById(el2_id).src = el1_src;
    document.getElementById(el1_id).src = el2_src;
    document.getElementById(el1_id).classList.remove("tile-select");
    isTileSelected = false;
    checkIfCorrectPosition(el2_id, parent_id);
    swapCounter = 1;

    setTimeout(checkIfWin, 1000);

    return el1_id;
  }
}

function win() {
  document.getElementById("modal").style.display = "flex";
  playSound(4);
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

function nextPage() {
  window.location.href = "https://pbx7hr.csb.app/";
}
