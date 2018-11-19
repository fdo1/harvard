$(document).ready(function(){
  console.log('Js ready');

  $('#menu-icon').on('click', function(){
    console.log('clicked');
    $('aside').addClass('shown');
  });

  $('.close-icon').on('click', function(){
    $('aside').removeClass('shown');
  });

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

  $('.image-gallery__img-container').on('afterChange', function(){
    $(this).find('img').css('width', '150px');
  })
})