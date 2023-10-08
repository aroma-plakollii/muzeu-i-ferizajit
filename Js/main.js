// Show more details about the events

$(function () {
  $(".card").each(function (cards, card) {
    $(this)
      .find(".showBtn")
      .on("click", function () {
        $(".card").each(function (item) {
          if (item !== cards) {
            $(this).find(".details-p").removeClass("more-details");
            $(this).find(".less").removeClass("show");
            $(this).find(".more").removeClass("hide");
          }
        });

        $(card).find(".details-p").toggleClass("more-details", 1000);
        $(card).find(".less").toggleClass("show", 1000);
        $(card).find(".more").toggleClass("hide", 1000);
      });
  });
});


// Shows more events

$(function () {
  $(".show-events").on("click", function () {
    $(".more-events").toggleClass("show-more-events", 1000);
    $(".less-content").toggleClass("show", 1000);
    $(".more-content").toggleClass("hide", 1000);
  });
});

// Shows more information about muzeu

$(function () {
  $(".show-historiku").on("click", function () {
    $(".more-information").toggleClass("show-more-information", 2000);
    $(".less-historiku").toggleClass("show", 2000);
    $(".more-historiku").toggleClass("hide", 2000);
  });
});

// Shows more collections

$(function () {
  $(".show-collections").on("click", function () {
    $(".more-cards").toggleClass("show-more-cards", 2000);
    $(".less-collections").toggleClass("show", 2000);
    $(".more-collections").toggleClass("hide", 2000);
  });
});

// 
// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }

// 
$(function () {
  $(".openbtn").on("click", function () {
    $(".sidebar").toggleClass("hideSidebar", 2000);
    $(".dashboard").toggleClass("moveDashboard", 2000);
    $(".postimet").toggleClass("postimet-margin", 2000);
  });
});

$(function () {
  $(".close-btn").on("click", function () {
    $(".sidebar").addClass("hideSidebar", 2000);
  });
});
