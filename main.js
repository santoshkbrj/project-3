//Owl Carsousel for our work
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// testimonial
$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });
});


  //for scroll-top
  $(window).scroll(function(){
    if($(this).scrollTop()>150){
      $('.scroll-up').fadeIn();
      }else{
        $('.scroll-up').fadeOut();
      }
   
  });
  $('.scroll-up').click(function(){
    $("html,body").animate({
      scrollTop:0
    },600)
    return false;
  });



  //menu scroll
  $(window).on('scroll',function(){
    if($(window).scrollTop()>100){
      $('#menu').addClass('menu-bg');
    }else{
       $('#menu').removeClass('menu-bg');
    }
  });