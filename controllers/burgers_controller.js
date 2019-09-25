var burger = require('../models/burger');

var express = require('express');
var router = express.Router();
//taking in the home address and sending all of the date ot the hbs page where there is logic to sort out to the correct parts of the page
//there is a burgers model in the index page
router.get('/', function (req,res) {
    burger.allBurgers(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//the post function will add the burger name to the database. returns the id of the inserted data.
router.post("/api/burgers", function (req, res) {
    burger.newBurger(req.body.burgerName, function (data) {
        // Send back the ID of the new burger
        res.json({ id: data.insertId });
    });
});

//nothing pased in the body here, we just get the id from the params to devour the burger.
router.put('/api/burgers/:id', function(req,res){
    console.log(req);
    burger.devourBurger(req.params.id, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      })
});

module.exports = router;
