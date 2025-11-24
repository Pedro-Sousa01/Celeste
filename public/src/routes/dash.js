var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/listarView", function (req, res) {
    dashController.listarView(req, res);
});

module.exports = router;