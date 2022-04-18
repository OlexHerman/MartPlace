$(function(){

  var $inforate1 = $(".inforate1").rateYo({ "starWidth": "15px", "rating": 4.5, "readOnly": true, "normalFill": "#d1d5dd" });
  var $inforate1 = $(".inforate2").rateYo({ "starWidth": "15px", "rating": 3.2, "readOnly": true, "normalFill": "#d1d5dd" });
  var $inforate1 = $(".inforate3").rateYo({ "starWidth": "15px", "rating": 5.0, "readOnly": true, "normalFill": "#d1d5dd" });

  $(".featured__info-rate").rateYo({
    starWidth: "15px",
    readOnly: true,
    normalFill: "#d1d5dd",
  });
  
  $('.featured__content').slick({
    appendArrows: ".featured__slider-btn",
    fade: true
  });

});

