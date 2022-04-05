import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentarios: ' '
	}

	onChangeComentario = (event) => {
		this.setState({comentarios: event.target.value})

	}
	imprimirInputs = ()=>{
		console.log(this.state.comentarios)
		
	}

	
	render() {
		return <CommentContainer>
			<InputComentario 
				placeholder={'Comentário'}
				value={this.state.Comentarios}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.imprimirInputs}>Enviar</button>
		</CommentContainer>
	}
}
export default SecaoComentario