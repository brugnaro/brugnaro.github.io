'use strict';

$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');
    $('.lang').each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    })
  });
});





