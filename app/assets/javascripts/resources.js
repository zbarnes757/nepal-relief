$(document).ready(function(){

  $(".resource-edit").on("click", function(event){
    event.preventDefault();

    var currentRow = $(this).closest("tr");

    currentRow.css("background", "yellow");

    //define variables
    var name = currentRow.find(".resource-name");
    var quantity = currentRow.find(".resource-quantity");
    var urgency = currentRow.find(".resource-urgency");
    var fulfilled = currentRow.find(".resource-fulfilled");
    var edit = currentRow.find(".resource-edit");
    var deleteButton = currentRow.find(".resource-delete").html();


    [name, quantity, urgency].forEach(function(resourceInfo){
      var text = resourceInfo.text();
      resourceInfo.html("<input type='text'>")
      resourceInfo.children().first().val(text)
    })

    currentRow.find(".resource-edit").html("");
    currentRow.find(".resource-delete").html("<a href='#' class='done'>Done</a>")



    $(".done").on("click", function(event){
      event.preventDefault();
      var url = "/beneficiaries/" + currentRow.attr("id") + "/requested_resource";

      var updateName = name.children().first().val();
      var updateQuantity = quantity.children().first().val();
      var updateUrgency = urgency.children().first().val();


      $.ajax({
        url: url,
        type: 'put',
        data: {name: updateName,
               quantity: updateQuantity,
               urgency: updateUrgency }
      })
      .done(function(response){
        currentRow.css("background", "white")
        console.log(response)
        name.html(response.name)
        quantity.html(response.quantity)
        urgency.html(response.urgency)
        edit.html("<a href='#'>Edit</a>")
        currentRow.find(".resource-delete").html(deleteButton)


      })
      .fail(function(){
        console.log("you failed");
      })


    })

  })

})  //end document ready