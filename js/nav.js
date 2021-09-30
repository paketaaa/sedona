let navButton = document.querySelector('.main-nav__toggle')
let mainNav = document.querySelector('.site-navigation')

navButton.addEventListener('click', function () {
  if (mainNav.classList.contains('site-navigation--closed')) {
    mainNav.classList.remove('site-navigation--closed')
    mainNav.classList.add('site-navigation--opened')
    navButton.classList.remove('main-nav__toggle--closed');
    navButton.classList.add('main-nav__toggle--opened');
  }
  else {
    mainNav.classList.remove('site-navigation--opened')
    mainNav.classList.add('site-navigation--closed')
    navButton.classList.remove('main-nav__toggle--opened');
    navButton.classList.add('main-nav__toggle--closed');
  }

})
