// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

//adding logo slider for partner
 $(function () {
  var $first=$('#scroller>:first-child');
  $('#scroller').width($first.outerWidth(true));
  $first.clone(true).appendTo('#scroller');
  $('#scroller').addClass('ready');
 })

 //this code is for the gmap
   var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
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
