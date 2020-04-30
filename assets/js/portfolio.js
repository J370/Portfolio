$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $($anchor.attr("href")).offset().top },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 100) {
    $(".navbar-default").addClass("shrink");
  } else {
    $(".navbar-default").removeClass("shrink");
  }
});
$(".page-scroll").click(function () {
  $(".collapse").collapse("hide");
});
//Animate on scroll
AOS.init();
window.addEventListener('load', AOS.refresh);