$(document).ready(function(){
  // Slick initialization

  $('.image-gallery__thumb').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.image-gallery__img-container'
  });

  $('.image-gallery__img-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.image-gallery__thumb',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: false,
    adaptiveHeight: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      }
    ],
    prevArrow: $('.prev-button'),
    nextArrow: $('.next-button')
  });
});