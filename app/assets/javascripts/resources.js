(function(){
  $(document).ready(function(){

    
    $(".resource-edit").on("click", function(event){
      event.preventDefault();

      var $currentRow = $(this).closest("tr");

      $currentRow.css("background", "yellow");

      //define variables
      var $name = $currentRow.find(".resource-name");
      var $quantity = $currentRow.find(".resource-quantity");
      var $urgency = $currentRow.find(".resource-urgency");
      var $fulfilled = $currentRow.find(".resource-fulfilled");
      var $notes = $currentRow.find(".resource-notes");
      var $edit = $currentRow.find(".resource-edit");
      var $deleteButton = $currentRow.find(".resource-delete").html();


      // Preserve Current Data
      var text = $name.text();
      $name.html("<input type='text'>");
      $name.children().first().val(text);

      text = $quantity.text();
      $quantity.html("<input type='number'/>");
      $quantity.find("input").val(text);

      text = $notes.text();
      $notes.html("<input type='text'>");
      $notes.children().first().val(text);

      // Set drop down of choices for urgency and fulfillment
      $urgency.html("<select><option value='Low'>Low</option><option value='Medium'>Medium</option><option value='high'>High</option></select>");

      $fulfilled.html("<select><option value='Yes'>Yes</option><option value='No'>No</option></select>");



      $currentRow.find(".resource-edit").html("");
      $currentRow.find(".resource-delete").html("<a href='#' class='done'>Done</a>");

      $(".done").on("click", function(event){
        event.preventDefault();
        var url = "/beneficiaries/" + $currentRow.attr("id") + "/requested_resource";

        var updateName = $name.children().first().val();
        var updateQuantity = $quantity.children().first().val();
        var updateUrgency = $urgency.children().first().val();
        var updateNotes = $notes.children().first().val();
        var updateFulfilled = $fulfilled.children().first().val();

        $.ajax({
          url: url,
          type: 'put',
          data: {name: updateName,
                 quantity: updateQuantity,
                 urgency: updateUrgency,
                 notes: updateNotes,
                 fulfilled: updateFulfilled, }
        })
        .done(function(response){
          $currentRow.css("background", "white");
          console.log(response);
          $name.html(response.name);
          $quantity.html(response.quantity);
          $urgency.html(response.urgency);
          $notes.html(response.notes);
          $fulfilled.html(updateFulfilled);
          $edit.html("<a href='#'>Edit</a>");
          $currentRow.find(".resource-delete").html($deleteButton);


        })
        .fail(function(){
          console.log("you failed");
        });
      });

    });

  });  //end document ready
})();