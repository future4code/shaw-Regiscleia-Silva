import React from "react";
import axios from 'axios';

const headers = {
    headers: {
        Authorization: "regiscleia-dias-shaw"
    }
};

class Inicial extends React.Component {

    state = {
        nome: '',
        email: ''
    }

    createUser = () => {

        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        const urlPost =
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        axios
            .post(urlPost, body, headers)
            .then((res) => {
                this.setState({ nome: "" })
                this.setState({ email: "" })
                alert('Usuário ' + this.state.nome + ' cadastrado com sucesso!')
            }).catch((err) => {
                console.log(err.message)
                alert("Usuarios já existente")
            });
    }

    onChangeNomeInput = (e) => {
        this.setState({ nome: e.target.value })
    }

    onChangeEmailInput = (e) => {
        this.setState({ email: e.target.value })
    }

    trocarDeTela = () => {

    }

    render() {
        return (
            <div>
                
                <input type={'text'} placeholder={'Nome'} value={this.state.nome} onChange={this.onChangeNomeInput}></input>
                <input type={'email'} placeholder={'Email'} value={this.state.email} onChange={this.onChangeEmailInput}></input>
                <input type={'submit'} value={'Cadastrar'} onClick={this.createUser}></input>
            </div>
        )
    }
}

export default Inicial