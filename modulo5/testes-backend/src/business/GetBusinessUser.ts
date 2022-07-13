
import {GetDataUser} from "../data/GetDataUser";

export class GetBusinessUser {
  constructor(private getDataUser: GetDataUser) {}


    getUserById =async(id:string) => {
        if (!id) {
            throw new Error("necessario um Id");
          }
    }
}