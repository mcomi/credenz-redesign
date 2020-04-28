const oferta = new URLSearchParams(window.location.search).get("oferta");
if (oferta === "true") {
  $("#oferta").removeClass("hidden");
} else {
  $("#step-1").removeClass("hidden");
}

$("input[name='dependencia']").on("change", function (e) {
  $("#select-dependencia-especifica").removeClass("hidden");
});

$("select[name='dependencia-especifica']").on("change", function (e) {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;
  console.log(valueSelected);
  $("#step-1").addClass("hidden");
  $("#step-2").removeClass("hidden");
});

$("input[name='nomina']").on("click", function (e) {
  $("#monto-ingreso").removeClass("hidden");
});

$("input[name='monto-quincenal']").keyup(function (e) {
  if ($("input[name='monto-quincenal']").val() !== "")
    $("#btn-ingreso-next").attr("disabled", false);
});

$(".step-control").on("click", function (e) {
  $("#step-2").addClass("hidden");
  $("#step-3").removeClass("hidden");
});

$("input[name='nombre']").keyup(function () {
  if ($(this).val() !== "") $(this).addClass("valid");
});

$("input[name='email']").keyup(function () {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test($(this).val())) {
    $(this).addClass("valid");
  }
});

$("input[name='cellphone']").keyup(function () {
  let regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (regex.test($(this).val())) {
    $(this).addClass("valid");
  }
});

$("#change-offer-btn").click(function () {
  $("#oferta").addClass("hidden");
  $("#ofertas").removeClass("hidden");
});
