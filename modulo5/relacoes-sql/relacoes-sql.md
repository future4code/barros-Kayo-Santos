### Exercício 1

a) Uma coluna que é usada para estabelecer uma conexão entre duas tabelas.

b) Criar tabela:

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Excelente!",
    9,
		"001"
);

INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Excelente!",
    10,
		"003"
);

c)

INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
		"004",
    "Excelente!",
    10,
		"005"
);

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416383-kayo-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Deu um erro, na Foreign Key pois não é possível adicionar de um id que não existe.

d) ALTER TABLE  Movies DROP COLUMN  rating;

e) DELETE FROM Movies WHERE id = "004";

Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416383-kayo-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))


Não é possui excluir um item que tenha Fk.

## Exercício 2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);


a) Esta tabela possui duas colunas, onde a primeira é uma chave estrangeira de movies e a segunda uma chave estrangeira de Actor;

b) INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
    "002"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
    "003"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
    "004"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
    "004"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
    "002"
);


c) 

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
    "010"
);

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416383-kayo-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Deu um erro, na Foreign Key pois não é possível adicionar de um id que não existe.

d)


DELETE FROM Actor WHERE id = "001";

Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 


Não é possui excluir um item que tenha Fk.



## Exercício 3

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

a) Combina colunas de uma ou mais tabelas., ON representa a lógica que une as tabelas.

b) SELECT Movies.id, Movies.título, Rating.rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;


