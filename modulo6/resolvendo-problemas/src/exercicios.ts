function   editarString(strigA:string , stringB:string):boolean{
    if(Math.abs(strigA.length- stringB.length)>1)
        return false
    
    if(strigA.length > stringB.length)
        return strigA.includes(stringB)
    
    if(strigA.length > stringB.length)
        return stringB.includes(strigA)
 
    let  letrasDiferentes = 0
    for(let i = 0; i< strigA.length; i++){
        if(strigA[i] !== stringB[i])letrasDiferentes++
    }

    return letrasDiferentes === 1
}


//exercicio 2
export const stringCompression = (input:any) => {
    const substrings = [];
    let lastChar = input[0];
    let charCount = 0;
  
    for (const char of input) {
      if (char !== lastChar) {
        substrings.push(lastChar + charCount);
        lastChar = char;
        charCount = 0;
      }
      charCount++;
    }
  
    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
      result += key;
    }
  
    return result.length > input.length ? input : result;
  };