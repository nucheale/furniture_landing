if (screen.width < 768) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 20,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
  })
}
