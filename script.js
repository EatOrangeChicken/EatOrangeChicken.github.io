document.getElementById('switch').onclick = function change() {
  if (document.getElementById('theme').href == "style.css") {
    document.getElementById('theme').href = "orange.css";
  } else {
    document.getElementById('theme').href = "style.css";
  }
};
change();
