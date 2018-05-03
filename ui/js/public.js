$(document).ready(function() {
  $(".parHd li").click(function() {
    $(this).addClass("on");
    $(this).css("color", "#60B452")
    $(this).siblings().removeClass("on");
    $(this).siblings().css("color", "#000");
  })
  // 返回顶部
  $('.back-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
  $(".footer-main-title").click(function() {
    $(this).siblings(".footer-desc").slideToggle();
    $(this).find("i:eq(0)").toggleClass("display");
  })
  $(".icon-arrow-t").click(function() {
    $(this).parent().siblings(".menu-desc").slideToggle();
    $(this).toggleClass("flipy");
  })
  $(".icon-menu").click(function() {
    $(".menu-list").slideToggle();
  })
  $(".search-menu .icon-search").click(function() {
    $("#overflow,#overflow-box").show();
  })
  $("#overflow-box .icon-close").click(function() {
    $("#overflow,#overflow-box").hide();
  })
})