var database = require("../database/config")

function cadastrar(madeline, badeline, theo, celia, oshiro) {
    var instrucao = `
        INSERT INTO Quiz (madeline, badeline, theo, celia, oshiro) VALUES ('${madeline}', '${badeline}', '${theo}', '${celia}', '${oshiro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function cadastrarNN(fkQuiz, fkUsuario, resultado) {
    var instrucao = `
    INSERT INTO Resultado (fkQuiz, fkUsuario, resultado) VALUES ('${fkQuiz}', '${fkUsuario}', '${resultado}');
`;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    cadastrarNN
};