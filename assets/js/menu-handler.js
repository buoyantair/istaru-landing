$(document).ready(function(){
  $(window).on('scroll', function(){
    if(window.scrollY >= 300){
      $('.top-bar').addClass('pinned')
    } else if(window.scrollY <= 300){
      $('.top-bar').removeClass('pinned')
    } else if(window.scrollY >= 500){
      // $('.pop-in-l').css("right", "0");
      // $('.pop-in-r').css("left", "0");
      console.log("boom")
    }
  })
})
