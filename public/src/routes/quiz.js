var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});

router.post("/cadastrarNN", function (req, res) {
    quizController.cadastrarNN(req, res);
});

module.exports = router;