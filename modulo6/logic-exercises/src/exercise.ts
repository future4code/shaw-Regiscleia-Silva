export const recebeArray=(array :number[]):number=>{
 const contador = 1000
 let result = 0
for (const num of array){
    result += num
}
return contador - result

}
console.log(recebeArray([1,2,3,5,8]))