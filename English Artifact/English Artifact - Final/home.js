const menuOptions = document.querySelectorAll(".box");

document.getElementById("b1").onclick = function showModal1() {
  hideMenu("modal1");
};

document.getElementById("b2").onclick = function showModal2() {
  hideMenu("modal2");
};

document.getElementById("b3").onclick = function showModal3() {
  hideMenu("modal3");
};

document.getElementById("b4").onclick = function showModal4() {
  hideMenu("modal4");
};

function hideMenu(modal) {
  var i = 0;
  menuOptions.forEach(function () {
    menuOptions[i].style.display = "none";
    i++;
  });
  document.getElementById(modal).style.display = "flex";
}

function hideModal(modal) {
  var i = 0;
  menuOptions.forEach(function () {
    menuOptions[i].style.display = "flex";
    i++;
  });
  document.getElementById(modal).style.display = "none";
}
