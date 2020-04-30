var isMobile = false; //initiate as false
// device detection
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )
) {
  isMobile = true;
}

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
    if ($(this).val() === "1111111111") {
      $("#small-spinner").addClass("hidden");
      $("#wrong-check").removeClass("hidden");
      const toastHtml = `Hemos encontrado solicitud <br />
      con este número`;
      $("#toast-label").html(toastHtml);
      $("#toast-label").addClass("text-danger");
    } else {
      if ($("#toast-label").hasClass("text-danger")) {
        $("#toast-label").removeClass("text-danger");
        $("#wrong-check").addClass("hidden");
      }
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
        }, 2500);
      }, 2000);
    }
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
      if (indexCodeInput === 4) {
        $("#small-spinner").removeClass("hidden");
        if (value === "1") {
          setTimeout(function () {
            const verificacionHtml = `<div class="text-danger">Código inválido <br />
              <span class="btn-link text-white text-underline"> recibe otro código por SMS</span></div>`;
            $("#toast-label").html(verificacionHtml);
            $(".toast-input").addClass("invalid");
            $("#small-spinner").addClass("hidden");
            $(".toast-input").val("");
            indexCodeInput = 0;
          }, 1500);
        } else {
          setTimeout(function () {
            if ($(".toast-input").hasClass("invalid")) {
              $(".toast-input").removeClass("invalid");
              $("#toast-label").find("div").removeClass("text-danger");
            }
            const toastHtml = `Código válido`;
            $("#toast-label").html(toastHtml);
            $(".toast-input").addClass("valid");
            setTimeout(function () {
              window.location.href =
                window.location.origin + "/formulario.html?oferta=" + true;
            }, 2500);
          }, 1500);
        }
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
      !isMobile && $(".sms-legend").removeClass("hidden");
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
      if (indexBtnInput === 4) {
        $("#small-spinner-btn").removeClass("hidden");
        $(".fa-commenting-o").addClass("hidden");
        $(".toast-input").addClass("valid");
        setTimeout(function () {
          window.location.href =
            window.location.origin + "/formulario.html?oferta=" + true;
        }, 2500);
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
