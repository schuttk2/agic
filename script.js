$(document).ready(function() {
  "use strict";
  $("a[href='#top']").click(function() {
      return $("html, body").animate({
          scrollTop: 0
      }, "slow"),
      !1
  }),
  $("a.scroll-to").on("click", function(e) {
      var t = $(this);
      $("html, body").stop().animate({
          scrollTop: $(t.attr("href")).offset().top - 50
      }, 700),
      e.preventDefault()
  }),
  $(".site-testimonial-item").on("mouseenter", function() {
      $(".site-testimonial-item").addClass("inactive"),
      $(this).removeClass("inactive").addClass("active")
  }),
  $(".site-testimonial-item").on("mouseleave", function() {
      $(".site-testimonial-item").removeClass("inactive"),
      $(".site-testimonial-item").removeClass("active")
  })
}),
$(window).on("scroll", function() {
  var e = $(window).scrollTop();
  e >= 100 ? $(".site-navigation").addClass("nav-bg") : $(".site-navigation").removeClass("nav-bg")
})