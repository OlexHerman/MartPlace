$(function(){

  var mixer = mixitup('.release__box-items');
  var $inforate1 = $(".inforate1").rateYo({ "starWidth": "15px", "rating": 4.5, "readOnly": true, "normalFill": "#d1d5dd" });
  var $inforate1 = $(".inforate2").rateYo({ "starWidth": "15px", "rating": 3.2, "readOnly": true, "normalFill": "#d1d5dd" });
  var $inforate1 = $(".inforate3").rateYo({ "starWidth": "15px", "rating": 5.0, "readOnly": true, "normalFill": "#d1d5dd" });

  $('.featured__content').slick({
    appendArrows: ".featured__slider-btn",
    fade: true
  });

  $('.followers__inner-content').slick({
    appendArrows: ".followers__slider-btn",
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  

});

