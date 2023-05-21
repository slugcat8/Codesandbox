// call this function when "orange-kid" is clicked

function moveGif() {
  document.getElementById("orange-man").classList.add("fly-forward");
  document.getElementById("button1").classList.add("translucent");

  document.getElementById("button2").classList.remove("translucent");
  document.getElementById("blue-man").src = "images/vegeta_before.png";
}

// call this function when "blue-man" is clicked!
function changePicture() {
  document.getElementById("blue-man").src = "images/vegeta_ultrainstinct.png";
  document.getElementById("button2").classList.add("translucent");

  document.getElementById("button1").classList.remove("translucent");
  document.getElementById("orange-man").classList.add("fly-backward");
}
