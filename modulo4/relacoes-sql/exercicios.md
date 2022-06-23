// exercicio 1
a-) chave estrangeira é quando pega-se uma informação de outra tabela e coloca na tabela atual.

b-) create table avaliacoes(
 id varchar(255) primary key,
 comentarios text not null,
 nota float not null,
 filmes_id varchar(255),
foreign key (filmes_id) references Filmes(id)
);

insert into avaliacoes(id, comentarios, nota, filmes_id)
values(
"001",
" otimo filme",
10,
"001"
);

insert into avaliacoes(id, comentarios, nota, filmes_id)
values(
"002",
" otimo filme",
8,
"003"
);

insert into avaliacoes (id, comentarios, nota, filmes_id)
values(
"003",
" otimo filme",
7,
"004"
);

select * from avaliacoes

c-) erro 1452 , restrição de chave estrangeira falha, pois não achou o id correspondente na tabela de filmes.

d-) lter table Filmes drop column avaliacao;

e-)

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails, para apagar algo teria que apagar na tabela avaliaçao e depois em filmes, pois como dados esta sendo usado em outra tabela, não é permitido apagar 


//exercicio 2 
a-) a tabela esta pegando a tabela filmes e a de atores é trazendo para esta nova tabela de elenco do filme 

b-)create table elenco_filmes (
filmes_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (filmes_id) REFERENCES Filmes(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)

);

insert into elenco_filmes(Filmes_id, actor_id)
values(
"001",
"001"

);

insert into elenco_filmes(Filmes_id, actor_id)
values(
"003",
"006"

);

insert into elenco_filmes(Filmes_id, actor_id)
values(
"004",
"006"

);
insert into elenco_filmes(Filmes_id, actor_id)
values(
"001",
"004"

);
insert into elenco_filmes(Filmes_id, actor_id)
values(
"001",
"004"

);
insert into elenco_filmes(Filmes_id, actor_id)
values(
"001",
"006"

);
insert into elenco_filmes(Filmes_id, actor_id)
values(
"003",
"001"

);

select * from  elenco_filmes;


c-) não é possivel criar uma linha filha, ha uma retriçãode chave estrangeira, não tem como criar pois não existe o id colocado .

d-)

/// exercicio 3
a-) o operador ON significa uma condição se na tabela Movie e na tabela rating tem ids iguais em ambas tabelas.

b-) 
select f.id as filme_id, a.* from Filmes f inner join avaliacoes a
on f.id = a.id
