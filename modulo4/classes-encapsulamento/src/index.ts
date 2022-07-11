//exercicio 1

//a-) serve par inicializar uma instancia de classe, pode ser passados parametros
// usar "new " para chamar o que consta no constructor

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];


  constructor(cpf: string, name: string, age: number) {
    console.log(`Chamando o construtor da classe UserAccount`);
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public  getName(): string {
    return this.name;
  }

  public  getAge(): number {
    return this.age;
  }

  public  getBalance(): number {
    return this.balance;
  }

  public  getTransactions(): Transaction[] {
    return this.transactions;
  }
}
//b-) Apenas uma vez

const novoUser = new UserAccount("215265456", "regiscleia", 25);

// c-) usando get na propredade que deseja deixar publica
console.log(novoUser.getName);

// exercicio 2
class Transaction {
  private description: string;
  private value: number;
  private date: string;
  

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
   
  }

  public  getDescription():string{
    return this.description
}
public  getValue ():number{
    return this.value
}
public getDate ():string{
    return this.date
}

}

// exercicio 3

class Bank{
    private accounts : UserAccount[]

    constructor(accounts : UserAccount[]){
        this.accounts = accounts
    }

public  getAccounts (): UserAccount[] {
     return this.accounts
}


}
