$("#step-2").hide();
$("#step-3").hide();
$("#step-4").hide();

$("#estado").on("change", function (e) {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;
  console.log(valueSelected);
  $("#step-1").hide();
  $("#step-2").show();
});

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
