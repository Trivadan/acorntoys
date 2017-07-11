$(function(){ 
  createSticky($(".navheader"));
});
function createSticky(sticky) {  
  if (typeof sticky !== "undefined") {
    var pos = sticky.offset().top,
        win = $(window);      
    win.on("scroll", function() {
        win.scrollTop() >= pos ? sticky.addClass("fixedtop-nav") : sticky.removeClass("fixedtop-nav");      
    });     
  }
}

$(document).ready(function(){
 $('.bxslider').bxSlider({
  mode: 'fade',
  controls: false,
  pager: false,
  auto:true
});

$('.homecarousel').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed:2500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
 
});