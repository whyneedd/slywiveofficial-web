const nav = document.querySelector(".navbar");
const scrollUp_btn = document.querySelector(".scrollTop");

window.onscroll = function() {
  var ScrollY = window.scrollY;

  if (ScrollY >= 100) {
    nav.classList.add("sticky")
    scrollUp_btn.classList.add("active-scroll")
  } else {
    nav.classList.remove("sticky")
    scrollUp_btn.classList.remove("active-scroll")

  }
}

scrollUp_btn.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}

var typed = new Typed('.writing', {
  strings: [
   "Utile",
   "Intelligent",
   "En ligne h24",
   "Reactif"
  ],
  typeSpeed: 120,
  backSpeed: 80,
  loop: true,
})