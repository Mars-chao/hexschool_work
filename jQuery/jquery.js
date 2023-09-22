$(document).ready(function () {
  $(".product").click(function (event) {
    event.preventDefault();

    //上方li固定顏色
    $(this).toggleClass('active');

    // 開啟當前選單
    $(this).next().toggleClass('active');
    //   $(this).parent().siblings().find("ul").slideUp();
  });


  $(".contract").click(function (event) {
    event.preventDefault();
    
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
    // $(this).parent().siblings().find("ul").slideUp();
  });

  // 視窗滑動 => top 按鈕會顯現
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".top").fadeIn(250);
    }
    else {
      $(".top").fadeOut(250);
    }
  });

});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 500,
  loop: true,
  autoplay: {
    delay: 1500,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});