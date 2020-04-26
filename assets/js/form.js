$("#step-2").hide();
$("#step-3").hide();
$("#step-4").hide();

$("#dependencia").on("change", function (e) {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;
  console.log(valueSelected);
  $("#step-2").hide();
  $("#step-3").show();
});

$(".step-control").on("click", function (e) {
  $("#step-3").hide();
  $("#step-4").show();
});
