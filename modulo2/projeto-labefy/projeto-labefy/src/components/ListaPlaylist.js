import axios from "axios";
import React from "react";
import DadosPrincipais from "./DadosPrincipais";
import PlayListCard from "./PlayListCard";


const headers = {
    headers: {
        Authorization: "regiscleia-dias-shaw"
    }
};
class ListaPlaylist extends React.Component {
    state = {
        todasPlaylists: [],
        playlistId: ""
    };


    getAllPlaylists = () => {

        const urlPost = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

        axios.get(urlPost, headers)
            .then((res) => this.setState({ todasPlaylists: res.data.result.list }))
            .catch((err) => {
                alert("tente novamente !")
            })

    };


    deletarPlaylist = (id) => {
        const urlDel = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

        if (window.confirm('Tem certeza que deseja excluir esta playlist?')) {
            axios.delete(urlDel, headers)
                .then((res) => {
                    this.getAllPlaylists()
                    alert("Playlist excluida")
                }).catch((err) => {
                    alert("tente novamente ")
                    console.log(err.message)
                });
        }
    };

    irDetalhes = (id) => {
        this.setState({ playlistId: id })
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    };


    render() {

        const listas = this.state.todasPlaylists.map((lista) => {
            return <PlayListCard key={lista.id} playlist={lista} pageDetalhes={this.props.pageDetalhes} />
        })

        return (
            <div>
                <h4>Playlists</h4>
                <div className="playlists">
                    <div className="playlist-card">
                        <div className="container" onClick={this.props.irParaPlaylistForm}>
                            <h1>+</h1>
                        </div>
                        <a href="#" onClick={this.props.irParaPlaylistForm}> Nova Playlist</a>
                    </div>
                    {listas}
                </div>
            </div>

        )
    }
}

export default ListaPlaylist