$(function () {
  $('#calc').click(function () {


    const milhas = parseFloat($('#milhas').val())
    const metros = 1609.34 * milhas
    $('#metros').val(metros)

  })
})

$(function () {
  $("#validate").validate();
});



/**$(function(){
                    $("#form_contato").validate();
             }); */