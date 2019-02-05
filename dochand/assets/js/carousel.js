$(document).ready(function () {
  var clickDisabled = false;
  var o = 0;
  var cA = 0;
  var cB = 1;
  var cC = 2;
  var cD = 3;
  var cE = 4;

  function next() {

    cA++;
    cB++;
    cC++;
    cD++;
    cE++;

    if (cA >= $('#basic > li').length) { cA = 0; }
    if (cB >= $('#basic > li').length) { cB = 0; }
    if (cC >= $('#basic > li').length) { cC = 0; }
    if (cD >= $('#basic > li').length) { cD = 0; }
    if (cE >= $('#basic > li').length) { cE = 0; }

    $('#basic > li:eq(' + cA + ')').removeClass();
    $('#basic > li:eq(' + cA + ')').addClass('one');
    $('#basic > li:eq(' + cB + ')').removeClass();
    $('#basic > li:eq(' + cB + ')').addClass('two');
    $('#basic > li:eq(' + cC + ')').removeClass();
    $('#basic > li:eq(' + cC + ')').addClass('three');
    $('#basic > li:eq(' + cD + ')').removeClass();
    $('#basic > li:eq(' + cD + ')').addClass('four');
    $('#basic > li:eq(' + cE + ')').removeClass();
    $('#basic > li:eq(' + cE + ')').addClass('five');
  };
  function previous() {
    cA--;
    cB--;
    cC--;
    cD--;
    cE--;

    if (cA < 0) { cA = $('#basic > li').length - 1; }
    if (cB < 0) { cB = $('#basic > li').length - 1; }
    if (cC < 0) { cC = $('#basic > li').length - 1; }
    if (cD < 0) { cD = $('#basic > li').length - 1; }
    if (cE < 0) { cE = $('#basic > li').length - 1; }

    $('#basic > li:eq(' + cA + ')').removeClass();
    $('#basic > li:eq(' + cA + ')').addClass('one');
    $('#basic > li:eq(' + cB + ')').removeClass();
    $('#basic > li:eq(' + cB + ')').addClass('two');
    $('#basic > li:eq(' + cC + ')').removeClass();
    $('#basic > li:eq(' + cC + ')').addClass('three');
    $('#basic > li:eq(' + cD + ')').removeClass();
    $('#basic > li:eq(' + cD + ')').addClass('four');
    $('#basic > li:eq(' + cE + ')').removeClass();
    $('#basic > li:eq(' + cE + ')').addClass('five');

  };

  $('#left').click(function () {
    if (clickDisabled) return;
    clickDisabled = true;
    setTimeout(function () { clickDisabled = false; }, 1000);
    next();
  });

  $('#right').click(function () {
    if (clickDisabled) return;
    clickDisabled = true;
    setTimeout(function () { clickDisabled = false; }, 1000);
    previous();
  });

  var timer = null;
  function startSetInterval() {
    timer = setInterval(next, 2000);
  }

  startSetInterval();

  $('#rotator').hover(function () {
    clearInterval(timer);
  }, function () {
    startSetInterval();
  });
});