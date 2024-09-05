let navbarContainer = document.querySelector('.navbar-container')
let links = document.querySelector('.links')
let menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click', function () {
  let navbarContainerHeight = navbarContainer.getBoundingClientRect().height
  let linksHeight = links.getBoundingClientRect().height

  if (navbarContainerHeight === 0) {
    navbarContainer.style.height = `${linksHeight}px`
  } else {
    navbarContainer.style.height = 0
  }
})
