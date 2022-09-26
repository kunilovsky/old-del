let scrollpos = window.scrollY
const header = document.getElementById("scroll")
const scrollChange = 500
const add_class_on_scroll = () => header.classList.add("navbar-bg")
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) { add_class_on_scroll() }
})