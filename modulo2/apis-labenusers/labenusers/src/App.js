
import './App.css';
import React from 'react';
import Segunda from './components/Segunda';
import Inicial from './components/Inicial';


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
        <button onClick={this.trocarDeTela}>Trocar de tela</button>
        {this.renderizaTela()}
      </div>

    )
  }
}

export default App;
