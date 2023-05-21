// var list

// boxes

var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");

var eBox = document.getElementById("box_entry");

// portrait images

var gLizPortrait = document.getElementById("G_liz_portrait");
var pLizPortrait = document.getElementById("P_liz_portrait");
var nootflyPortrait = document.getElementById("nootfly_portrait");
var squidcadaPortrait = document.getElementById("squidcada_portrait");

var molePortrait = document.getElementById("mole_portrait");
var mirosPortrait = document.getElementById("miros_portrait");
var spidersPortrait = document.getElementById("spiders_portrait");
var mousePortrait = document.getElementById("mouse_portrait");

var salamanderPortrait = document.getElementById("salamander_portrait");
var jetfishPortrait = document.getElementById("jetfish_portrait");
var leviathanPortrait = document.getElementById("leviathan_portrait");
var vulturePortrait = document.getElementById("vulture_portrait");

// entries

var outskirtsEntry = document.getElementById("outskirts_entry");
var shadedCitadelEntry = document.getElementById("shaded_citadel_entry");
var shorelineEntry = document.getElementById("shoreline_entry");

var gLizEntry = document.getElementById("G_liz_entry");
var pLizEntry = document.getElementById("P_liz_entry");
var nootflyEntry = document.getElementById("nootfly_entry");
var squidcadaEntry = document.getElementById("squidcada_entry");

var moleEntry = document.getElementById("mole_entry");
var mirosEntry = document.getElementById("miros_entry");
var spidersEntry = document.getElementById("spiders_entry");
var mouseEntry = document.getElementById("mouse_entry");

var salamanderEntry = document.getElementById("salamander_entry");
var jetfishEntry = document.getElementById("jetfish_entry");
var leviathanEntry = document.getElementById("leviathan_entry");
var vultureEntry = document.getElementById("vulture_entry");

// zones
var z1 = document.getElementById("zone1");
var z2 = document.getElementById("zone2");
var z3 = document.getElementById("zone3");

// text
var des = document.getElementById("description");
var t1 = document.getElementById("text1");
var t2 = document.getElementById("text2");

var outskirtsBio = document.getElementById("outskirts_bio");
var outskirtsInhabitants = document.getElementById("outskirts_inhabitants");
var gLizBio = document.getElementById("G_liz_bio");
var gLizBehavior = document.getElementById("G_liz_behavior");
var pLizBio = document.getElementById("P_liz_bio");
var pLizBehavior = document.getElementById("P_liz_behavior");
var nootflyBio = document.getElementById("nootfly_bio");
var nootflyBehavior = document.getElementById("nootfly_behavior");
var squidcadaBio = document.getElementById("squidcada_bio");
var squidcadaBehavior = document.getElementById("squidcada_behavior");

var shadedCitadelBio = document.getElementById("shaded_citadel_bio");
var shadedCitadelInhabitants = document.getElementById(
  "shaded_citadel_inhabitants"
);
var moleBio = document.getElementById("mole_bio");
var moleBehavior = document.getElementById("mole_behavior");
var mirosBio = document.getElementById("miros_bio");
var mirosBehavior = document.getElementById("miros_behavior");
var spidersBio = document.getElementById("spiders_bio");
var spidersBehavior = document.getElementById("spiders_behavior");
var mouseBio = document.getElementById("mouse_bio");
var mouseBehavior = document.getElementById("mouse_behavior");

var shorelineBio = document.getElementById("shoreline_bio");
var shorelineInhabitants = document.getElementById("shoreline_inhabitants");
var salamanderBio = document.getElementById("salamander_bio");
var salamanderBehavior = document.getElementById("salamander_behavior");
var jetfishBio = document.getElementById("jetfish_bio");
var jetfishBehavior = document.getElementById("jetfish_behavior");
var leviathanBio = document.getElementById("leviathan_bio");
var leviathanBehavior = document.getElementById("leviathan_behavior");
var vultureBio = document.getElementById("vulture_bio");
var vultureBehavior = document.getElementById("vulture_behavior");

// FUNCTION LIST

function gLizClick() {
  // click user feedback
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");
  b1.classList.add("translucent");

  // hide zone entry
  outskirtsEntry.classList.add("hide");

  outskirtsBio.classList.add("hide");
  outskirtsInhabitants.classList.add("hide");

  // swap to coresponding entry
  pLizEntry.classList.add("hide");
  nootflyEntry.classList.add("hide");
  squidcadaEntry.classList.add("hide");
  gLizEntry.classList.remove("hide");

  pLizBio.classList.add("hide");
  pLizBehavior.classList.add("hide");
  nootflyBio.classList.add("hide");
  nootflyBehavior.classList.add("hide");
  squidcadaBio.classList.add("hide");
  squidcadaBehavior.classList.add("hide");

  gLizBio.classList.remove("hide");
  gLizBehavior.classList.remove("hide");
}

function pLizClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");
  b2.classList.add("translucent");

  // hide zone entry
  outskirtsEntry.classList.add("hide");

  outskirtsBio.classList.add("hide");
  outskirtsInhabitants.classList.add("hide");

  // swap to coresponding entry
  gLizEntry.classList.add("hide");
  nootflyEntry.classList.add("hide");
  squidcadaEntry.classList.add("hide");
  pLizEntry.classList.remove("hide");

  gLizBio.classList.add("hide");
  gLizBehavior.classList.add("hide");
  nootflyBio.classList.add("hide");
  nootflyBehavior.classList.add("hide");
  squidcadaBio.classList.add("hide");
  squidcadaBehavior.classList.add("hide");

  pLizBio.classList.remove("hide");
  pLizBehavior.classList.remove("hide");
}

function nootflyClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b4.classList.remove("translucent");
  b3.classList.add("translucent");

  // hide zone entry
  outskirtsEntry.classList.add("hide");

  outskirtsBio.classList.add("hide");
  outskirtsInhabitants.classList.add("hide");

  // swap to coresponding entry
  gLizEntry.classList.add("hide");
  pLizEntry.classList.add("hide");
  squidcadaEntry.classList.add("hide");
  nootflyEntry.classList.remove("hide");

  gLizBio.classList.add("hide");
  gLizBehavior.classList.add("hide");
  pLizBio.classList.add("hide");
  pLizBehavior.classList.add("hide");
  squidcadaBio.classList.add("hide");
  squidcadaBehavior.classList.add("hide");

  nootflyBio.classList.remove("hide");
  nootflyBehavior.classList.remove("hide");
}

function squidcadaClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.add("translucent");

  // hide zone entry
  outskirtsEntry.classList.add("hide");

  outskirtsBio.classList.add("hide");
  outskirtsInhabitants.classList.add("hide");

  // swap to coresponding entry
  gLizEntry.classList.add("hide");
  pLizEntry.classList.add("hide");
  nootflyEntry.classList.add("hide");
  squidcadaEntry.classList.remove("hide");

  gLizBio.classList.add("hide");
  gLizBehavior.classList.add("hide");
  pLizBio.classList.add("hide");
  pLizBehavior.classList.add("hide");
  nootflyBio.classList.add("hide");
  nootflyBehavior.classList.add("hide");

  squidcadaBio.classList.remove("hide");
  squidcadaBehavior.classList.remove("hide");
}

function moleClick() {
  // click user feedback
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");
  b1.classList.add("translucent");

  // hide zone entry
  shadedCitadelEntry.classList.add("hide");

  shadedCitadelBio.classList.add("hide");
  shadedCitadelInhabitants.classList.add("hide");

  // swap to coresponding entry
  mirosEntry.classList.add("hide");
  spidersEntry.classList.add("hide");
  mouseEntry.classList.add("hide");
  moleEntry.classList.remove("hide");

  mirosBio.classList.add("hide");
  mirosBehavior.classList.add("hide");
  spidersBio.classList.add("hide");
  spidersBehavior.classList.add("hide");
  mouseBio.classList.add("hide");
  mouseBehavior.classList.add("hide");

  moleBio.classList.remove("hide");
  moleBehavior.classList.remove("hide");
}

function mirosClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");
  b2.classList.add("translucent");

  // hide zone entry
  shadedCitadelEntry.classList.add("hide");

  shadedCitadelBio.classList.add("hide");
  shadedCitadelInhabitants.classList.add("hide");

  // swap to coresponding entry
  moleEntry.classList.add("hide");
  spidersEntry.classList.add("hide");
  mouseEntry.classList.add("hide");
  mirosEntry.classList.remove("hide");

  moleBio.classList.add("hide");
  moleBehavior.classList.add("hide");
  spidersBio.classList.add("hide");
  spidersBehavior.classList.add("hide");
  mouseBio.classList.add("hide");
  mouseBehavior.classList.add("hide");

  mirosBio.classList.remove("hide");
  mirosBehavior.classList.remove("hide");
}

function spidersClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b4.classList.remove("translucent");
  b3.classList.add("translucent");

  // hide zone entry
  shadedCitadelEntry.classList.add("hide");

  shadedCitadelBio.classList.add("hide");
  shadedCitadelInhabitants.classList.add("hide");

  // swap to coresponding entry
  moleEntry.classList.add("hide");
  mirosEntry.classList.add("hide");
  mouseEntry.classList.add("hide");
  spidersEntry.classList.remove("hide");

  moleBio.classList.add("hide");
  moleBehavior.classList.add("hide");
  mirosBio.classList.add("hide");
  mirosBehavior.classList.add("hide");
  mouseBio.classList.add("hide");
  mouseBehavior.classList.add("hide");

  spidersBio.classList.remove("hide");
  spidersBehavior.classList.remove("hide");
}

function mouseClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.add("translucent");

  // hide zone entry
  shadedCitadelEntry.classList.add("hide");

  shadedCitadelBio.classList.add("hide");
  shadedCitadelInhabitants.classList.add("hide");

  // swap to coresponding entry
  moleEntry.classList.add("hide");
  mirosEntry.classList.add("hide");
  spidersEntry.classList.add("hide");
  mouseEntry.classList.remove("hide");

  moleBio.classList.add("hide");
  moleBehavior.classList.add("hide");
  mirosBio.classList.add("hide");
  mirosBehavior.classList.add("hide");
  spidersBio.classList.add("hide");
  spidersBehavior.classList.add("hide");

  mouseBio.classList.remove("hide");
  mouseBehavior.classList.remove("hide");
}

function salamanderClick() {
  // click user feedback
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");
  b1.classList.add("translucent");

  // hide zone entry
  shorelineEntry.classList.add("hide");

  shorelineBio.classList.add("hide");
  shorelineInhabitants.classList.add("hide");

  // swap to coresponding entry
  jetfishEntry.classList.add("hide");
  leviathanEntry.classList.add("hide");
  vultureEntry.classList.add("hide");
  salamanderEntry.classList.remove("hide");

  jetfishBio.classList.add("hide");
  jetfishBehavior.classList.add("hide");
  leviathanBio.classList.add("hide");
  leviathanBehavior.classList.add("hide");
  vultureBio.classList.add("hide");
  vultureBehavior.classList.add("hide");

  salamanderBio.classList.remove("hide");
  salamanderBehavior.classList.remove("hide");
}

function jetfishClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");
  b2.classList.add("translucent");

  // hide zone entry
  shorelineEntry.classList.add("hide");

  shorelineBio.classList.add("hide");
  shorelineInhabitants.classList.add("hide");

  // swap to coresponding entry
  salamanderEntry.classList.add("hide");
  leviathanEntry.classList.add("hide");
  vultureEntry.classList.add("hide");
  jetfishEntry.classList.remove("hide");

  salamanderBio.classList.add("hide");
  salamanderBehavior.classList.add("hide");
  leviathanBio.classList.add("hide");
  leviathanBehavior.classList.add("hide");
  vultureBio.classList.add("hide");
  vultureBehavior.classList.add("hide");

  jetfishBio.classList.remove("hide");
  jetfishBehavior.classList.remove("hide");
}

function leviathanClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b4.classList.remove("translucent");
  b3.classList.add("translucent");

  // hide zone entry
  shorelineEntry.classList.add("hide");

  shorelineBio.classList.add("hide");
  shorelineInhabitants.classList.add("hide");

  // swap to coresponding entry
  salamanderEntry.classList.add("hide");
  jetfishEntry.classList.add("hide");
  vultureEntry.classList.add("hide");
  leviathanEntry.classList.remove("hide");

  salamanderBio.classList.add("hide");
  salamanderBehavior.classList.add("hide");
  jetfishBio.classList.add("hide");
  jetfishBehavior.classList.add("hide");
  vultureBio.classList.add("hide");
  vultureBehavior.classList.add("hide");

  leviathanBio.classList.remove("hide");
  leviathanBehavior.classList.remove("hide");
}

function vultureClick() {
  // click user feedback
  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.add("translucent");

  // hide zone entry
  shorelineEntry.classList.add("hide");

  shorelineBio.classList.add("hide");
  shorelineInhabitants.classList.add("hide");

  // swap to coresponding entry
  salamanderEntry.classList.add("hide");
  jetfishEntry.classList.add("hide");
  leviathanEntry.classList.add("hide");
  vultureEntry.classList.remove("hide");

  salamanderBio.classList.add("hide");
  salamanderBehavior.classList.add("hide");
  jetfishBio.classList.add("hide");
  jetfishBehavior.classList.add("hide");
  leviathanBio.classList.add("hide");
  leviathanBehavior.classList.add("hide");

  vultureBio.classList.remove("hide");
  vultureBehavior.classList.remove("hide");
}

// zone switching

function outskirtsSwitch() {
  // click user feedback
  z2.classList.remove("translucent");
  z3.classList.remove("translucent");
  z1.classList.add("translucent");

  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");

  // change text box color
  des.classList.remove("light-orange");
  des.classList.remove("teal");
  t1.classList.remove("light-orange");
  t2.classList.remove("light-orange");
  t1.classList.remove("teal");
  t2.classList.remove("teal");

  des.classList.add("fuchsia");
  t1.classList.add("fuchsia");
  t2.classList.add("fuchsia");

  // reset current entry
  pLizEntry.classList.add("hide");
  nootflyEntry.classList.add("hide");
  squidcadaEntry.classList.add("hide");
  gLizEntry.classList.add("hide");

  gLizBio.classList.add("hide");
  gLizBehavior.classList.add("hide");
  pLizBio.classList.add("hide");
  pLizBehavior.classList.add("hide");
  nootflyBio.classList.add("hide");
  nootflyBehavior.classList.add("hide");
  squidcadaBio.classList.add("hide");
  squidcadaBehavior.classList.add("hide");

  moleEntry.classList.add("hide");
  mirosEntry.classList.add("hide");
  spidersEntry.classList.add("hide");
  mouseEntry.classList.add("hide");

  salamanderEntry.classList.add("hide");
  jetfishEntry.classList.add("hide");
  leviathanEntry.classList.add("hide");
  vultureEntry.classList.add("hide");

  moleBio.classList.add("hide");
  moleBehavior.classList.add("hide");
  mirosBio.classList.add("hide");
  mirosBehavior.classList.add("hide");
  spidersBio.classList.add("hide");
  spidersBehavior.classList.add("hide");
  mouseBio.classList.add("hide");
  mouseBehavior.classList.add("hide");

  salamanderBio.classList.add("hide");
  salamanderBehavior.classList.add("hide");
  jetfishBio.classList.add("hide");
  jetfishBehavior.classList.add("hide");
  leviathanBio.classList.add("hide");
  leviathanBehavior.classList.add("hide");
  vultureBio.classList.add("hide");
  vultureBehavior.classList.add("hide");

  shadedCitadelBio.classList.add("hide");
  shadedCitadelInhabitants.classList.add("hide");
  shorelineBio.classList.add("hide");
  shorelineInhabitants.classList.add("hide");

  // display zone entry
  shadedCitadelEntry.classList.add("hide");
  shorelineEntry.classList.add("hide");

  outskirtsEntry.classList.remove("hide");

  outskirtsBio.classList.remove("hide");
  outskirtsInhabitants.classList.remove("hide");

  // creature swap
  molePortrait.classList.add("hide");
  mirosPortrait.classList.add("hide");
  spidersPortrait.classList.add("hide");
  mousePortrait.classList.add("hide");

  salamanderPortrait.classList.add("hide");
  jetfishPortrait.classList.add("hide");
  leviathanPortrait.classList.add("hide");
  vulturePortrait.classList.add("hide");

  gLizPortrait.classList.remove("hide");
  pLizPortrait.classList.remove("hide");
  nootflyPortrait.classList.remove("hide");
  squidcadaPortrait.classList.remove("hide");
}

function citadelSwitch() {
  // click user feedback
  z1.classList.remove("translucent");
  z3.classList.remove("translucent");
  z2.classList.add("translucent");

  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");

  // change text box color
  des.classList.remove("fuchsia");
  des.classList.remove("teal");
  t1.classList.remove("fuchsia");
  t2.classList.remove("fuchsia");
  t1.classList.remove("teal");
  t2.classList.remove("teal");

  des.classList.add("light-orange");
  t1.classList.add("light-orange");
  t2.classList.add("light-orange");

  // reset current entry
  gLizEntry.classList.add("hide");
  pLizEntry.classList.add("hide");
  nootflyEntry.classList.add("hide");
  squidcadaEntry.classList.add("hide");

  moleEntry.classList.add("hide");
  mirosEntry.classList.add("hide");
  spidersEntry.classList.add("hide");
  mouseEntry.classList.add("hide");

  moleBio.classList.add("hide");
  moleBehavior.classList.add("hide");
  mirosBio.classList.add("hide");
  mirosBehavior.classList.add("hide");
  spidersBio.classList.add("hide");
  spidersBehavior.classList.add("hide");
  mouseBio.classList.add("hide");
  mouseBehavior.classList.add("hide");

  salamanderEntry.classList.add("hide");
  jetfishEntry.classList.add("hide");
  leviathanEntry.classList.add("hide");
  vultureEntry.classList.add("hide");

  gLizBio.classList.add("hide");
  gLizBehavior.classList.add("hide");
  pLizBio.classList.add("hide");
  pLizBehavior.classList.add("hide");
  nootflyBio.classList.add("hide");
  nootflyBehavior.classList.add("hide");
  squidcadaBio.classList.add("hide");
  squidcadaBehavior.classList.add("hide");

  salamanderBio.classList.add("hide");
  salamanderBehavior.classList.add("hide");
  jetfishBio.classList.add("hide");
  jetfishBehavior.classList.add("hide");
  leviathanBio.classList.add("hide");
  leviathanBehavior.classList.add("hide");
  vultureBio.classList.add("hide");
  vultureBehavior.classList.add("hide");

  // display zone entry
  outskirtsEntry.classList.add("hide");
  shorelineEntry.classList.add("hide");

  outskirtsBio.classList.add("hide");
  outskirtsInhabitants.classList.add("hide");
  shorelineBio.classList.add("hide");
  shorelineInhabitants.classList.add("hide");

  shadedCitadelEntry.classList.remove("hide");

  shadedCitadelBio.classList.remove("hide");
  shadedCitadelInhabitants.classList.remove("hide");

  // creature swap
  gLizPortrait.classList.add("hide");
  pLizPortrait.classList.add("hide");
  nootflyPortrait.classList.add("hide");
  squidcadaPortrait.classList.add("hide");

  salamanderPortrait.classList.add("hide");
  jetfishPortrait.classList.add("hide");
  leviathanPortrait.classList.add("hide");
  vulturePortrait.classList.add("hide");

  molePortrait.classList.remove("hide");
  mirosPortrait.classList.remove("hide");
  spidersPortrait.classList.remove("hide");
  mousePortrait.classList.remove("hide");
}

function shorelineSwitch() {
  // click user feedback
  z1.classList.remove("translucent");
  z2.classList.remove("translucent");
  z3.classList.add("translucent");

  b1.classList.remove("translucent");
  b2.classList.remove("translucent");
  b3.classList.remove("translucent");
  b4.classList.remove("translucent");

  // change text box color
  des.classList.remove("fuchsia");
  des.classList.remove("light-orange");
  t1.classList.remove("fuchsia");
  t2.classList.remove("fuchsia");
  t1.classList.remove("light-orange");
  t2.classList.remove("light-orange");

  des.classList.add("teal");
  t1.classList.add("teal");
  t2.classList.add("teal");

  // reset current entry
  gLizEntry.classList.add("hide");
  pLizEntry.classList.add("hide");
  nootflyEntry.classList.add("hide");
  squidcadaEntry.classList.add("hide");

  gLizBio.classList.add("hide");
  gLizBehavior.classList.add("hide");
  pLizBio.classList.add("hide");
  pLizBehavior.classList.add("hide");
  nootflyBio.classList.add("hide");
  nootflyBehavior.classList.add("hide");
  squidcadaBio.classList.add("hide");
  squidcadaBehavior.classList.add("hide");

  moleEntry.classList.add("hide");
  mirosEntry.classList.add("hide");
  spidersEntry.classList.add("hide");
  mouseEntry.classList.add("hide");

  moleBio.classList.add("hide");
  moleBehavior.classList.add("hide");
  mirosBio.classList.add("hide");
  mirosBehavior.classList.add("hide");
  spidersBio.classList.add("hide");
  spidersBehavior.classList.add("hide");
  mouseBio.classList.add("hide");
  mouseBehavior.classList.add("hide");

  salamanderEntry.classList.add("hide");
  jetfishEntry.classList.add("hide");
  leviathanEntry.classList.add("hide");
  vultureEntry.classList.add("hide");

  salamanderBio.classList.add("hide");
  salamanderBehavior.classList.add("hide");
  jetfishBio.classList.add("hide");
  jetfishBehavior.classList.add("hide");
  leviathanBio.classList.add("hide");
  leviathanBehavior.classList.add("hide");
  vultureBio.classList.add("hide");
  vultureBehavior.classList.add("hide");

  // display zone entry
  outskirtsEntry.classList.add("hide");
  shadedCitadelEntry.classList.add("hide");

  outskirtsBio.classList.add("hide");
  outskirtsInhabitants.classList.add("hide");
  shadedCitadelBio.classList.add("hide");
  shadedCitadelInhabitants.classList.add("hide");

  shorelineEntry.classList.remove("hide");

  shorelineBio.classList.remove("hide");
  shorelineInhabitants.classList.remove("hide");

  // creature swap
  gLizPortrait.classList.add("hide");
  pLizPortrait.classList.add("hide");
  nootflyPortrait.classList.add("hide");
  squidcadaPortrait.classList.add("hide");

  molePortrait.classList.add("hide");
  mirosPortrait.classList.add("hide");
  spidersPortrait.classList.add("hide");
  mousePortrait.classList.add("hide");

  salamanderPortrait.classList.remove("hide");
  jetfishPortrait.classList.remove("hide");
  leviathanPortrait.classList.remove("hide");
  vulturePortrait.classList.remove("hide");
}

function playThreat() {
  //play/reset track
  var audio = document.getElementById("threat");
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }

  // pause other tracks
  document.getElementById("floes").pause();
  document.getElementById("the_coast").pause();
}

function playFloes() {
  //play/reset track
  var audio = document.getElementById("floes");
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }

  // pause other tracks
  document.getElementById("threat").pause();
  document.getElementById("the_coast").pause();
}

function playTheCoast() {
  //play/reset track
  var audio = document.getElementById("the_coast");
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }

  //pause other tracks
  document.getElementById("threat").pause();
  document.getElementById("floes").pause();
}
