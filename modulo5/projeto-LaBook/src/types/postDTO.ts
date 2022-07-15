import { Role } from "../model/Post"

export type PostDTO ={
    photo :string,
    description:string,
    date_create:string,
    role:Role
}