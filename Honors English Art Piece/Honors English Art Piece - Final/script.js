// VARIABLES

document
  .getElementById("green-light")
  .addEventListener("click", playIncreaseSize);

document.getElementById("text").addEventListener("click", playSlideInOut);

document.getElementById("woman").addEventListener("click", playFadeInRedLight);

function fadeInText() {
  document.getElementById("text-box").classList.replace("hidden", "visible");
  document.getElementById("text-box").classList.add("play-appear");
}

var sizes = [
  "play-increase-size1",
  "play-increase-size2",
  "play-increase-size3"
];

var i = 0;
function playIncreaseSize() {
  document.getElementById("green-light").classList.add(sizes[i]);
  i++;
  if (i > 2) {
    document
      .getElementById("green-light")
      .removeEventListener("click", playIncreaseSize);
    document
      .getElementById("green-light")
      .addEventListener("click", function () {
        document.getElementById("green-light").classList.add("play-dissapear");
        setTimeout(function () {
          document
            .getElementById("green-light")
            .classList.replace("visible", "hidden");
          fadeInText();
        }, 2000);
      });
  }
}

function playSlideInOut() {
  document.getElementById("text").classList.add("play-slide-to-left");
  setTimeout(function () {
    document.getElementById("text-box").classList.replace("visible", "hidden");
  }, 2000);
  document.getElementById("woman").classList.replace("hidden", "visible");
  setTimeout(function () {
    document.getElementById("woman").classList.add("play-slide-in-from-right");
  }, 2000);
}

function playFadeInRedLight() {
  document.getElementById("woman").style.translate = "0% 0%";
  document.getElementById("woman").classList.add("play-fade");
  setTimeout(function () {
    document.getElementById("woman").classList.replace("visible", "hidden");
    document.getElementById("red-light").classList.replace("hidden", "visible");
    document
      .getElementById("red-light")
      .classList.add("play-fade-in-red-light");
  }, 3000);
}
