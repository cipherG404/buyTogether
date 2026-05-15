let listenBtn = document.getElementById("listBtn");
let closeBtn = document.getElementById("closeBtn");
let mobileMenu = document.getElementById("menuMobile");

listenBtn.onclick = () => {
  // console.log("click!!");
  mobileMenu.classList.toggle("active");
}

closeBtn.onclick = () => {
  mobileMenu.classList.toggle("active");
}

$(document).ready(function(){
  $(window).load(function(){
    $('.loading').fadeOut(500);
  });
});

$('.searchImg').click(function(){
  // $('.searchBar').fadeToggle(300);
  $('.searchBar').animate({width:'toggle'},300);
});

$('.login').click(function(){
  // console.log("login");
  location.href = "../src/login.html";
});

$('.logout').click(function(){
  $('.logout,.login,.column,.loginArea,.loginSucc').removeClass('active');
  alert("Logout successful !");
  location.href = "../src/login.html";
});
