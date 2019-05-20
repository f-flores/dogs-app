const express = require("express");
const router = express.Router();

// Import the model (dog.js) to use its database functions.
const dog = require("../models/dog.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  dog.all(function(data) {
    const hbsObject = { dogs: data };
    res.render("index", hbsObject);
  });
});

// adds a dog to the database
router.post("/api/dogs", function(req, res) {
  const arrColNames = ["name", "picurl", "sleepy"];
  const arrColValues = [req.body.name, req.body.picurl, req.body.sleepy];
  dog.create(arrColNames, arrColValues, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// updates a dog in the database
router.put("/api/dogs/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  dog.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// delete a dog from the database
router.delete("/api/dogs/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  dog.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
