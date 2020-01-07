$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
  $('.specs-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
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