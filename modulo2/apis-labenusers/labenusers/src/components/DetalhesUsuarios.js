import React from "react";
import Segunda from "./Segunda";
import axios from "axios";
import styled from "styled-components";


const Titulo= styled.div`
display: flex;
flex-diretion:column;
`


class DetalhesUsuarios extends React.Component{


    
    render(){
        return(
           <div>
               <Titulo>Nome: {this.props.usuario.name}</Titulo>
                <Titulo>Email: {this.props.usuario.email}</Titulo> 
                
           </div> 
        )
    }
}

export default DetalhesUsuarios