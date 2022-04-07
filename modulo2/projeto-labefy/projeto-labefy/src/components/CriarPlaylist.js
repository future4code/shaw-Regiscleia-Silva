import axios from "axios";
import React from "react";

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
                <h3> Adicione sua playlist</h3>
                <input
                    value={this.state.playlist}
                    onChange={this.onChangePlayList}
                />
                <button onClick={this.createPlaylist}>Salvar</button>
            </div>
        )
    }



};

export default CriarPlaylist