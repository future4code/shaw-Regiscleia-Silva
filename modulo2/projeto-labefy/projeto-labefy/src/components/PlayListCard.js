
import React from "react";


class PlayListCard extends React.Component {

    pageDetalhes = (playlist) => {
        this.props.pageDetalhes(playlist)
    }


    render() {
        return (
            <div className="playlist-card">
                <div className="container" onClick={() => this.pageDetalhes(this.props.playlist)}>

                </div>
                <div className="titulo">
                    <a href="#" onClick={() => this.pageDetalhes(this.props.playlist)}>
                        {this.props.playlist.name}
                    </a>
                    <button onClick={() => this.deletarPlaylist(this.props.playlist.id)}>X</button>
                </div>
            </div >
        )
    }
}
export default PlayListCard