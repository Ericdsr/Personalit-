var part1 = document.getElementById("part1");
var part2 = document.getElementById("part2");
var part3 = document.getElementById("part3");
var part4 = document.getElementById("part4");
var part5 = document.getElementById("part5");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");


function activateDescription(element) {
  var description = element.querySelector(".description");
  if (description.classList.contains("active")) {
    description.classList.remove("active");
  } else {
    description.classList.add("active");
  }
}

function bwcolor(element) {
  var bwImage = document.querySelector(".bw");
  var colors = document.querySelector(".color");
  var part1 = document.getElementById("part1");
  var bwImage2 = document.querySelector(".bw2");
  var colors2 = document.querySelector(".color2");
  var part2 = document.getElementById("part2");
  var bwImage3 = document.querySelector(".bw3");
  var colors3 = document.querySelector(".color3");
  var part3 = document.getElementById("part3");
  var bwImage4 = document.querySelector(".bw4");
  var colors4 = document.querySelector(".color4");
  var part4 = document.getElementById("part4");
  var bwImage5 = document.querySelector(".bw5");
  var colors5 = document.querySelector(".color5");
  var part5 = document.getElementById("part5");
  var description = document.querySelector(".description");
  
  if (bwImage.classList.contains("active") && colors.classList.contains("active")) {
    bwImage.classList.remove("active");
    colors.classList.remove("active");
    part1.classList.remove("active");
    bwImage2.classList.remove("active");
    colors2.classList.remove("active");
    part2.classList.remove("active");
    bwImage3.classList.remove("active");
    colors3.classList.remove("active");
    part3.classList.remove("active");
    bwImage4.classList.remove("active");
    colors4.classList.remove("active");
    part4.classList.remove("active");
    bwImage5.classList.remove("active");
    colors5.classList.remove("active");
    part5.classList.remove("active");
    description.classList.remove("active");
    
  } else {
    bwImage.classList.add("active");
    colors.classList.add("active");
    part1.classList.add("active");
    description.classList.add("active");
    
  }
}
function bwcolor2(element) {
  var bwImage2 = element.querySelector(".bw2");
  var colors2 = element.querySelector(".color2");
  var part2 = document.getElementById("part2");
  
  if (bwImage2.classList.contains("active") && colors2.classList.contains("active")) {
    bwImage2.classList.remove("active");
    colors2.classList.remove("active");
    part2.classList.remove("active");
  } else {
    bwImage2.classList.add("active");
    colors2.classList.add("active");
    part2.classList.add("active");
  }
}
function bwcolor3(element) {
  var bwImage3 = element.querySelector(".bw3");
  var colors3 = element.querySelector(".color3");
  var part3 = document.getElementById("part3");
  
  if (bwImage3.classList.contains("active") && colors3.classList.contains("active")) {
    bwImage3.classList.remove("active");
    colors3.classList.remove("active");
    part3.classList.remove("active");
  } else {
    bwImage3.classList.add("active");
    colors3.classList.add("active");
    part3.classList.add("active");
  }
}
function bwcolor4(element) {
  var bwImage4 = element.querySelector(".bw4");
  var colors4 = element.querySelector(".color4");
  var part4 = document.getElementById("part4");
  
  if (bwImage4.classList.contains("active") && colors4.classList.contains("active")) {
    bwImage4.classList.remove("active");
    colors4.classList.remove("active");
    part4.classList.remove("active");
  } else {
    bwImage4.classList.add("active");
    colors4.classList.add("active");
    part4.classList.add("active");
  }
}

function bwcolor5(element) {
  var bwImage5 = element.querySelector(".bw5");
  var colors5 = element.querySelector(".color5");
  var part5 = document.getElementById("part5");
  
  if (bwImage5.classList.contains("active") && colors5.classList.contains("active")) {
    bwImage5.classList.remove("active");
    colors5.classList.remove("active");
    part5.classList.remove("active");
  } else {
    bwImage5.classList.add("active");
    colors5.classList.add("active");
    part5.classList.add("active");
  }
}

part1.addEventListener("click", function () {
  bwcolor(part1);
  
});

part2.addEventListener("click", function () {
  activateDescription(part2);
  bwcolor2(part2);
  
});

part3.addEventListener("click", function () {
  activateDescription(part3);
  bwcolor3(part3);
  
});

part4.addEventListener("click", function () {
  activateDescription(part4);
  bwcolor4(part4);
  
});

part5.addEventListener("click", function () {
  activateDescription(part5);
  bwcolor5(part5);
  
});

btn1.addEventListener("click", function () {
  activateDescription(part1);
  bwcolor(part1);
});

btn2.addEventListener("click", function () {
  activateDescription(part2);
  bwcolor2(part2);
});

btn3.addEventListener("click", function () {
  activateDescription(part3);
  bwcolor3(part3);
});

btn4.addEventListener("click", function () {
  activateDescription(part4);
  bwcolor4(part4);
});

btn5.addEventListener("click", function () {
  activateDescription(part5);
  bwcolor5(part5);
});