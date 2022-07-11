export enum roles {
    admin = "ADMIN",
    normal = "NORMAL"
}

export class Users {
    
    constructor(
 private id:string,
private name : string,
private email: string,
private password:string,
private role : roles
    ){}

    public getId(){
        return this.id
      }
      public getname(){
        return this.name
      }
      public getEmail(){
        return this.email
      }
      public getPassword(){
        return this.password
      }
      public getRole(){
        return this.role
      }

     
  
}

