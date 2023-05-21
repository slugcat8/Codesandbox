// VARIABLES

// variables help to keep my functions dry and readable
var youWin = document.getElementById("you_win");
var slot1 = document.getElementById("slot_1");
var slot2 = document.getElementById("slot_2");
var slot3 = document.getElementById("slot_3");

// FUNCTIONS

// clickJackpot plays the "yoWin" sound when all the slots are the cherry image

function win() {
  youWin.play();

  slot1.classList.add("fade");
  slot2.classList.add("fade");
  slot3.classList.add("fade");

  slot1.removeAttribute("onclick");
  slot2.removeAttribute("onclick");
  slot3.removeAttribute("onclick");
}

function checkIfWin() {
  if (
    slot1.src.match("images/cherry_slot.PNG") &&
    slot2.src.match("images/cherry_slot.PNG") &&
    slot3.src.match("images/cherry_slot.PNG")
  ) {
    win();
  }
}

// clickSlot1, clickSlot2, and clickSlot3 just switch the displayd image depending on which image is currently selected using conditional statements
function clickSlot1() {
  if (slot1.src.match("images/cherry_slot.PNG")) {
    slot1.src = "images/lemon_slot.PNG";
  } else if (slot1.src.match("images/lemon_slot.PNG")) {
    slot1.src = "images/orange_slot.PNG";
  } else if (slot1.src.match("images/orange_slot.PNG")) {
    slot1.src = "images/cherry_slot.PNG";
    checkIfWin();
  }
}

function clickSlot2() {
  if (slot2.src.match("images/lemon_slot.PNG")) {
    slot2.src = "images/bar_slot.PNG";
  } else if (slot2.src.match("images/bar_slot.PNG")) {
    slot2.src = "images/cherry_slot.PNG";
    checkIfWin();
  } else if (slot2.src.match("images/cherry_slot.PNG")) {
    slot2.src = "images/lemon_slot.PNG";
  }
}

function clickSlot3() {
  if (slot3.src.match("images/orange_slot.PNG")) {
    slot3.src = "images/cherry_slot.PNG";
    checkIfWin();
  } else if (slot3.src.match("images/cherry_slot.PNG")) {
    slot3.src = "images/seven_slot.PNG";
  } else if (slot3.src.match("images/seven_slot.PNG")) {
    slot3.src = "images/bar_slot.PNG";
  } else if (slot3.src.match("images/bar_slot.PNG")) {
    slot3.src = "images/orange_slot.PNG";
  }
}

const slots = [
  "images/cherry_slot.PNG",
  "images/lemon_slot.PNG",
  "images/orange_slot.PNG",
  "images/bar_slot.PNG",
  "images/seven_slot.PNG"
];

function clickJackpot() {
  var i1 = Math.floor(Math.random() * 5);
  var i2 = Math.floor(Math.random() * 5);
  var i3 = Math.floor(Math.random() * 5);

  slot1.src = slots[i1];
  slot2.src = slots[i2];
  slot3.src = slots[i3];
}
