const nav = document.querySelector('#main')
const carousel = document.querySelector('#my-carousel')
const topOfNav = nav.offsetTop
function fixNav () {
  if (window.scrollY > topOfNav) {
    carousel.style.paddingTop = nav.offsetHeight + 'px'
    nav.classList.add('navbar-fixed-top')
  } else {
    carousel.style.paddingTop = 0
    nav.classList.remove('navbar-fixed-top')
  }
}
window.addEventListener('scroll', fixNav)

// add listener for window resize to adjust sticky nav after page load
