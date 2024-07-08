let slideIndex = 1;
showSlides(slideIndex);
setInterval(plusSlides, 3000);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function plusSlides() {
    showSlides(slideIndex += 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function clickActive(n){
    let colors= document.querySelectorAll(".box_des .box_des_item_color");
    for (i = 0; i < colors.length; i++) {
        if(colors[i].closest(" .action1")){
        colors[i].className = colors[i].className.replace(" action1", "");
        colors[i].className+=" action";}
        if (i===n){
            colors[i].className+=" action1";
        }
    }
}
// Click add product detail
function clickActive1(n){
    let colors= document.querySelectorAll(".box_des .box_des_item");
    for (i = 0; i < colors.length; i++) {
        if(colors[i].closest(" .action1")){
        colors[i].className = colors[i].className.replace(" action1", "");
        colors[i].className+=" action";}
        if (i===n){
            colors[i].className+=" action1";
        }
    }
}

function count() {
    var addBtn = document.querySelector(".purcharse .add");
let dem =0 ;
addBtn.onclick = function (e) {
    dem++;
    document.querySelector(".chart_quantity").innerHTML = dem;
}
}

count();


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}