var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var madeline = req.body.madeline;
    var badeline = req.body.badeline;
    var theo = req.body.theo;
    var celia = req.body.celia;
    var oshiro = req.body.oshiro;


    if (madeline == undefined) {
        res.status(400).send("Madeline está undefined!");
    }

    if (badeline == undefined) {
        res.status(400).send("Badeline está undefined!");
    }

    if (theo == undefined) {
        res.status(400).send("Theo está undefined!");
    }

    if (celia == undefined) {
        res.status(400).send("Celia está undefined!");
    }

    if (oshiro == undefined) {
        res.status(400).send("Oshiro está undefined!");
    }



    quizModel.cadastrar(madeline, badeline, theo, celia, oshiro)
        .then(resposta => {
            var idQuiz = resposta.insertId;
            res.status(200).json({
                fkQuiz: idQuiz
            });
        })
}

function cadastrarNN(req, res) {
    var fkQuiz = req.body.fkQuiz;
    var fkUsuario = req.body.fkUsuario;
    var resultado = req.body.resultado;

    quizModel.cadastrarNN(fkQuiz, fkUsuario, resultado)
        .then(resultado => {
            res.status(200).send("Resultado Quiz criado com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    cadastrar,
    cadastrarNN
};