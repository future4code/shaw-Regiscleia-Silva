import React from "react";
import './App.css';
import Etapa1 from "./componentes/Etapa1";
import Etapa2 from "./componentes/Etapa2";
import Etapa3 from "./componentes/Etapa3";
import Final from "./componentes/Final";
import styled from "styled-components"




  export default class App extends React.Component{
  state = {
    etapa:1,
};

renderizaEtapa = () => {
  switch(this.state.etapa) {
    case 1: 
        return <Etapa1 />;
      break;
    case 2: 
        return <Etapa2 />;
      break;
    case 3:
      return <Etapa3/>;
      break;
    case 4:
      return <Final/>
  }
}

irParaProximaEtapa = ()=> {
  this.setState({etapa : this.state.etapa+ 1});
}


  render(){
      return (
  <div>
   
    
    {this.renderizaEtapa()}
    <button onClick = {this.irParaProximaEtapa}> Proxima etapa</button>
    
    

      </div>


  );
      }
    }
