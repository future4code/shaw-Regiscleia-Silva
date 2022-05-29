function dadosPessoais(nome: string, nascimento: string): string {
  const separarData: string[] = nascimento.split("/");
  const dia: string = separarData[0];
  const mes: string = separarData[1];
  const ano: string = separarData[2];

  const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
  return frase;
}

console.log(dadosPessoais("regiscleia", "13/05/1995"));

//exercicio2

function tipoVariavel(frase: string): string {
  return typeof frase;
}
console.log(tipoVariavel("sou uma frase"));

// exercicio3
enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}
function catalogar(
  nome: string,
  lancamento: number,
  genero: GENERO,
  pontuacao?: number
): any {
  type filmes = {
    nome: string;
    lancamento: number;
    genero: GENERO;
    pontuacao?: number;
  };
  const informacoes: filmes = {
    nome: nome,
    lancamento: lancamento,
    genero: genero,
    pontuacao: pontuacao,
  };
  return informacoes;
}
console.log(catalogar("marley e eu", 50, GENERO.DRAMA, 20));

//exercicio4
enum Setor {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}
type colaborador = {
  nome: string;
  setor: Setor;
  salario: number;
  presencial: boolean;
};

const arrayColabo: Array<colaborador> = [
  {
    nome: "Marcos",
    salario: 2500,
    setor: Setor.MARKETING,
    presencial: true,
  },
  { nome: "Maria", salario: 1500, setor: Setor.VENDAS, presencial: false },
  {
    nome: "Salete",
    salario: 2200,
    setor: Setor.FINANCEIRO,
    presencial: true,
  },
  {
    nome: "João",
    salario: 2800,
    setor: Setor.MARKETING,
    presencial: false,
  },
  {
    nome: "Josué",
    salario: 5500,
    setor: Setor.FINANCEIRO,
    presencial: true,
  },
  { nome: "Natalia", salario: 4700, setor: Setor.VENDAS, presencial: true },
  {
    nome: "Paola",
    salario: 3500,
    setor: Setor.MARKETING,
    presencial: true,
  },
];

function selecionar(selecionados: Array<colaborador>): colaborador[] {
  return selecionados.filter((colaborador) => {
    return colaborador.setor === Setor.MARKETING && colaborador.presencial;
  });
}
console.table(selecionar(arrayColabo));

//exercicio5
const arrayUsuarios = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];
type TodosUsuarios = {
  name: string;
  email: string;
  role: string;
};

function usuarios(arrayUsuarios: Array<TodosUsuarios>): string[] {
  return arrayUsuarios
    .filter((user) => {
      return user.role === "admin";
    })
    .map((user) => {
      return user.email;
    });
}
console.table(usuarios(arrayUsuarios));

//exercicios6

// entrada
const clientes = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

type cliente = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

function fazerEmprestimo(clientes: Array<cliente>): Array<cliente> {
  return clientes
    .map((usuario) => {
      const somaTotal = usuario.debitos.reduce((a, b) => {
        return a + b;
      }, 0);
      usuario.debitos = [];
      usuario.saldoTotal = usuario.saldoTotal - somaTotal;
      return usuario;
    })
    .filter((usuario) => {
      return usuario.saldoTotal < 0;
    });
}
console.table(fazerEmprestimo(clientes));

// exercicio7

const estoque = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

type produtos = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
};

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

function contarProdutos(estoque: Array<produtos>): Array<produtos> {
  return estoque.map((produto) => {
    produto.valorUnitario = ajustaPreco(produto.valorUnitario as number);
    return produto;
  }).sort((a,b)=>{
return a.quantidade - b.quantidade 
  })
}
console.table(contarProdutos(estoque))

//exercicio8

/*  type dados ={
    dataN:string,
    dataE: string
}

function renovarCarta (dataN:string, dataE:string):boolean<dados>{
    const calculoNascimento =  newDate(202) - dataN 

    return

 


if(){

} 

}
 */

//exercicio 9

//exercicio 10



/* function verificaCPF (cpf:string):boolean{
let soma:number = 0
let resto: number = 0
    if(cpf === "00000000000"){
        return false
    }
    for (let i= 1; i<=9; i++)soma =soma + parseInt(cpf.substring(i-1, i)) * (12 -i)
        resto =(soma * 10) % 11
    
        if((resto === 10) || (resto === 11)) resto = 0;{
            //return false
        }
           else ( resto != parseInt(cpf.substring(10, 11))){
            return true
        } 
    }
    

 */