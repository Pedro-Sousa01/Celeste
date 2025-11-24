CREATE Database Celeste;
Use Celeste;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE Quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	madeline INT,
    badeline INT,
    theo INT,
    celia INT,
    oshiro INT
);

CREATE Table Resultado (
	idResultado INT AUTO_INCREMENT,
    fkQuiz INT,
    fkUsuario INT,
    resultado VARCHAR(100),
		CONSTRAINT fkQuizResultado
			FOREIGN KEY(fkQuiz)
				REFERENCES Quiz(idQuiz),
		CONSTRAINT fkUsuarioResultado
			FOREIGN KEY(fkUsuario)
				REFERENCES usuario(id),
					PRIMARY KEY(idResultado, fkQuiz, fkUsuario)
)

CREATE VIEW vw_dashboard AS
SELECT
	(SELECT resultado from Resultado ORDER BY idResultado DESC LIMIT 1) as 'personagemMaisParecido',
		(SELECT COUNT(DISTINCT (fkQuiz)) from Resultado) as 'quantidadeDeEscaladas',
			(SELECT COUNT(DISTINCT fkUsuario) FROM Resultado WHERE (RESULTADO IN('Madeline', 'Badeline', 'Theo', 'Celia', 'Oshiro'))) as 'quantosEscalaram',
				(SELECT resultado FROM Resultado GROUP BY resultado ORDER BY COUNT(*) DESC LIMIT 1) as 'personagemMaioral';
