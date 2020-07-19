$(function () {
  // preloader
  // $(window).on("load", function () {
  //   $(".loader").fadeOut();
  //   $("#preloder").delay(200).fadeOut("slow");
  // });
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
    } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Offcanvas Menu
  $(".canvas-open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  // Search model
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  /*------------------
    Navigation
  --------------------*/

  $(".collapse").on("show.bs.collapse", function () {
    $(".dropdownIcon").replaceWith(
      '<i class="fa fa-angle-up dropdownIcon" style="margin-left: auto !important; text-align: right !important; margin-top: 4px; font-weight: 500;"></i>'
    );
  });

  $(".collapse").on("hide.bs.collapse", function () {
    $(".dropdownIcon").replaceWith(
      '<i class="fa fa-angle-down dropdownIcon" style="margin-left: auto !important; text-align: right !important; margin-top: 4px; font-weight: 500;"></i>'
    );
    $(".top-social").css("margin-top", "48%");
  });

  $(".collapse").on("shown.bs.collapse", function () {
    $(".top-social").css("margin-top", "20%");
  });

  $(".flag-dropdown").on("click", () => {
    $(".country").css("visibility", "hidden");
    $(".flag-dropdown").css("visibility", "hidden");
  });

  $(".language-option").on("mouseover", () => {
    $(".country").css("visibility", "visible");
    $(".flag-dropdown").css("visibility", "visible");
  });

  // sticky navbar
  window.onscroll = function () {
    myFunction();
  };

  var menu = document.getElementById("menu");
  var sticky = menu.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      menu.classList.add("sticky");
      $(".align-items-center").css("padding-top", "80px");
      $(".canvas-open").css("position", "fixed");
    } else if (window.pageYOffset < sticky) {
      menu.classList.remove("sticky");
      $(".align-items-center").css("padding-top", "0px");
    }
  }
});
