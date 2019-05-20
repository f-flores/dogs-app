$(document).ready(function(){
  // ========================
  // post new dog
  // ========================
  $(".create-form").on("submit", function(event){
    event.preventDefault();
    // capture values from form into the new dog object
    // notice the key names match the MySQL column names
    const newDog = {
      name: $("#dog-name").val().trim(),
      picurl: $("#dog-pic").val().trim(),
      sleepy: $("[name=sleepy]:checked").val(),
    };

    // send post request
    $.post("/api/dogs", newDog)
     .done(function() {
       console.log("Created new dog entry.");
       // reload page and get new items
       location.reload();
     })
     .fail(function(err) {
       console.log(err);
     })
  })
});
