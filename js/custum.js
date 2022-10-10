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
