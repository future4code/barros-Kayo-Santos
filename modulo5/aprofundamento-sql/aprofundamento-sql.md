### Exercicio 1

a) ALTER TABLE Actor DROP COLUMN salary; - remove a coluna salary
b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); - altera o nome da coluna gender para sex.
c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); - altera o tipo da coluna gender mudando o número de caracteres do VARCHAR.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercicio 2

a) UPDATE Actor SET nome = "Fabiana Andrade", birth_date = "1994-03-19" WHERE id = "003"
b) UPDATE Actor SET nome = "JULIANA PAES" WHERE nome = "Juliana Paes";
UPDATE Actor SET nome = "Juliana Paes" WHERE nome = "JULIANA PAES";
c) UPDATE Actor SET nome = "Fabiana", salary = 50000, birth_date = "1998-05-14", gender = female WHERE id = "005";
d) UPDATE Actor SET nome = "Fabiana Andrade", birth_date = "1994-03-19" WHERE id = "006";

o resultado foi: 0 row(s) affected
 Rows matched: 0  Changed: 0  Warnings: 0.
 ou seja, não fez nenhuma alteração pois o id não existe.

### Exercicio 3

 a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
 b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

### Exercicio 4

 a) SELECT MAX(salary) FROM Actor;
 b) SELECT MIN(salary) FROM Actor WHERE gender = "female";
 c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
 d) SELECT SUM(salary) FROM Actor;

### Exercicio 5

a) SELECT COUNT(*), gender FROM Actor GROUP BY gender; - Essa query separou os atores pelo gênero e contou quantos tinhas de cada.
b) SELECT id, nome FROM Actor ORDER BY name DESC;
C) SELECT * FROM Actor ORDER BY salary;
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercicio 6

a) ALTER TABLE Movies ADD playing_limit_date DATE;
b) ALTER TABLE Movies CHANGE avaliação rating FLOAT;
C)  UPDATE Movies SET playing_limit_date = "2022-12-31" WHERE id = "001";
    UPDATE Movies SET playing_limit_date = "2022-10-31" WHERE id = "002";
d) DELETE FROM Movies WHERE id = "002";

UPDATE Movies SET sinopse = "laralere" WHERE id = "002";
o resultado foi: 0 row(s) affected
 Rows matched: 0  Changed: 0  Warnings: 0.
 ou seja, não fez nenhuma alteração pois o id não existe.