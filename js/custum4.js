$(window).scroll(function () {
  //스크롤 높이 측정----------------------------------------------------------------
  var top = $(window).scrollTop();
  console.log(top);

  if (top >= 930) {
    $("header, .logo, .gnb, .util > li svg").addClass("active");
  } else {
    $("header, .logo, .gnb, .util>li svg").removeClass("active");
  }
});

// header-탭메뉴----------------------------------------------------------------------
var lnb = $('.lnb > div');
$(lnb).hide();
$('#TH').mouseenter(function(){
  $(lnb).eq(0).stop().fadeIn();
  $(lnb).eq(1).hide()
  $('header').addClass('down');
  $('header').removeClass('up');
  $('.gnb, .login_icon svg, .search_icon svg').addClass('active');
})
$('#CO').mouseenter(function(){
  $(lnb).eq(1).stop().fadeIn();
  $(lnb).eq(0).hide();
  $('header').addClass('down');
  $('header').removeClass('up');
  $('.gnb, .login_icon svg, .search_icon svg').addClass('active');
})
$('header').mouseleave(function(){
  $(lnb).fadeOut(200);
  $('header').removeClass('down');
  $('header').addClass('up');
  $('.gnb, .login_icon svg, .search_icon svg').removeClass('active');
})

//nav 호버시 이미지 변경-----------------------------------------------------------------------
$(document).ready(function () {
  var icon = $(".lnb_menu > ul > li");
  var item = $(".lnb_img > img");
  item.hide();
  item.eq(0).show();
  
  for (let i = 0; i < icon.length; i++) {
    $(icon)
      .eq(i)
      .on("mouseenter", function () {
        item.hide();
        $(item).eq(i).stop().show();
      });
  }
});
$(document).ready(function () {
  var icon = $(".lnb_menu2 > ul > li");
  var item = $(".lnb_img2 > img");
  item.hide();
  item.eq(0).show();
  
  for (let i = 0; i < icon.length; i++) {
    $(icon)
      .eq(i)
      .on("mouseenter", function () {
        item.hide();
        $(item).eq(i).stop().show();
      });
  }
});
// sec2-탭메뉴----------------------------------------------------------------------------------
$(document).ready(function () {
  var icon = $(".tyn_menu > li");

  for (let i = 0; i < icon.length; i++) {
    var item = $(".need_items");
    item.hide();
    item.eq(0).show();

    $(icon)
      .eq(i)
      .on("click", function () {
        item.hide();
        $(item).eq(i).stop().show();
        $(".menu ul li span").removeClass("on");
        $(this).children("span").addClass("on");
      });
  }
});
