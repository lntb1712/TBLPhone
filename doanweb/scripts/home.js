//load
const load=document.querySelector(".load");
window.onload =function(){
  setInterval(()=>{
    load.style.display='none';
  },4000);
  setTimeout(()=>{
    document.querySelector(".main").style.display='block';
  })
}
//banner
const listImage = document.querySelector('.list-images')
const imgs = listImage.getElementsByTagName('img')
const btnLeft = document.querySelector('.btns-left')
const btnRight = document.querySelector('.btns-right')
const listIndex = document.querySelector('.index-images')
const index = listIndex.getElementsByClassName('active1')
const length = imgs.length;
let current = 0
const handleChangeSlide = () => {
  if (current == length - 1) {
    current = 0 //get current banner
    let width = imgs[0].offsetWidth; //get width
    listImage.style.transform = `translateX(0px)` 
    document.querySelector('.active1').classList.remove('active1') //remove active current banner
    document.querySelector('.index-item-' + current).classList.add('active1') //set active next banner
  }
  else {
    current++//plus current
    let width = imgs[0].offsetWidth;//get width
    listImage.style.transform = `translateX(${width * -1 * current}px)`  
    document.querySelector('.active1').classList.remove('active1')
    document.querySelector('.index-item-' + current).classList.add('active1')
  }
}
//set delay time 2s
let handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
//btn right banner
btnRight.addEventListener('click', () => {
  clearInterval(handleEventChangeSlide)
  handleChangeSlide()
  handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})
//btn left banner
btnLeft.addEventListener('click', () => {
  clearInterval(handleEventChangeSlide)
  if (current == 0) {
    current = length - 1
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`
    document.querySelector('.active1').classList.remove('active1')
    document.querySelector('.index-item-' + current).classList.add('active1')
  }
  else {
    current--
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`
    document.querySelector('.active1').classList.remove('active1')
    document.querySelector('.index-item-' + current).classList.add('active1')
  }
  handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})
//get banner with button
function currentSlide(n) {
  clearInterval(handleEventChangeSlide)
  current = n
  let width = imgs[0].offsetWidth;
  listImage.style.transform = `translateX(${width * -1 * current}px)`
  document.querySelector('.active1').classList.remove('active1')
  document.querySelector('.index-item-' + current).classList.add('active1')
  handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
}

// box product samsung
function box2() {

  //product list box2
  var listProductBox2 = document.querySelectorAll('.box2 .product_list_box2 .product_item_box2')
  var nextBox2 = document.querySelector('.btns2-right')
  var prevBox2 = document.querySelector('.btns2-left');

  var nextProductIndexBox2 = 3
  var indexClickBox2 = 0;
  for (let indexBox2 = 3; indexBox2 < listProductBox2.length; indexBox2++) {
    listProductBox2[indexBox2].classList.add('hide2')
  }

  nextBox2.onclick = function () {
    if (nextProductIndexBox2 > listProductBox2.length - 1) {
      nextBox2.removeAttribute('onclick');
    }
    else {
      listProductBox2[indexClickBox2].classList.add('hide2')
      listProductBox2[nextProductIndexBox2].classList.remove('hide2')
      indexClickBox2++
      nextProductIndexBox2++
    }
  }
  prevBox2.onclick = function () {
    if (indexClickBox2 == 0) {
      prevBox2.removeAttribute('onclick');
    }
    else {
      indexClickBox2--
      nextProductIndexBox2--
      listProductBox2[indexClickBox2].classList.remove('hide2')
      listProductBox2[nextProductIndexBox2].classList.add('hide2')

    }
  }
}

//box product samsung for mobile
function box2_mobile() {

  //product list box2
  var listProductBox2 = document.querySelectorAll('.box2 .product_list_box2 .product_item_box2')
  var nextBox2 = document.querySelector('.btns2-right')
  var prevBox2 = document.querySelector('.btns2-left');

  var nextProductIndexBox2 = 1
  var indexClickBox2 = 0;
  for (let indexBox2 = 1; indexBox2 < listProductBox2.length; indexBox2++) {
    listProductBox2[indexBox2].classList.add('hide2')
  }
  //btn next
  nextBox2.onclick = function () {
    if (nextProductIndexBox2 > listProductBox2.length - 1) {
      nextBox2.removeAttribute('onclick');
    }
    else {
      listProductBox2[indexClickBox2].classList.add('hide2')
      listProductBox2[nextProductIndexBox2].classList.remove('hide2')
      indexClickBox2++
      nextProductIndexBox2++
    }
  }

  //btn left
  prevBox2.onclick = function () {
    if (indexClickBox2 == 0) {
      prevBox2.removeAttribute('onclick');
    }
    else {
      indexClickBox2--
      nextProductIndexBox2--
      listProductBox2[indexClickBox2].classList.remove('hide2')
      listProductBox2[nextProductIndexBox2].classList.add('hide2')

    }
  }
}

//product list box1 iphone
function box1() {
  var listProduct = document.querySelectorAll('.box1 .product_list .product_item')
  var prev = document.querySelector('.btns1-left')
  var next = document.querySelector('.btns1-right')



  var nextProductIndex = 3
  var indexClick = 0;
  for (let index = 3; index < listProduct.length; index++) {
    listProduct[index].classList.add('hide')
  }
  next.onclick = function () {
    if (nextProductIndex > 5) {
      next.removeAttribute("onclick");
    }
    else {
      listProduct[indexClick].classList.add('hide')
      listProduct[nextProductIndex].classList.remove('hide')
      indexClick++
      nextProductIndex++
    }
  }
  prev.onclick = function () {
    if (indexClick == 0) {
      prev.removeAttribute("onclick");
    }
    else {
      indexClick--
      nextProductIndex--
      listProduct[indexClick].classList.remove('hide')
      listProduct[nextProductIndex].classList.add('hide')

    }
  }

}

//box product iphone for mobile
function box1_mobile() {
  var listProduct = document.querySelectorAll('.box1 .product_list .product_item')
  var prev = document.querySelector('.btns1-left')
  var next = document.querySelector('.btns1-right')



  var nextProductIndex = 1
  var indexClick = 0;
  for (let index = 1; index < listProduct.length; index++) {
    listProduct[index].classList.add('hide')
  }
  next.onclick = function () {
    if (nextProductIndex > 5) {
      next.removeAttribute("onclick");
    }
    else {
      listProduct[indexClick].classList.add('hide')
      listProduct[nextProductIndex].classList.remove('hide')
      indexClick++
      nextProductIndex++
    }
  }
  prev.onclick = function () {
    if (indexClick == 0) {
      prev.removeAttribute("onclick");
    }
    else {
      indexClick--
      nextProductIndex--
      listProduct[indexClick].classList.remove('hide')
      listProduct[nextProductIndex].classList.add('hide')

    }
  }

}

//if media is window, box1() and box2() will active

if (window.matchMedia("(min-width: 768px)").matches) {
  box1();
  box2();
} else if (window.matchMedia("(max-width: 431px)").matches) { // if media is phone , box1_mobile() and box2_mobile() will active
  box1_mobile();
  box2_mobile();
}

//validate form

function validate() {
  var email = emailInput.value.trim();
  var name = nameInput.value.trim();
  var pass = passInput.value.trim();
  var phone = phoneInput.value;

  var isValid = true;

  if (name === '') {
    nameErrorMessage.textContent = 'Vui lòng nhập tên của bạn.';
    isValid = false;
  } else {
    nameErrorMessage.textContent = '';
  }
  if (pass === '') {
    passErrorMessage.textContent = 'Vui lòng nhập password của bạn.';
    isValid = false;
  } else {
    passErrorMessage.textContent = '';
  }
  if (!validateEmail(emailInput.value)) {
    emailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
    isValid = false;
  } else {
    emailErrorMessage.textContent = '';
  }
  if (phone === '') {
    phoneErrorMessage.textContent = 'Vui lòng nhập số điện thoại của bạn.';
    isValid = false;
  } else if(isNaN(phone))//validate phone type
  {
    phoneErrorMessage.textContent = 'Vui lòng nhập đúng kiểu số.';
    isValid = false;
  } else if (phone.length <= 9 || phone.length >=11) {
    phoneErrorMessage.textContent = 'Vui lòng nhập đủ 10 số.';
    isValid = false;
  
  }else if (!phone.startsWith('0')){
    phoneErrorMessage.textContent = 'Vui lòng nhập bắt đầu bằng 0.';
    isValid = false;
  }else{
    phoneErrorMessage.textContent = '';
  }
  if (isValid) {
    window.history.back();
}

}

// validate email
function validateEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}