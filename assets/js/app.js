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
  const heightTopBar = $("#top-toast").css("height");
  const marginTopMenuBar = $("#menu-navbar").css("margin-top");
  const newMargin = parseInt(marginTopMenuBar) - parseInt(heightTopBar);
  console.log(newMargin);
  $("#menu-navbar").css("margin-top", newMargin + "px");
  $(".row-header").css("margin-top", "0");
});

function moverIcono() {
  var degrees = 0;
  $(".the-medallion").animate(
    { deg: degrees + 45 },
    {
      duration: 1200,
      step: function (now) {
        degrees = degrees + 45;
        $(this).css({ transform: "rotate(" + degress + "deg)" });
      },
    }
  );
}

$("#celular-check-top").keyup(function () {
  let regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (regex.test($(this).val())) {
    $("#small-spinner").removeClass("hidden");
    setTimeout(function () {
      $("#small-spinner").addClass("hidden");
      $("#ok-check").removeClass("hidden");
      const toastHtml = `Hemos encontrado tu solicitud <br />
      Espera un momento...`;
      $("#toast-label").html(toastHtml);
      setTimeout(function () {
        $(".toast-input").removeClass("hidden");
        $("#celular-check-top").addClass("hidden");
        $(".toast-input:first").focus();
        const verificacionHtml = `<div>Ingresa tu código de verificación <br />
          <span class="btn-link text-white text-underline"> no he recibido mi código por SMS</span></div>`;
        $("#toast-label").html(verificacionHtml);
        $("#ok-check").addClass("hidden");
        setTimeout(function () {
          window.location.href =
            window.location.origin + "/formulario.html?oferta=" + true;
        }, 2000);
      }, 2500);
    }, 2000);
  }
});

// evento para que pase en automatico los numeros del codigo sms
var indexCodeInput = 0;
$(".toast-input").bind("keyup", function () {
  var value = $(this).val();
  var regex = /^\d+$/;
  if (regex.test(value)) {
    if (indexCodeInput < 5) {
      $(this).next().focus();
      if (indexCodeInput == 4) {
        $("#validando-sms").removeClass("hidden");
        $(".toast-input").addClass("valid");
        setTimeout(function () {
          window.location.href =
            window.location.origin + "/formulario.html?oferta=" + true;
        }, 2000);
      }
    }
    indexCodeInput++;
  }
});

$("#estado").on("change", function (e) {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;
  window.location.href =
    window.location.origin + "/formulario.html?oferta=" + false;
});

$("#celular-check-solicitud").keyup(function () {
  let regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (regex.test($(this).val())) {
    $("#btn-cel-icon").addClass("hidden");
    $("#small-spinner-btn").removeClass("hidden");
    setTimeout(function () {
      $("#small-spinner-btn").addClass("hidden");
      $(".fa-commenting-o").removeClass("hidden");
      $(".btn-toast-input").removeClass("hidden");
      $("#celular-check-solicitud").addClass("hidden");
      $(".btn-toast-input:first").focus();
    }, 2000);
  }
});

$("#btn-mi-solicitud").click(function () {
  $("#celular-check-solicitud").removeClass("hidden");
  $("#ofertas-text").addClass("hidden");
  $("#btn-mi-solicitud").off();
});

var indexBtnInput = 0;
$(".btn-toast-input").bind("keyup", function () {
  var value = $(this).val();
  var regex = /^\d+$/;
  if (regex.test(value)) {
    if (indexBtnInput < 5) {
      $(this).next().focus();
      if (indexBtnInput == 4) {
        $("#small-spinner-btn").removeClass("hidden");
        $(".fa-commenting-o").addClass("hidden");
        $(".toast-input").addClass("valid");
        // setTimeout(function () {
        //   window.location.href = window.location.origin + "/propuesta.html";
        // }, 2000);
      }
    }
    indexBtnInput++;
  }
});

// evento para hacer el scroll lento a las diferentes secciones del menu
const menuLinks = $("#menu-navbar a");

menuLinks.each(function (index) {
  let menuItem = $(this);
  menuItem.click(function (e) {
    e.preventDefault();
    let section = this.getAttribute("href");
    $("html, body").animate(
      { scrollTop: $(section).offset().top - 100 },
      "slow"
    );
  });
});

// animacion de contadores con libreria countUp.js
var counterMonto = new CountUp("count-monto", 0, 100000, 0, 3, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: ".",
  suffix: "",
  prefix: "$",
});

$(function () {
  counterMonto.start();
  AOS.init();
});
