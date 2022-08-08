export const recebeString=(str:string)=>{
    const result:any = []
    
    for(let checagem of str )
 if(checagem === "(" || checagem === "["  || checagem ==="{"  ){
result.push(checagem)
 } else{
    const fechar = result.pop()
    if(!fechar){
        return false
    }else if(
        (fechar === "(" && checagem !== ")") ||
        (fechar === "{" && checagem !== "}") ||
    (fechar === "[" && checagem !== "]")   ){
        return false
    }

 }

if(result.length > 0){
    return false
}
return true
}
