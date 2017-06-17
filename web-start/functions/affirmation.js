$(function() {
  $("form#affirmation").submit(function(event) {
    event.preventDefault();
    var newAffirmationContent = $(`#affirmation_content`).val();
    var newAffirmation = {
      affirmation: {
        content: newAffirmationContent
      }
    };

    var request = $.ajax({
      method: "POST",
      data: newAffirmation,
      url: "/api/affirmations.json"
    });

    request.done(function() {
      var html = "<div class=
    })
  })
})
