// exercicios
//1 a)
//const minhaString :string = 20 // a variavel fica com erro

// b)
//type meuNumero = number & string; // usando intersection types



//d)
enum Cor {
    VERMELHO ="vermelho",
    AZUL = "azul",
    AMARELO ="amarelo",
    VIOLETA="violeta",
    VERDE = "verde",
    LARANJA = "laranja",
    ANIL ="anil"
    

}
// c)
type person = {
  nome: string;
  idade: number;
  corFavorita: Cor;
};


const dados1: person = {
  nome: "Regiscleia",
  idade: 27,
  corFavorita: Cor.AMARELO,
};

const dados2: person = {
    nome: "Regiscleia",
    idade: 27,
    corFavorita: Cor.ANIL,
  };

  const dados3: person = {
    nome: "Regiscleia",
    idade: 27,
    corFavorita: Cor.LARANJA,
  };
  
  console.log(dados3)
  

