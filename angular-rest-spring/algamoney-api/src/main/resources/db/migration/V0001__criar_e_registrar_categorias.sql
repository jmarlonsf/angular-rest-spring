CREATE TABLE categoria (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome 	VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO categoria (nome) values ('lazer');
INSERT INTO categoria (nome) values ('alimentacao');
INSERT INTO categoria (nome) values ('supermercado');
INSERT INTO categoria (nome) values ('farmacia');
INSERT INTO categoria (nome) values ('outros');