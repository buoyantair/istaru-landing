$(document).ready(function(){
  $(window).on('scroll', function(){
    if(window.scrollY >= 300){
      $('.top-bar').addClass('pinned')
    } else if(window.scrollY <= 300){
      $('.top-bar').removeClass('pinned')
    }
  })
})
