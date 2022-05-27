function dadosPessoais(nome:string, nascimento:string):string {
 
 
 const separarData: string[] = nascimento.split("/")
 const dia:string = separarData[0]
 const mes:string = separarData[1]
 const ano:string = separarData[2]
 
 const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
    return frase
}

console.log(dadosPessoais ("regiscleia", "13/05/1995"))