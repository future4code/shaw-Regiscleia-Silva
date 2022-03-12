function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let primeira = p1 * 2 
  let segunda = p2 * 3
  let notaDeEx = ex * 1 
  
  let calculoDeNotas= (primeira + segunda + notaDeEx) / 6
  
  if(calculoDeNotas >= 9){
    return 'A'
  } else if(calculoDeNotas < 9 && calculoDeNotas >= 7.5){
    return 'B'
  } else if(calculoDeNotas < 7.5 && calculoDeNotas >= 6){
    return 'C'
  } else {
    return 'D'
  }
  
}