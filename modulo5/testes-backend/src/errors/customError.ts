export class CustomErrors extends Error{
    constructor(
        public statusCode:number,
        message:string
    ){
        super(message)
    }
}