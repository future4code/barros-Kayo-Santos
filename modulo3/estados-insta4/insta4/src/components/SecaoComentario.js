import React  from 'react'
import{CommentContainer} from "../style"



export function SecaoComentario(props) {

	

	return (
		<CommentContainer>
			<input 
				placeholder={'Comentário'}
				
				onChange={props.onChangeComentario}
				
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
			</CommentContainer>
	)
}

