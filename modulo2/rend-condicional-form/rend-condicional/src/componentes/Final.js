import React from "react";
import styled from "styled-components"

const TituloPrincipal4 = styled.h1 `
text-transform: uppercase;
font-weight:bold;
font-size: 1.8em;
margin-top: 1em;
display: flex;
justify-content: center;
`

export default class Final extends React.Component{
    state={

    };

    render() {
        return (
            <div>
                <TituloPrincipal4>
                    O formulario acabou 
                </TituloPrincipal4>
                <p>Muito obrigado por participar! Entraremos em contato !</p>


            </div>
        );
    }
}