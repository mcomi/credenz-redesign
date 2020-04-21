$(".collapse").on("show.bs.collapse", function () {
  console.log($(this));
  $(this).addClass("active");
  $(this)
    .siblings(".card-header")
    .find("img.collapse-icon")
    .attr("src", "assets/img/icons/minus.png");
});

$(".collapse").on("hide.bs.collapse", function () {
  console.log("$(this)");
  $(this).removeClass("active");
  $(this)
    .siblings(".card-header")
    .find("img.collapse-icon")
    .attr("src", "assets/img/icons/plus.png");
});

$("#close-icon").click(function () {
  $("#top-toast").hide();
  $("#logo-navbar").css("margin-top", "0");
  $("#menu-navbar").css("margin-top", "76px");
});
