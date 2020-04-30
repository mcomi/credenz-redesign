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
  if ($(this).val() !== "") $("#btn-ingreso-next").attr("disabled", false);
});

var cleave = new Cleave("input[name='monto-quincenal']", {
  numeral: true,
  numeralThousandsGroupStyle: "thousand",
  prefix: "$",
  noImmediatePrefix: true,
});

$(".step-control").on("click", function (e) {
  $("#step-2").addClass("hidden");
  $("#step-3").removeClass("hidden");
  // $("header").removeClass("masthead-form").addClass("masthead-cotizador");
});

$("#btn-take-offer").click(function () {
  $("#step-3").addClass("hidden");
  $("#step-4").removeClass("hidden");
  // $("header").removeClass("masthead-cotizador").addClass("masthead-form");
});

$("input[name='nombre']").keyup(function () {
  if ($(this).val() !== "") $(this).addClass("valid");
});

$("input[name='email']").keyup(function () {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test($(this).val())) {
    $(this).addClass("valid");
    $(this).removeClass("invalid");
  } else {
    $(this).removeClass("valid");
    $(this).addClass("invalid");
  }
});

$("input[name='cellphone']").keyup(function () {
  let regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (regex.test($(this).val())) {
    $(this).addClass("valid");
    $(this).removeClass("invalid");
    setTimeout(function () {
      $("#sms-code").removeClass("hidden");
    }, 1000);
  } else {
    $(this).removeClass("valid");
    $(this).addClass("invalid");
  }
});

$("#change-offer-btn").click(function () {
  $("#oferta").addClass("hidden");
  $("#ofertas").removeClass("hidden");
});

var indexCodeInput = 0;
$(".code-input-form").bind("keyup", function () {
  var value = $(this).val();
  var regex = /^\d+$/;
  if (regex.test(value)) {
    if (indexCodeInput < 5) {
      $(this).next().focus();
      if (indexCodeInput == 4) {
        $("#validando-sms").removeClass("hidden");
        $(".code-input-form").addClass("valid");
        $("#btn-form-next").attr("disabled", false);
      }
    }
    indexCodeInput++;
  }
});

$("#btn-form-next").click(function () {
  alert("aqui acaba el flujo");
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
