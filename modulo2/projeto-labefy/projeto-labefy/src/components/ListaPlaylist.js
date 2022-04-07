import axios from "axios";
import React from "react";
import DadosPrincipais from "./DadosPrincipais";

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
            return <div>
                <button key={lista.id} onClick={() => this.irDetalhes(lista.id)}>Detalhar</button>
                <p>{lista.name}</p>
                <button onClick={() => this.deletarPlaylist(lista.id)}>X</button></div>
        })

        return (
            <div>
                <h4>Lista de playlist</h4>
                {listas}
                {this.state.playlistId !== "" &&
                    <DadosPrincipais id={this.state.playlistId} />}

            </div>

        )
    }
}

export default ListaPlaylist