var express = require("express");

var router = express.Router();

// Import the model (dog.js) to use its database functions.
var dog = require("../models/dog.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  dog.all(function(data) {
    var hbsObject = {
      dogs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// adds a dog to the database
router.post("/api/dogs", function(req, res) {
  var arrColNames = ["name", "picurl", "sleepy"];
  var arrColValues = [req.body.name, req.body.picurl, req.body.sleepy];
  dog.create(arrColNames, arrColValues, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// updates a dog in the database
// router.put("/api/dogs/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   dog.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/dogs/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   dog.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;

/*

// router.get("/", function(req, res) {
//   dog.all(function(results_from_model_but_it_came_from_orm) {
//       // use the results from the database\
//       // give it to handlebars to render
//   })

// })


*/
