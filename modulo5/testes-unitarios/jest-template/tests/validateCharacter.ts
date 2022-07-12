export interface personagem {
  nome: string;
  vida: number;
  defesa: number;
  forca: number;
  
}
export const validateCharacter = (input: personagem): boolean => {
  if (
    !input.nome ||
    !input.vida === undefined ||
    !input.vida === undefined ||
    !input.forca === undefined
  ) {
    return false
  }
  if(input.vida <= 0 || input.defesa <= 0 || input.forca <= 0){
return false
  }
  return true
};
