$(document).ready(function(){
    $('.hamburger .fa').on('click',function(){
        $('.wrapper').toggleClass('active');
    });
  //   $('.close .fa').on('click',function(){
  //     $('.wrapper').toggleClass('active');
  // });
}); 

// const menu = document.querySelectorAll("#menu");

// document.addEventListener("click", function(){
//   console.log('clicked');
//   menu.classList.toggle("close");
// });
const menu = document.querySelectorAll('#menu');
menu.addEventListener('click', myFunction);

function myFunction(){
  console.log('clicked');
}

// menu.addEventListener("mouseover", mySecondFunction);
// menu.addEventListener("mouseout", myThirdFunction);

// function myFunction(){

// }


// $(document).ready(function(){
//   $(".hamburder .fa").click(function(){
//     $(".wrapper").addClass("active");
//     console.log('here');
//   })
// }); 


// AOS Animation

// AOS.init({
//   duration:1900,
// });
