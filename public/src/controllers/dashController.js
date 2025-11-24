var dashModel = require("../models/dashModel");

function listarView(req, res) {
    dashModel.listarView().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarView
}