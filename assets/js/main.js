// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 767px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $(window).on("scroll", function (e) {
      if ($(window).scrollTop() > 670) {
        $(".arrow-up-mobile").fadeIn();
      } else {
        $(".arrow-up-mobile").hide();
      }
    });
  }
}

// FAQ According handling
$(function () {
  let allAccordions = document.querySelectorAll("#faqAccordion button");
  let allArrowDown = document.querySelectorAll("#faqAccordion .icon");

  allAccordions.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("collapsed")) {
        allArrowDown[index].classList.add("open");
      } else {
        allArrowDown[index].classList.remove("open");
      }
    });
  });
});

// Rate Mode Changer
const sellBtn = document.querySelector("#sell");
const buyBtn = document.querySelector("#buy");
$(function () {
  sellBtn.addEventListener("click", switchTab);
  buyBtn.addEventListener("click", switchTab);
});

function switchTab() {
  if (this.id === "sell") {
    sellBtn.classList.add("mode-active");
    buyBtn.classList.remove("mode-active");
  } else {
    buyBtn.classList.add("mode-active");
    sellBtn.classList.remove("mode-active");
  }
}
