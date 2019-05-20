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

  // ==========================
  // update dog's sleepy state
  // ==========================
  $(".change-sleep").on("click", function(event) {
    const id = $(this).data("id");
    const newSleepState = {
      sleepy: $(this).data("newsleep")
    };

    // send put request will go to router.put("/api/dogs/:id") function in controllers/dogsController.js
    $.ajax(`/api/dogs/${id}`, {
      type: "PUT",
      data: newSleepState
    })
     .done(function() {
       console.log("changed dog's sleep state");
       location.reload();
     })
     .fail(function(err) {
       console.log(err);
     })
  });

  // =========================
  // delete a dog's entry
  // =========================
  $(".delete-dog").on("click", function(event) {
    const id = $(this).data("id");

    // send delete request, will go to router.delete("/api/dogs/:id") function
    $.ajax(`/api/dogs/${id}`, {
      type: "DELETE"
    })
     .done(function() {
       console.log(`deleted dog id ${id}`);
       location.reload();
     })
     .fail(function(err) {
       console.log(err);
     })
  });
});
