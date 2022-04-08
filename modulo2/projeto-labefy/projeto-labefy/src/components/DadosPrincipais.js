import axios from "axios";
import React from "react";
import styled from "styled-components";


const InputsTitulo = styled.p`
color:aliceblue;

`
const InputsContaneir = styled.div`
width: 50%;
margin: 0 auto;

    input{
        height: 2em;
        width: 100%;
        border-radius: 10%;
        display:block;
        box-sizing:border-box;
    }
`
const TabelaMusicas = styled.table`
color: white;

padding-top: 10px;
width: 100%;

th, td{
    padding:8px;
    border-bottom: 1px solid gray;
    text-align: center;
}

`
const Salvar = styled.button`
color : aliceblue;
border-radius: 10%;
width: 100%;
background-color: palevioletred;
height: 2em;
padding-top: 1px;


`




const headers = {
    headers: {
        Authorization: "regiscleia-dias-shaw"
    }
};
class DadosPrincipais extends React.Component {
    state = {
        musicas: [],
        artista: "",
        nomeMusica: "",
        urlMusica: ""
    };

    componentDidMount = () => {
        this.getPlaylistTracks()
    };
    getPlaylistTracks = () => {
        const urlMusic = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks`;
        axios.get(urlMusic, headers)
            .then((res) => this.setState({ musicas: res.data.result.tracks }))

            .catch((err) => {
                console.log(err.message)

            })
    };



    addTrackToPlaylist = () => {
        const bodyMusic = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.urlMusica

        }
        const urlPostAdd = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks`;


        axios.post(urlPostAdd, bodyMusic, headers)
            .then((res) => {
                this.setState({ playlist: "" })
                this.getPlaylistTracks();
                alert("musica cadastrada")
            }).catch((err) => {
                alert(err.message)
            })
    };

    onChangeImputArtista = (e) => {
        this.setState({ artista: e.target.value })
    };
    onChangeImputNome = (e) => {
        this.setState({ nomeMusica: e.target.value })
    };
    onChangeImputUrl = (e) => {
        this.setState({ urlMusica: e.target.value })
    }



    render() {
        const todasAsMusicas = this.state.musicas.map((musica) => {
            return <tr key={musica.id} >
                <td>{musica.name}</td>
                <td>{musica.artist}</td>
                <td>
                    <figure>
                        <figcaption>Ouvir</figcaption>
                        <audio
                            controls
                            src="http://spoti4.future4.com.br/3.mp3">
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </figure>
                </td>
                <p key={musica.id}> </p>


            </tr>
        });

        return (
            <div>
                <div>
                    <TabelaMusicas>
                        <tr>
                            <th>Nome:</th>
                            <th>Artista:</th>
                            <th></th>
                        </tr>
                        {todasAsMusicas}
                    </TabelaMusicas>



                    <Salvar onClick={this.props.irParaPlaylists}>Voltar para lista</Salvar>

                </div>
                < InputsContaneir>

                        <h3> Adicione suas musicas</h3>
                        <InputsTitulo >Nome do Cantor/artista</InputsTitulo >
                        <input
                            value={this.state.artista}
                            onChange={this.onChangeImputArtista}
                        />
                        <InputsTitulo >digite o nome da musica</InputsTitulo >
                        <input
                            value={this.state.nomeMusica}
                            onChange={this.onChangeImputNome}
                        />
                        <InputsTitulo >coloque o link da musica</InputsTitulo >
                        <input
                            value={this.state.urlMusica}
                            onChange={this.onChangeImputUrl}
                        />
                        <Salvar onClick={this.addTrackToPlaylist}>Salvar</Salvar>

                    </ InputsContaneir>
            </div>


        )

    }

}

export default DadosPrincipais


