var database = require("../database/config");

function listarView() {
    var instrucao = `
    SELECT * FROM vw_dashboard;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarView
};