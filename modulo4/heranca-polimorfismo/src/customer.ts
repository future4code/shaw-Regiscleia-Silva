import {User} from "./index";


// exercicio 2
//a-) 1 vez
//b-) 1 vez tambem, não sei o porque 


//exercio 3 
//a-) junto com os outros atributos da instancia imprimi o password, sepaadmente não,
//

// exercicio 4 

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

  }
  

  const novoCustomer = new Customer(
"15236513", "re@gmail", "regis", "jfhsisnck", "masterC", 
  )
  console.log(novoCustomer)