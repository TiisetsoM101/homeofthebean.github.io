
const navbar = document.querySelector('#nav');
const menu = document.querySelector('#menu-btn');

menu.onclick = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('bx-x');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  menu.classList.remove('bx-x');;
}



















// Swiper Home
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    speed: 900,
    parallax: true,
    slidesPerView: "auto",
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
  });




  // Pop up Form
function openEmailForm() {
    var form = document.getElementById("email-form");
    form.classList.remove("hidden");
}

function closeEmailForm() {
    var form = document.getElementById("email-form");
    form.classList.add("hidden");
}

function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // Process the form data here

    // Reset the form fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
}