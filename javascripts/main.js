$(document).ready(function(){
  console.log('Js ready');

  $('#menu-icon').on('click', function(){
    console.log('Menu clicked');
    $('aside').addClass('shown');
    $('aside').find('li').not('.sidebar-logo').each(function(index){
      console.log('Resetting');
      var gridItem = $(this);
      window.setTimeout(function(){
        gridItem.addClass('animated fadeInRight fast');
      }, 100 * index);
    });
  });

  $('.close-icon').on('click', function(event){
    $('aside').find('li').removeClass('animated fadeInRight fast');
    $('aside').removeClass('shown');
  });

  $(window).scroll(function(){
    if($(this).scrollTop() >= $('.cover').offset().top + $('.cover').outerHeight() - 200) {
      $('.main-grid').children().each(function(index){
        var gridItem = $(this);
        window.setInterval(function(){
          gridItem.addClass('animated fadeInUp fast');
        }, 500 * index);
      });
    }

    if ($(this).scrollTop() >= $('#articles-title').offset().top -200) {
      $('.subsite-grid').children().each(function(index){
        var gridItem = $(this);
        window.setInterval(function(){
          gridItem.addClass('animated fadeInRight fast');
        }, 500 * index);
      });
    }
  });
})