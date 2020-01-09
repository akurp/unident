$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
  $('.reason-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.reason-arrow_prev'),
    nextArrow: $('.reason-arrow_next')
  });
  $('.specs-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.specs-slide__arrow_prev'),
    nextArrow: $('.specs-slide__arrow_next'),
    responsive: [{
      breakpoint: 991,
      settings:
      {
        slidesToShow: 3
      }},
      {
      breakpoint: 768,
      settings:
      {
        slidesToShow: 2
      }},
      {
      breakpoint: 567,
      settings:
      {
        slidesToShow: 1
      }
    }]
  });
});