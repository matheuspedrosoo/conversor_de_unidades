$(document).ready(function () {
  $('#error_vazio').hide();
  $('#calc').click(function (event) {
    var data = $('#milhas').val();
    var len = data.length;
    if (len < 1) {
      $('#error_vazio').show();
      event.preventDefault();
    }
    else {
      $('#error_vazio').hide();
    }
  });
});

$(document).ready(function () {
  $("#error").hide();
  $('#calc').click(function (event) {
    var data = $('#milhas').val();
    var len = data.length;
    var c;
    for (var i = 0; i < len; i++) {
      c = data.charAt(i).charCodeAt(0);
      if (c < 48 || c > 57) {
        $('#error').show();
        event.preventDefault();
        break;
      }
      else {
        $('#error').hide();
      }
    }
  });
});


