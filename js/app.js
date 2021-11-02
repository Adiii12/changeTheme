function openTab(evt, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function menuAnimation() {
  var element = document.getElementById("tab");
  var element1 = document.getElementById("admin_nav");
  if (element && element1) {
    element.classList.toggle("navSlide");
    element1.classList.toggle("navSlide1");
  }
}

function changeColor() {
  var elem = document.getElementById("changes_color");

  if (elem) {
    elem.classList.toggle("navChange");
  }
}

function darkMode() {
  var ele = document.getElementById("tab");
  var ele2 = document.getElementById("top-tab");
  ele.classList.add("changeColor");
  ele2.classList.add("changeColor");
  ele.classList.remove("navBlue");
  ele2.classList.remove("navBlue");
  ele.classList.remove("lightColor");
  ele2.classList.remove("lightColor");
}
function blueMode() {
  var ele = document.getElementById("tab");
  var ele2 = document.getElementById("top-tab");
  ele.classList.add("navBlue");
  ele2.classList.add("navBlue");
  ele.classList.remove("changeColor");
  ele2.classList.remove("changeColor");
  ele.classList.remove("lightColor");
  ele2.classList.remove("lightColor");
}

function lightMode() {
  var ele = document.getElementById("tab");
  var ele2 = document.getElementById("top-tab");
  ele.classList.add("lightColor");
  ele2.classList.add("lightColor");
  ele.classList.remove("navBlue");
  ele2.classList.remove("navBlue");
  ele.classList.remove("changeColor");
  ele2.classList.remove("changeColor");
}
function defaultMode() {
  var ele = document.getElementById("tab");
  var ele2 = document.getElementById("top-tab");
  ele.classList.remove("lightColor");
  ele2.classList.remove("lightColor");
  ele.classList.remove("navBlue");
  ele2.classList.remove("navBlue");
  ele.classList.remove("changeColor");
  ele2.classList.remove("changeColor");
}
