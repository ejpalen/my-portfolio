const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

window.addEventListener("scroll", function () {
  let nav = this.document.querySelector(".navwrapper");
  let windowPosition = window.scrollY > 10;

  nav.classList.toggle("scrolling-active", windowPosition);
});

// var top1 = $("#about").offset().top;
// var top2 = $("#skills").offset().top;
// var top3 = $("#projects").offset().top;
// var top4 = $("#contact").offset().top;

// $(document).scroll(function () {
//   var scrollPos = $(document).scrollTop();
//   if (scrollPos >= top1 && scrollPos < top2) {
//     $("#about-nav").css("background-color", "#6D7975");
//     $("#about-nav").css("color", "#fff");
//     $("#skills-nav").css("color", "#000");
//     $("#projects-nav").css("color", "#000");
//     $("#contact-nav").css("color", "#000");

//     $("#skills-nav").css("background-color", "#fff");
//     $("#projects-nav").css("background-color", "#fff");
//     $("#contact-nav").css("background-color", "#fff");
//   } else if (scrollPos >= top2 && scrollPos < top3) {
//     $("#skills-nav").css("background-color", "#6D7975");
//     $("#about-nav").css("color", "#000");
//     $("#skills-nav").css("color", "#fff");
//     $("#projects-nav").css("color", "#000");
//     $("#contact-nav").css("color", "#000");

//     $("#about-nav").css("background-color", "#fff");
//     $("#projects-nav").css("background-color", "#fff");
//     $("#contact-nav").css("background-color", "#fff");
//   } else if (scrollPos >= top3 && scrollPos < top4) {
//     $("#projects-nav").css("background-color", "#6D7975");
//     $("#about-nav").css("color", "#000");
//     $("#skills-nav").css("color", "#000");
//     $("#projects-nav").css("color", "#fff");
//     $("#contact-nav").css("color", "#000");

//     $("#about-nav").css("background-color", "#fff");
//     $("#skills-nav").css("background-color", "#fff");
//     $("#contact-nav").css("background-color", "#fff");
//   } else if (scrollPos >= top4) {
//     $("#contact-nav").css("background-color", "#6D7975");
//     $("#about-nav").css("color", "#000");
//     $("#skills-nav").css("color", "#000");
//     $("#projects-nav").css("color", "#000");
//     $("#contact-nav").css("color", "#fff");

//     $("#projects-nav").css("background-color", "#fff");
//     $("#about-nav").css("background-color", "#fff");
//     $("#skills-nav").css("background-color", "#fff");
//   } else if (scrollPos < top1) {
//     $("#about-nav").css("background-color", "#fff");
//     $("#about-nav").css("color", "#000");
//   }
// });

// let aboutNav = document
//   .querySelector("#about-nav")
//   .addEventListener("click", back);

// function back() {
//   aboutNav.classList.toggle("active");
// }
