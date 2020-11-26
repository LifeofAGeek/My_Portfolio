/*Changing Institune name*/
let text = [
  "Open Source Contibutor",
  "Competitive Programmer",
  "Android Developer",
  "Department of Computer Science, University of Delhi",
];
var counter = 1;
var elem = document.getElementById("changeText");
setInterval(change, 2500);
function change() {
  elem.classList.add("hide");
  setTimeout(function () {
    elem.innerHTML = text[counter];
    elem.classList.remove("hide");
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
  }, 500);
}

/*part of Changing color of NavBar from transparent to Black on scrool*/
function tog(e) {
  if (!e.classList.contains("open")) {
    e.classList.add("open");
    tar.classList.remove("nav-items");
    tar.classList.add("toggeled");
    nelem.style["background-color"] = "#000000";
  } else {
    e.classList.remove("open");
    tar.classList.add("nav-items");
    tar.classList.remove("toggeled");
    if (
      document.body.scrollTop < window.innerHeight - 500 &&
      document.documentElement.scrollTop < window.innerHeight - 500
    ) {
      nelem.style.backgroundColor = "";
    }
  }
}
