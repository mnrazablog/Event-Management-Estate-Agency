function mymenuicon() {
  var x = document.getElementById("myheader-navigation-links");
  if (x.className === "header-navigation-links") {
    x.className += " responsive";
  } else {
     x.className = "header-navigation-links";
  }
}