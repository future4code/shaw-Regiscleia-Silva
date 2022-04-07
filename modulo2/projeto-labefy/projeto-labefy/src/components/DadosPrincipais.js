import axios from "axios";
import React from "react";

const headers = {
    headers: {
        Authorization: "regiscleia-dias-shaw"
    }
};
class DadosPrincipais extends React.Component {
    state = {
        musicas: []
    };

    componentDidMount = () => {
        this.getPlaylistTracks()
    };
    getPlaylistTracks = () => {
        const urlMusic = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;
        axios.get(urlMusic, headers)
            .then((res) => this.setState({ musicas: res.data.result.tracks }))

            .catch((err) => {
                console.log(err.message)

            })
    };

    render() {
        const todasAsMusicas = this.state.musicas.map((musica) => {
            return <p key={musica.id}>Cantor: {musica.artist}</p>
        })
        return (
            <div>
                {todasAsMusicas}
            </div>
        )

    }

}

export default DadosPrincipais


