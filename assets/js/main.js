// function myFunction(x) {
//   if (x.matches) {
//     // If media query matches
//     $(window).on('scroll', function (e) {
//       if ($(window).scrollTop() > 670) {
//         $('.arrow-up-mobile').fadeIn()
//       } else {
//         $('.arrow-up-mobile').fadeOut()
//       }
//     })
//   } else {
//     $('.arrow-up-mobile').fadeOut()
//   }
// }

// var x = window.matchMedia('(max-width: 767px)')
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

// media query event handler
if (matchMedia) {
  const mq = window.matchMedia('(max-width: 767px)')
  mq.addListener(WidthChange)
  WidthChange(mq)
}

// media query change
function WidthChange(mq) {
  console.log(mq)
  if (mq.matches) {
    $(window).on('scroll', function (e) {
      if ($(window).scrollTop() > 670) {
        $('.arrow-up-mobile').fadeIn()
      } else {
        $('.arrow-up-mobile').fadeOut()
      }
    })
  }
}
