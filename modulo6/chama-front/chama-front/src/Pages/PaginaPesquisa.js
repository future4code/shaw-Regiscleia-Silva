import axios from "axios"
import { useState } from "react"
import { baseUrl } from "../constantes/baseUrl"
import {UseForm} from "../constantes/UseForm"

export const PaginaPesquisa =()=>{
const [usuarios, setUsuarios]= useState([])
    const[form,onChange,clear]= UseForm({
        login:""
    })

    const onClickPesquisa =()=>{
        const token =localStorage.getItem("token")
        const headers ={
            Authorization : token
        }
        axios
        .get(`https://api.github.com/users`, form, headers)
        .then((Response)=>{
            setUsuarios(Response.data)
            clear()
            console.log(Response.data)
           
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    return(
        <div>
            <form>
            <input
            name="login"
            type={"text"}
            value={form.login}
            onChange={onChange}
            placeholder="Nome"
            >
           
            </input>
            <button
            onClick={onClickPesquisa} >Pesquisar</button>
           
          
  {usuarios.map((usuario)=>{
    return(
  <p>{usuario.name}</p>  
    /*  {usuario.bio}
    {usuario.avatar_url}
    {usuario.repos_url}  */

        
    )
})}
 </form>
         </div>
    )
}