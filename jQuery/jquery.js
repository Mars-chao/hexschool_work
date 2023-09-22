$(document).ready(function () {
    $(".product").click(function (event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $(".dropdownOpenProduct li").slideToggle();
    //   $(this).parent().siblings().find("ul").slideUp();
     });
    $(".contract").click(function (event) {
      event.preventDefault();
      $(this).toggleClass('active');
      // $(this).parent().siblings().find("ul").slideUp();
      $(".dropdownOpenContent li").slideToggle();
    });
    $('.top a').click(function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 700);
    })
  });