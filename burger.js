const burgerButton = document.querySelector('.burger')
const links = document.querySelector('.links')
const body = document.querySelector('body')

burgerButton.onclick = () => {
  burgerButton.classList.toggle('active')
  links.classList.toggle('opened')
  body.classList.toggle('fixed-pos')
}
