var express = require('express');
var procedures = require('../procedures/users.proc');

var router = express.Router();

router.route("/:id")
    .get(function(req, res) {
        procedures.read(req.params.id)
        .then(function(user) {
            res.send(user);
        }, function(err) {
            res.status(500).send(err);
        });
    })
    .put(function(req, res) {
        procedures.update(req.params.id)
        .then(function() {
            res.sendStatus(204);
        }, function(err) {
            res.status(500).send(err);
        })
    });

    module.exports = router;