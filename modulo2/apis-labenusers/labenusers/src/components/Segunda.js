import axios from "axios";
import React from "react";
import Inicial from "./Inicial";
import styled from "styled-components";
import DetalhesUsuarios from "./DetalhesUsuarios";

const ListaUsuarios = styled.ul`
    padding: 1em;
    list-style-type: none;
`
const ContainerBotao = styled.div`
    display:flex;
    flex-direction: column;
`
const Remove = styled.button`
    border:none;
    background: white;
    width: 30px;
    height: 30px;
    border-radius:50%;
    cursor: pointer;

    &:hover{
        background-color: #04AA6D;
        color: white;
    }
`

const headers = {
    headers: {
        Authorization: "regiscleia-dias-shaw"
    }
};

class Segunda extends React.Component {
    state = {
        usuarios: [],
        usuario: {},
        tela: 'listagem'
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

    detalhesDoUsuario = (id) => {
        const urlGet = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.get(urlGet, headers)
            .then((res) => {
                this.setState({ usuario: res.data });
                this.setState({ tela: 'detalhes' })
            }).catch((err) => {
                console.log(err.message)
            });
    }

    render() {
        return (
            <>
                {this.state.tela === 'detalhes' ? <DetalhesUsuarios usuario={this.state.usuario} /> :
                    <ContainerBotao>
                        <h3>Lista de usuários</h3>

                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.usuarios.map(user => {
                                    return (
                                        <tr>
                                            <td>
                                                <span onClick={() => this.detalhesDoUsuario(user.id)}>{user.name}
                                                </span>
                                            </td>
                                            <td>
                                                <Remove onClick={() => this.deletarUsuario(user.id)}>X</Remove>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <hr></hr>

                    </ContainerBotao>
                }
            </>
        )
    }
}
export default Segunda