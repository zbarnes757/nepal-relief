(function() {

  $(document).ready(function() {

    $('.beni-search-text').on('keyup', function(){
      // Grab text in input box
      var searchText = $(this).val().toLowerCase();
      // Search all name fields to see if they include that text
      var allNames = $('.beni-name');
      var $allRows = $('.beni-row');
      // Filter everything that returns false
      for (var i = 0; i < allNames.length; i++) {
        if ($(allNames[i]).text().toLowerCase().includes(searchText) === false ) {
          $(allNames[i]).parent().addClass('hide');
        } else {
          $(allNames[i]).parent().removeClass('hide');
        }

        if (noResults().length === $allRows.length) {
          $('.no-results').show();
        } else {
          $('.no-results').hide();
        }

      };

    });


  });

  function noResults () {
    var results = $('tr').filter('.hide');
    return results;
  }

})();