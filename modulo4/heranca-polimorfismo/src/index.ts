// exercicio 1
//a-) não pois ela esta privada 
// b-) uma vez
export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public introduceYourself() : string{
        return `Olá, sou ${this.name}. bom dia !`
    }
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }

      
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public getPassword():string{
        return this.password
      }
  }
  const novoUser = new User ("215265456", "regiscleia@email","regiscleia","123456" );
  console.log(novoUser.getPassword, novoUser.getEmail,novoUser.getId, novoUser.getName)


  