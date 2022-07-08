export class SearchPostBusiness{
    constructor(){}



    searchPost =async(id:string) => {
        if (!id) {
            throw new Error("necessario um Id");
          }
    }
}
