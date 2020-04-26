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
        // setTimeout(function () {
        //   window.location.href = window.location.origin + "/propuesta.html";
        // }, 2000);
      }
    }
    indexCodeInput++;
  }
});

$("#estado").on("change", function (e) {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;
  window.location.href = window.location.origin + "/propuesta.html";
});

$("#btn-mi-solicitud").click(function () {
  const inputsHtml = `
  <input
  type="tel"
  class="btn-toast-input"
  maxlength="1"
  onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
/>
<input
  type="tel"
  class="btn-toast-input"
  maxlength="1"
  onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
/>
<input
  type="tel"
  class="btn-toast-input"
  maxlength="1"
  onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
/>
<input
  type="tel"
  class="btn-toast-input"
  maxlength="1"
  onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
/>
<input
  type="tel"
  class="btn-toast-input"
  maxlength="1"
  onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
/>
  `;
  $("#btn-mi-solicitud").html(inputsHtml);
  $("#btn-mi-solicitud").off();
  var indexBtnInput = 0;
  $(".btn-toast-input").bind("keyup", function () {
    var value = $(this).val();
    var regex = /^\d+$/;
    if (regex.test(value)) {
      if (indexBtnInput < 5) {
        $(this).next().focus();
        if (indexBtnInput == 4) {
          $("#validando-sms").removeClass("hidden");
          $(".toast-input").addClass("valid");
          // setTimeout(function () {
          //   window.location.href = window.location.origin + "/propuesta.html";
          // }, 2000);
        }
      }
      indexBtnInput++;
    }
  });
});
