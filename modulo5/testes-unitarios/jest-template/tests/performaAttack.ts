import { personagem, validateCharacter } from "./validateCharacter";




/* export const  PerformaAttack = (atacante:personagem, defensor:personagem)=>{
    if(!validateCharacter(atacante) || !validateCharacter(defensor)){
        throw new Error("personagem invalido");
        
    }
if(atacante.forca > defensor.defesa){
    defensor.vida -= atacante.forca - defensor.defesa
}
}
 */
export const PerformaAttack = 
(atacante : personagem,
    defensor:personagem,
    validador:(input:personagem)=>boolean
) =>{
if(!validador(atacante) || !validador(defensor)){
throw new Error("personagem invalido");

}
if(atacante.forca > defensor.defesa){
defensor.vida -= atacante.forca - defensor.defesa
}
}
    //exercico 3 
    //c-) a diferença é que usa uma função como parametro
    // para não receber outras funções ja criadas e ter apenas umas função responsavel.