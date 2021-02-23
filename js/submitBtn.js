// 間違える送信を防ぐ、submitをdisabledで制御
$(document).ready(function () {
  const $submitBtn = $('#js-submit')
  $('#js-form input,#js-form textarea').on('change', function () {
    if (
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val()
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});
