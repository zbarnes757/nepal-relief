$(document).ready(function() {

  $('.beni-search-text').on('keyup', function(){
    // Grab text in input box
    var searchText = $(this).val().toLowerCase();
    // Search all name fields to see if they include that text
    var allNames = $('.beni-name');
    // Filter everything that returns false
    for (var i = 0; i < allNames.length; i++) {
      if ($(allNames[i]).text().toLowerCase().includes(searchText) === false ) {
        $(allNames[i]).parent().hide();
      } else {
        $(allNames[i]).parent().show();
      }

    };

  })


});