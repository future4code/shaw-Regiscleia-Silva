Exercicio 1 

a- VARCHAR - string com um n maximo de caracteres
DATE NOT NULL - representa uma data e o preenchimento é obrigatorio

b - SHOW DATABASE - aparece as informações schema, meus dados
SHOW TABLES - aparece o titulo da tabela criada

c- aparece a estrutura da tabela Actor.




exercicio 2 

a- insert INTO Actor(id, name, salary, birth_date, gender)
  "002",
  "Gloria Pires",
  "1200",
  "1963-08-23",
  "femme"
);

b - erro 1064 no qual o a sintaxe ja corresponde a um item existente.
c- erro 1050 pois não segue os mesmos parametros que foi passada na query, tem informaçoes que não se correspondem.
 d -erro 1050 Ator não encontrado, esta faltado o parametro name.
//e - erro 1050 pois a data estava fora de string




exercicio 3
a - SELECT id, name, salary, birth_date from Actor WHERE gender = "female"
b - SELECT salary from Actor WHERE name = "Tony Ramos"
c - retornou a tabela vazia, pois não tem nenhum com esse perametro
d-SELECT id, name, salary from Actor WHERE salary  < 500000
e- não existe o parametro nome e sim name o correto seria SELECT id, name from Actor WHERE id = "002"




exercicio 4
a- a query tem o parametro de selecionar na tabela Actor,
onde o nome inicia com A ou com j e o salario maior que 300000
b-select * from Actor
 where (name  not Like "A%" or name like "J%") and salary > 350000

c - select * from Actor
 where (name  Like "%G%" ) 
 d- select * from Actor
 where (name  Like "%G%" or name like "%A%" ) and salary between  350000 and 90000




 exercicio 5
 a- TEXT utilizado quando o formato de texto é longo  que pode ter de 1 bvte a 4 GB.





 exercicio 6
 

CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL, 
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT 

);
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos 
  por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
  );
  INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar 
  e não poderá mais morar com ela",
  "2012-12-27", 
  10
  );
  INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridosê",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.
  A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
  );
  
 INSERT INTO Filmes (id, nome,  sinopse, data_lancamento, avaliacao) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
// retorna id especifico
  select id,nome, avaliacao  from Filmes where id ="001"

  // retorna filme com o nome especifico
  select * from Filmes where nome = "Dona Flor e Seus Dois Maridosê"

  // retorna filmes com avaliação maior de 7
  select id,nome, sinopse, avaliacao from Filmes where avaliacao > 7




exercico 7
  // retorna o filme com uma palavra em especifico do titulo

 a) select * from Filmes
where nome  Like "%flor%" 

// busca de filmes
b)SELECT * FROM Filmes
WHERE nome LIKE "%Dona%" OR
      sinopse LIKE "%boates%" or
      avaliacao LIKE "%10%";

// ano de lançamento
select * from Filmes where data_lancamento < curdate()

