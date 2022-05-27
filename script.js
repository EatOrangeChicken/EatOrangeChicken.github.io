document.getElementById('switch').onclick = function() {
  if (document.getElementById('theme').href == "orange.css") {
    document.getElementById('theme').href = "style.css";
  } else {
    document.getElementById('theme').href = "orange.css";
  }
};
