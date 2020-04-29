$("#change-offer-btn").click(function () {
  $("#oferta").addClass("hidden");
  $("#ofertas").removeClass("hidden");
});

var montoRequerido = new Cleave("input[name='monto-requerido']", {
  numeral: true,
  numeralThousandsGroupStyle: "thousand",
  prefix: "$",
  noImmediatePrefix: true,
});

var periodos = new Cleave("input[name='descuento']", {
  numeral: true,
  numeralThousandsGroupStyle: "thousand",
  prefix: "$",
  noImmediatePrefix: true,
});

// objeto constructor para formateo dinero
var formatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
});

// rangeslider
// slider para seleccionar el monto del credito
var $element = $('input[type="range"]');
var $handle;

$element
  .rangeslider({
    polyfill: false,
    onInit: function () {
      $handle = $(".rangeslider__handle", this.$range);
      updateHandle($handle[0], this.value);
      $handle.addClass("shake-active");
    },
  })
  .on("input", function () {
    updateHandle($handle[0], this.value);
  });

var montoCredito;
function updateHandle(el, val) {
  montoCredito = parseInt(val);
  actualizaMontoYDescuento();
}

function actualizaMontoYDescuento() {
  const numQuincenas = parseInt(
    $("select[name='periodos']").children("option:selected").val()
  );
  let montoFormateado = formatter.format(montoCredito.toFixed(2));
  $("input[name='monto-requerido']").val(montoFormateado);
  let descuento = formatter.format((montoCredito / numQuincenas).toFixed(2));
  $("input[name='descuento']").val(descuento);
}

$(document).ready(function () {
  //when slider changes, hide start message
  $("input[type='range']").on("change", function () {
    $handle.removeClass("shake-active");
  });
});

$("select[name='periodos']").change(actualizaMontoYDescuento);
