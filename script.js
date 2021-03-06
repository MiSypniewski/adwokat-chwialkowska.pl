$(".burger").on("click", function () {
  $(".burger, .navigation").toggleClass("active");
});

$(".header__text--js").on("click", function () {
  $("body, html").animate({
    scrollTop: $('[data-section="comunication"]').offset().top,
  });
});

$("nav ul li a").on("click", function () {
  const goToSection = "[data-section=" + $(this).attr("class") + "]";
  if ($(this).attr("class") == "home") {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  } else {
    $("body, html").animate(
      {
        scrollTop: $(goToSection).offset().top,
      },
      500
    );
  }
});

function change() {
  const scroll = $(document).scrollTop();

  const sectionHome = $('[data-section="home"]').height();
  const sectionServices = $('[data-section="services--js"]').height();
  const sectionAbout = $('[data-section="about"]').height();

  const distanceSectionServices = $('[data-section="services--js"]').offset().top;
  const distanceSectionAbout = $('[data-section="about"]').offset().top;

  if (scroll < sectionHome) {
    $(".burger span").removeClass("black");
    $(".header__wrapper--js, .header__text--js").removeClass("off");
  } else if (scroll < sectionServices + distanceSectionServices) {
    $(".burger span").addClass("black");
    $(".header__wrapper--js, .header__text--js").addClass("off");
  } else if (scroll < sectionAbout + distanceSectionAbout) {
    $(".burger span").removeClass("black");
    $(".header__wrapper--js, .header__text--js").addClass("off");
  } else {
    $(".burger span").addClass("black");
    $(".header__wrapper--js, .header__text--js").addClass("off");
  }
}

$(document).on("scroll", change);
