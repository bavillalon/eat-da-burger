// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger").on("click", function(event) {
      var id = $(this).data("id");
  console.log(id);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("Devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#createBurger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burgerName: $("#newBurger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  