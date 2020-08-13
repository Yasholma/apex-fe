$(window).on('scroll', function (e) {
  if ($(window).scrollTop() > 670) {
    $('.arrow-up-mobile').fadeIn()
  } else {
    $('.arrow-up-mobile').fadeOut()
  }
})
