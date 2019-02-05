$(document).ready(function () {
  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.slider').slider({ full_width: true });
  $('.modal').modal();
  $('.tooltipped').tooltip();
  $(".dropdown-trigger").dropdown();
});

document.addEventListener("DOMContentLoaded", function () {
  $('.preloader-background').delay(1700).fadeOut('slow');
  $('.preloader-wrapper')
    .delay(1700)
    .fadeOut();
});

