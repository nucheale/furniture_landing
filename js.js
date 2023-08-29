if (screen.width > 768) {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show')
      }
    })
  }

  let options = {
    threshold: [0.5],
  }
  let observer = new IntersectionObserver(onEntry, options)
  let elements = document.querySelectorAll('.element-animation')

  for (let elm of elements) {
    observer.observe(elm)
  }
}

const anchors = document.querySelectorAll('.anchor')

function anchorScroll(anchors) {
  anchors.forEach((element) => {
    element.addEventListener('click', function (evt) {
      evt.preventDefault()
      burgerButton.classList.remove('active')
      links.classList.remove('opened')
      body.classList.remove('fixed-pos')
      const elementID = element.getAttribute('href')
      document.querySelector(elementID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        offset: 270,
      })
    })
  })
}

anchorScroll(anchors)
