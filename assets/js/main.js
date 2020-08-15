// media query event handler
if (matchMedia) {
  const mq = window.matchMedia('(max-width: 767px)')
  mq.addListener(WidthChange)
  WidthChange(mq)
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $(window).on('scroll', function (e) {
      if ($(window).scrollTop() > 670) {
        $('.arrow-up-mobile').fadeIn()
      } else {
        $('.arrow-up-mobile').hide()
      }
    })
  }
}
