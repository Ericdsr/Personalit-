var part1 = document.getElementById('part1');
var part2 = document.getElementById('part2');
var part3 = document.getElementById('part3');
var part4 = document.getElementById('part4');
var part5 = document.getElementById('part5');


function activateDescription(element) {
  var description = element.querySelector('.description');
  description.classList.toggle('active');
}
function bwcolor(element){
    var bwImage = element.querySelector('.bw');
    bwImage.classList.toggle('active');
    var colors = element.querySelector('.color');
    colors.classList.toggle('active');
}
function bwcolor2(element){
    var bwImage2 = element.querySelector('.bw2');
    bwImage2.classList.toggle('active');
    var colors2 = element.querySelector('.color2');
    colors2.classList.toggle('active');
}
function bwcolor3(element){
    var bwImage3 = element.querySelector('.bw3');
    bwImage3.classList.toggle('active');
    var colors3 = element.querySelector('.color3');
    colors3.classList.toggle('active');
}
function bwcolor4(element){
    var bwImage4 = element.querySelector('.bw4');
    bwImage4.classList.toggle('active');
    var colors4 = element.querySelector('.color4');
    colors4.classList.toggle('active');
}
function bwcolor5(element){
    var bwImage5 = element.querySelector('.bw5');
    bwImage5.classList.toggle('active');
    var colors5 = element.querySelector('.color5');
    colors5.classList.toggle('active');
}

part1.addEventListener('click', function() {
  activateDescription(part1);
  bwcolor(part1);
});

part2.addEventListener('click', function() {
  activateDescription(part2);
  bwcolor2(part2);
});

part3.addEventListener('click', function() {
  activateDescription(part3);
  bwcolor3(part3);
});

part4.addEventListener('click', function() {
  activateDescription(part4);
  bwcolor4(part4);
});

part5.addEventListener('click', function() {
  activateDescription(part5);
  bwcolor5(part5);
});
