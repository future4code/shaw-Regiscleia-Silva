
//exercico 1 Polimorfismo

//a-) a unica que não foi impresa o valor é calculereBill


export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais


  }

  const client: Client = {
    name: "Regiscleia",
    registrationNumber: 5,
    consumedEnergy: 200,
  
    calculateBill: () => {
      return 2;
    }
  }

  console.log(client)

  //exercicio 2

//a-) não pode ser criada uma instancia em uma classe abstrata
  
//b-) fazer um extends do Place, pois tera as propriedades, porém não será abstrata.
export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
//  const novaPlace = new Place (
//    ""
  //)

  // exercicio 3
  
  export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

public getResidents ():number{
return this.residentsQuantity
}

  }


  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

public getFloorsQuantity() :number {
    return this.floorsQuantity
}
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number,
      // Refere-se à quantidade de máquinas do local
  
      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }

  // exercicio 4
   export class ResidentialClient extends Residence implements Client{
 constructor(
  public  name: string,
  public  registrationNumber: number,
  public  consumedEnergy: number,
  private cpf : string,
  residentsQuantity : number,
  cep : string
 ){
    super(residentsQuantity, cep)
 }

    
    public get getCpf() :string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
    
   }
 // exercicio 5
 //a-) grande parte dos atributos do constructor
 //b-) o calculo muda e tambem o atributo do super 
   export class ComercialClient extends Commerce implements Client{
constructor(public  name: string,
    public  registrationNumber: number,
    public  consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep : string
   ){
      super(floorsQuantity, cep)
   }

   public calculateBill(): number {
    return this.consumedEnergy * 0.53
}
 public getCnpj():string {
    return this.cnpj
 }

   }

   // exercicio 6
   // a-)  industry pois ela é responsavel pelas informações de um cliente que seja industria em que o calculo e feito atraves 
   //de quantidade de maquinas industriais.
   //b-)implementa Client porque a maior parte das informaçoes são desta classe 
   export class IndustrialClient extends Industry implements Client{
 
    constructor(public  name: string,
        public  registrationNumber: number,
        public  consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep : string,
        private registrationIndustrial : number,
        machinesQuantity :number
       ){
          super(machinesQuantity , cep)
       }

       public getRegistroI() : number{
        return this.registrationIndustrial
    }
       public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
        
   }