import axios from "axios";
import React from "react";
import styled from "styled-components";

const SeachInput = styled.div`
width: 50%;
margin: 20px auto;
padding-bottom: 50px;

    input{
        height: 2em;
        width: 100%;
        border-radius: 10%;
        display:block;
        box-sizing:border-box;
        

    }
    button {
       background-color: palevioletred;
       color : aliceblue;
border-radius: 10%;
width: 100%;
height: 2em;
    }

    h3 {
        color: aliceblue;

    }
    
`


const headers = {
    headers: {
        Authorization: "regiscleia-dias-shaw"
    }
};
class CriarPlaylist extends React.Component {
    state = {
        playlist: ""

    }

    createPlaylist = () => {
        const bodyPlay = {
            name: this.state.playlist
        }
        const urlPost = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";


        axios.post(urlPost, bodyPlay, headers)
            .then((res) => {
                this.setState({ playlist: "" })
                alert("Playlist cadastrada")
            }).catch((err) => {
                alert("Playlist já existente")
            })
    };
    onChangePlayList = (event) => {
        this.setState({ playlist: event.target.value })

    };
    render() {
        return (
            <div>
                    <button onClick={this.props.irParaPlaylists}>Voltar para lista</button>
                <SeachInput>
                    <h3> Adicione sua playlist</h3>

                    <input
                        value={this.state.playlist}
                        onChange={this.onChangePlayList}
                    />
                    <button onClick={this.createPlaylist}>Salvar</button>
                </SeachInput>
            </div>
        )
    }



};

export default CriarPlaylist