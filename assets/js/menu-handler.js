$(document).ready(function(){
  $(window).on('scroll', function(){
    if(window.scrollY >= 300){
      $('.pop-in-l').css("right", "0");
      $('.pop-in-r').css("left", "0");
      $('.top-bar').addClass('pinned');
    }else if(window.scrollY <= 300){
      $('.pop-in-l').css("right", "100%");
      $('.pop-in-r').css("left", "100%");
      $('.top-bar').removeClass('pinned')
    }
  })
})
