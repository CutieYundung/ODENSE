$(window).scroll(function () {
  //스크롤 높이 측정
  var top = $(window).scrollTop();
  console.log(top);

  if (top >= 930) {
    $("header, .logo, .gnb, .util > li svg").addClass("active");
  } else {
    $("header, .logo, .gnb, .util>li svg").removeClass("active");
  }
});

// header-탭메뉴
// $("#COL").hide();
// $(".gnb, .lnb").mouseenter(function () {
//   $(".lnb").stop().show();
//   $(this, "header").addClass("active");
//   $(".menu ul li span").addClass("on");
// });
// $(".gnb, .lnb, header").mouseleave(function () {
//   $(".lnb").stop().hide();
//   $(".menu ul li span").removeClass("on");
//   $(this, "header").removeClass("active");
//   $("header").removeClass("active");
// });

// var gnb = $(".gnb > li");

// for (let i = 0; i < 2; i++) {
//   var lnb = $(".lnb > div");

//   $(gnb)
//     .eq(i)
//     .on("mouseenter", function () {
//       lnb.hide();
//       $(lnb).eq(i).stop().show();
//       $(".menu ul li span").removeClass("on");
//       $(this).children("span").addClass("on");
//     });
// }

// sec2-탭메뉴
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
