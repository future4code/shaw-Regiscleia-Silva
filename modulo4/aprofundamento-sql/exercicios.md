exercicio 1

a - ira alterar a tabela Actor para apagar a coluna salario

b- altera a tabela Actor redeclarando para sexo ao em vez de genero.

c - altera a tabela Actor na propriedade genero para ter mais caracteres disponiveis.

d - alter table Actor change gender gender varchar(100);

exercicio 2 

a - 
update Actor
Set  
birth_date  ="1948-06-22" ,
name ="Moacyr Franco" 
where id= "003";

b-
update Actor
Set  
name ="JULIANA PAES" 
where id = "004";


update Actor
Set  
name ="juliana paes" 
where id = "004";

c-
update Actor
Set  
name ="Caua Reymond",
salary =12000,
 birth_date = "1988-03-15",
 gender = "male"
where id = "005";

d- não altera nenhuma coluna ou linha, pois não acha o destino do id existente

exercicios 3
a- DELETE FROM Actor WHERE name = "Caua Reymond";

b- DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

exercicio 4
a - select  max(salary) From Actor;

b- select min(salary) from Actor;

c-select count(*) from Actor where gender = "female";

d-select sum(salary) from Actor 


exercicio 5
a- a query trás a quantidade de atores de acordo com seu genero.

b-
select id, name from Actor
order by name desc;

c-
select id, name, salary from Actor
order by salary desc;

d-
select id, name, salary from Actor
order by salary desc limit 3;

e-
select id, name, salary from Actor
order by salary desc limit 3;

exercício 6

a- 
alter table Filmes add limite_data_exibicao Date;

b-
alter table Filmes change avaliacao avaliacao float;

c)
update Filmes
set 
limite_data_exibicao = "2022-09-25"
where id = "003";

d)

	0 row(s) affected Rows matched: 0  Changed: 

    Não foi alterado nenhuma linha porque o id  002 não existe
