$(document).ready(function() {
    $('#fullpage').fullpage({
      //Scrolling
      autoScrolling:false
  });
});

$(window).scroll(function(){
        var scroll = $(window).scrollTop();
            $('#footer').css({'opacity':(( 60-scroll )/60)});
        });
