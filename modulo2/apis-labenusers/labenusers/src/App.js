
import './App.css';
import React from 'react';
import Segunda from './components/Segunda';
import Inicial from './components/Inicial';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
display: flex;
justify-content: center;
align-items:center;
`
const Formulario = styled.div`
border: 1px solid black;
background-color: aliceblue;
width: 500px;
padding: 1em;
`
const BotaoTrocar = styled.button`
padding:10px
justify-items: center ;

`

const Menu = styled.nav`
  // background: pink;
  height: 50px;
`

const Paragrafo = styled.p`
text-align : center;
`
class App extends React.Component {

  state = {
    troca: false
  }

  goHome = () => {
    this.setState({ troca: false })
  }

  renderizaTela = () => {
    if (!this.state.troca) {
      return <Inicial />
    } else {
      return <Segunda onBack={this.goHome} />
    }
  }

  trocarDeTela = () => {
    this.setState({ troca: !this.state.troca })
  }

  render() {
    return (
      <div>
        <header>
          <Menu>
            <ul>
              <li>
                <BotaoTrocar onClick={this.trocarDeTela}>Usuarios cadastrados</BotaoTrocar>
              </li>
            </ul>
          </Menu>
        </header>
        <ContainerPrincipal>
          <Formulario>
            {/* <Paragrafo>Cadastro</Paragrafo> */}
            {this.renderizaTela()}


          </Formulario>

        </ContainerPrincipal>
      </div>

    )
  }
}

export default App;
