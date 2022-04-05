import axios from "axios";
import React from "react";
import Inicial from "./Inicial";

const headers = {
    headers: {
        Authorization: "regiscleia-dias-shaw"
    }
};

class Segunda extends React.Component {
    state = {
        usuarios: []
    };

    componentDidMount() {
        this.listaDeUsuario();
    }

    listaDeUsuario = () => {
        const urlGet = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(urlGet, headers)

            .then((res) => {
                this.setState({ usuarios: res.data });
            }).catch((err) => {
                console.log(err.message)
            });
    }

    deletarUsuario = (id) => {
        const urlDel = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
        if (window.confirm('Tem certeza que deseja excluir o usuário?')) {
            axios.delete(urlDel, headers)
                .then((res) => {
                    alert("Usuario excluido")
                    this.componentDidMount()
                }).catch((err) => {
                    alert("Erro ao deletar o usuário")
                    console.log(err.message)
                });
        }
    }

    back = () => {
        this.props.onBack();
    }


    render() {

        const componenteUsuarios = this.state.usuarios.map((usuario) => {
            return <li key={usuario.id}>{usuario.name}
                <span onClick={() => this.deletarUsuario(usuario.id)}>X</span>
            </li>;
        });
        return (
            <div>
                <label>
                    <ul>
                        {componenteUsuarios}
                    </ul>

                </label>
                <button onClick={this.back}>Voltar</button>
            </div>
        )
    }
}
export default Segunda