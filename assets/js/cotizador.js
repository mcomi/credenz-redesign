$("#change-offer-btn").click(function () {
  $("#oferta").addClass("hidden");
  $("#ofertas").removeClass("hidden");
});

var cleave = new Cleave("input[name='monto-requerido']", {
  numeral: true,
  numeralThousandsGroupStyle: "thousand",
  prefix: "$",
  noImmediatePrefix: true,
});

var cleave = new Cleave("input[name='periodos']", {
  numeral: true,
  numeralThousandsGroupStyle: "thousand",
  prefix: "$",
  noImmediatePrefix: true,
});
