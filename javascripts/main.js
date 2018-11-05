$(document).ready(function(){
  console.log('Js ready');

  $('#menu-icon').on('click', function(){
    console.log('clicked');
    $('aside').addClass('shown');
  });

  $('.close-icon').on('click', function(){
    $('aside').removeClass('shown');
  });
})