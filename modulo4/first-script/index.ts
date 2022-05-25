console.log("hello")

function buscarCarrosPorMarca(frota:Array<object>, marca:string):object{
   if( marca === undefined ){
    return frota
   }
    


return frota.filter((carro : object):boolean => {
return carro.marca === marca

})
}
