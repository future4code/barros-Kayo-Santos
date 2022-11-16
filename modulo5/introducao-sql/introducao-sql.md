### Exercício 1
a) VARCHAR(255) - Representa uma string com 255 caracteres, DATE - Representa uma data,
PRIMARY KEY - Representa a chave primária e única,  NOT NULL - Indica que a coluna não pode
ser nula. 

b) SHOW TABLES; - mostrou as tabelas já criadas
SHOW DATABASES; - mostrou os schemas

c) DESCRIBE Actor; - ao executar mostrou cada item criado  e o seu tipo.

```
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

```
### Exercício 2
```
INSERT INTO Actor (id, nome, salary,birth_date,gender)
VALUES ("001", "Tony Ramos", 400000, "1948-08-25","male");
```

a)
```
INSERT INTO Actor (id, nome, salary,birth_date,gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23","female");

```

b)
```
INSERT INTO Actor (id, nome, salary,birth_date,gender)
VALUES ("002", "Bruna Marquezine", 1200000, "1995-08-04","female");
```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	-  Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
o erro aconteceu pois o id é uma PRIMARY KEY e cada chave deve ser única.

c)
```
INSERT INTO Actor (id, nome, salary)
VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
```

Error Code: 1136. Column count doesn't match value count at row - Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha.

O erro aconteceu pois não foi declarada todas as informações das colunas.

d)
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES("004",400000,"1949-04-18","male")
```
Error Code: 1364. Field 'nome' doesn't have a default value - Código de erro: 1364. O campo 'nome' não tem um valor padrão
O erro se deu pois não consta as informações da coluna "nome".

e)
```
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES("005","Juliana Paes",719333.33,1979-03-26,"female")
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 - Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.

Erro aconteceu pois data precisa está entre "".

f)

```
INSERT INTO Actor (id, nome, salary,birth_date,gender)
VALUES ("003", "Bruna Marquezine", 300000, "1995-08-04","female");
```
```
INSERT INTO Actor (id, nome, salary,birth_date,gender)
VALUES("004", "Antônio Fagundes", 400000,"1949-04-18","male");
```
### Exercício 3

a)
```
SELECT * from Actor WHERE gender = "female";
```
b)
```
SELECT salary from Actor WHERE nome = "Tony Ramos";
```
c)
```
SELECT * from Actor WHERE gender = "invalid";
```
abriu uma tabela com os valores todos NULL.

d)
```
SELECT id, nome, salary from Actor WHERE salary <= 500000;
```
e)
```
SELECT id, noome from Actor WHERE id = "002"
```

Código de erro: 1054. Coluna desconhecida 'noome' na 'lista de campos'
### Exercício 4

SELECT * from Actor WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary > 300000;

a) a query acima está buscando todos os atores que começam com A ou J e possuem um salário maior que 300000.

b) SELECT * from Actor WHERE nome NOT LIKE "A%" AND salary > 350000;

c)SELECT * from Actor WHERE nome LIKE "%g%" OR nome LIKE "%G%";

d) SELECT * from Actor WHERE (nome LIKE "%a%" OR nome LIKE "%A%" OR nome LIKE "%g%" OR nome LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
### Exercício 5


 a) 
 
```CREATE TABLE Filmes (
id VARCHAR(120) PRIMARY KEY,
título VARCHAR(220) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
data_de_lancamento DATE NOT NULL,
avaliação INT NOT NULL
);```
 
 
 o TEXT - permite criar uma string com quantidade quase ilimitada de caracteres.

 b) 

```
INSERT INTO Filmes (id, título, sinopse, data_de_lancamento,avaliação)
VALUES("001","Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06", 7);
```

c)

 ```
 INSERT INTO Filmes (id, título, sinopse, data_de_lancamento,avaliação)
VALUES("002","Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27", 10);```

d)

 ```
 INSERT INTO Filmes (id, título, sinopse, data_de_lancamento,avaliação)
VALUES("003","Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02", 8);```

e) 

```
INSERT INTO Filmes (id, título, sinopse, data_de_lancamento,avaliação)
VALUES("004","Central do Brasil", "Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas, que ditam o que querem contar às suas famílias.",
"1998-04-03", 9);```
### Exercício 6

a) SELECT id, título, avaliação from Filmes WHERE id = "002";
b) SELECT * from Filmes WHERE título = "Central do Brasil";
c)SELECT id,título,sinopse from Filmes WHERE avaliação > 7;
### Exercício 7

a) SELECT * from Filmes WHERE título LIKE "%vida%";
b)SELECT * from Filmes WHERE título LIKE "%TERMO DE BUSCA%" OR título LIKE "%TERMO DE BUSCA%";
c) SELECT * from Filmes WHERE data_de_lancamento < "2022-11-08";
d) SELECT * from Filmes WHERE data_de_lancamento < CURDATE() AND (título LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%" ) AND avaliação >7;