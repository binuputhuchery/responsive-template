$(document).ready(function(){

  //Nav
  $(window).on("load resize",function(e){
    var windowWidth = $(window).width();
    $('#navBar').hide();
    if(windowWidth >= 768 ) {
      $('#navBar').show();
    } else {
      $('#navBar').hide();
    }
  });
  
  $('#nav-toggle').click(function() {
    $('#navBar').slideToggle(200);
  });

  //Scroll to sections
  $("#navBar a, a.button, .foot-links a").click(function(e) {
    e.preventDefault();

    $("html, body").animate({ 
      scrollTop: $($(this).attr("href")).offset().top 
    }, 500);
  });

  //Sticky nav
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
      $('header').addClass('fixed-header');
    } else {
      $('header').removeClass('fixed-header');
    }
  });

  //Work onlick
  $("#work .view a").click(function(e) {
    e.preventDefault();
    //Action goes here
  });

  //Testimonial Carousel
  $('#quotes').slick({
    arrows: false,
    dots: true,
    speed: 300
  });

});