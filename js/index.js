$(document).ready(function() {
  const $counters = $(".scroll_on");
  
  const exposurePercentage = 100;
  const loop = true;
  $(window).on('scroll', function() {
      $counters.each(function() {
          const $el = $(this);
          const rect = $el[0].getBoundingClientRect();
          const winHeight = window.innerHeight;
          const contentHeight = rect.bottom - rect.top;
          
          if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
              $el.addClass('active');
          }
          if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
              $el.removeClass('active');
          }
      });
  }).scroll();
});



$(document).ready(function(){

  const mobSubBtn = $('nav .sub_menu .depth1>li');

  mobSubBtn.click(function(){
    $(this).siblings().find(".depth2").slideUp(300);
    $(this).siblings().removeClass("active");

    $(this).find(".depth2").slideToggle(200);
    $(this).toggleClass("active");
  });

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  mobBtn.on("click", function () {
    BODY.toggleClass("mOpen");
  });

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    //console.log(scroll);
    if (scroll > 60) {
      BODY.addClass("scrolling");
      scrollTopBtn.addClass('On');
    }else{
      BODY.removeClass("scrolling");
      scrollTopBtn.removeClass('On');
    }
  });

  scrollTopBtn.on('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });

  let $img = $(".slide ul li"),
      oldImg=0,
      newImg=0,
      count=$img.length;

  function changeimg(newImg){
    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("img_visible");
      $img.eq(newImg).addClass("img_visible");
    };
    oldImg = newImg;
  };
  function autoImg(){
    newImg++;
    if(newImg>count-1){
      newImg=0;
    }
    changeimg(newImg);
  };
  timerImg = setInterval(autoImg,4000);


});
