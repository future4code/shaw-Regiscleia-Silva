import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

import regiscleia from  "./img/foto_regiscleia.jpeg"
import arituba from  "./img/arituba.jpeg"
import marcelo from  "./img/marcelo.jpeg"
import natal from  "./img/natal.jpeg"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Regiscleia'}
          fotoUsuario={regiscleia}
          fotoPost={arituba}
        />
        <Post
          nomeUsuario={'Marcelo'}
          fotoUsuario={natal}
          fotoPost={marcelo}
        />
      </MainContainer>
    );
  }
}

export default App;
