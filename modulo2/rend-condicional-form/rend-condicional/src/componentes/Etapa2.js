import React from "react";
import styled from "styled-components"

const TituloPrincipal = styled.h1 `
text-transform: uppercase;
font-weight:bold;
font-size: 1.8em;
margin-top: 1em;
justify-content: center;

`
const Perguntas2 = styled.p`
text-align:center ;
`
const CaixaDeTexto2 = styled.input`
flex-direction: column

`
const ContainerInputs2 = styled.div`
display:flex;
flex-direction: column;
align-items : center;
`



export default class Etapa2 extends React.Component{

    state = {
        curso:"",
        local:"",


    valorInputCurso:"",
    valorInputLocal:""
    };

    adicionaCursoLocal= () => {
this.setState({curso:this.state.valorInputCurso})
this.setState({local: this.state.valorInputLocal})
    };
    onChangeInputCurso = (event)=>{
        this.setState({valorInputCurso: event.target.value})
       
    };
    onChangeInputLocal =(event) =>{
        this.setState({valorInputLocal:event.target.value})
    };

    render() {
        return (
            <div>
                <TituloPrincipal>Etapa 2 - informações do ensino superior</TituloPrincipal>


                <div>
                <ContainerInputs2>
                    <Perguntas2> 5. Qual curso ?</Perguntas2>
                    <CaixaDeTexto2
                        value={this.state.valorInputCurso}
                        onChange={this.onChangeInputCurso}
                    />
                    
                    <Perguntas2>6. qual a unidade de ensino ?</Perguntas2>
                    <CaixaDeTexto2
                    value={this.state.valorInputLocal}
                    onChange={this.onChangeInputLocal}
                    />
</ContainerInputs2>
                </div>
                </div>

            
        );
        }

}