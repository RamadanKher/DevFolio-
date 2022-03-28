



let AboutOffset = $("#About").offset().top;
// console.log(AboutOffset)
$(window).scroll(function () {
  let scrolNawo = $(window).scrollTop();
  // console.log(scrolNawo)
  if (scrolNawo > AboutOffset) {
    $(".btnbtn").fadeIn();
        $(".navbar").css("background-color", "black");  
  } else {
    $(".btnbtn").fadeOut();
        $(".navbar").css({
      "background-color": "transparent",
      transition: "all 1s",
    });
  }
});
$(".nav-link").click(function () {
  let nameLink = $(this).attr("href");
  let linkOfstt = $(nameLink).offset().top;
 
  $("body").animate({scrollTop:linkOfstt},3000);
});
$(".btnbtn").click(function () {
    $("HTML,BODY").animate({scrollTop:0},1000);

})
$(document).ready(function () {
  $("#loding").fadeOut(2000,function () {
    $("BODY").css("overflow","auto")
  });
})
