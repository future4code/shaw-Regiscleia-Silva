import React from "react";
import styled from "styled-components"


const TituloTres = styled.h1 `
text-transform: uppercase;
font-weight:bold;
font-size: 1.8em;
margin-top: 1em;
justify-content: center;
`
const Perguntas3 = styled.p`
text-align:center ;
`
const CaixaDeTexto3 = styled.input`
flex-direction: column

`
const ContainerInputs3 = styled.div`
display:flex;
flex-direction: column;
align-items : center;
`

export default class Etapa3 extends React.Component{
    state = {
        porque:"",
        

    valorInputPorque:"",
    
    };

    adicionaPorque= () => {
this.setState({curso:this.state.valorInputPorque})

    };
    onChangeInputPorque = (event)=>{
        this.setState({valorInputPorque: event.target.value})
       
    };
   

    render() {
        return (
            <div>
                <TituloTres>Etapa 3 - informações gerais de ensino</TituloTres>


                <div>
                    <ContainerInputs3>
                    <Perguntas3> 5. Por que não terminou um curso de gradução?</Perguntas3>
                    <CaixaDeTexto3
                        value={this.state.valorInputPorque}
                        onChange={this.onChangeInputPorque}
                    />
                          
    <label for ="curso complementar">
        <Perguntas3>4. você fez algum curso complementar ?</Perguntas3>
       </label>
      <select name = "gerais" id ="curso complementar">
        <option value=" Curso de inglês">Curso de inglês</option>
        <option value="curso tecnico">curso tecnico</option>
        <option value="Nenhum">Nenhum</option>
        </select>
        </ContainerInputs3>
           

                </div>
                </div>

            
        );
        }
    }