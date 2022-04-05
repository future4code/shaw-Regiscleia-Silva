import React from "react";
import App  from "../App";
import styled from "styled-components"

const TituloPrincipal = styled.h1 `
text-transform: uppercase;
font-weight:bold;
font-size: 1.8em;
margin-top: 1em;
display: flex;
justify-content: center;
`
const Perguntas = styled.p`
text-align:center ;
`
const CaixaDeTexto = styled.input`
flex-direction: column

`
const ContainerInputs = styled.div`
display:flex;
flex-direction: column;
align-items : center;
`



 export default class Etapa1 extends React.Component{
    state = {
        nome:"",
        idade:"",
        email:"",
      
      
      valorInputNome:"",
      valorInputIdade:"",
      valorInputEmail:""
      };
       
      adicionarDados = ()=>{
        
       this.setState({nome:this.state.valorInputNome})
       this.setState({idade:this.state.valorInputIdade})
       this.setState({email:this.state.valorInputEmail})
      };
      onChangeInputNome = (event)=>{
        this.setState({valorInputNome: event.target.value})
      };
      onChangeInputIdade= (event)=>{
        this.setState({valorInputIdade: event.target.value})
      };
      onChangeInputEmail = (event)=>{
        this.setState({valorInputEmail:event.target.value})
      };
      
      render(){
      
        return (
          <div>
          <TituloPrincipal>Primeira Etapa</TituloPrincipal>
      <div>
        <ContainerInputs>
      <Perguntas>1. Qual é seu nome ?</Perguntas>
      <input
      value={this.state.valorInputNome}
      onChange={this.onChangeInputNome}
      />
      
      <Perguntas> 2. Qual é sua idade ?</Perguntas>
      <CaixaDeTexto 
      value={this.state.valorInputIdade}
      onChange={this.state.valorInputEmail}
      />
      
      <Perguntas>3. Digite seu email</Perguntas>
      <CaixaDeTexto 
      value={this.state.valorInputEmail}
      onChange={this.onChangeInputEmail}
      />
      </ContainerInputs>
      <label for ="nivelEscolar"><Perguntas>4. Qual é seu grau de escolaridade ?</Perguntas>
       </label>
      <select name = "escolaridade" id ="nivelEscolar">
        <option value="Ensino medio completo">"Ensino medio completo"</option>
        <option value="Ensino medio incompleto">Ensino medio incompleto</option>
        <option value="Ensino superior completo">Ensino superior completo</option>
        <option value="Ensino superior incompleto">-Ensino superior incompleto</option>
        </select>
        </div>
      
        
      </div>
        
        )
      }
       };
    
       