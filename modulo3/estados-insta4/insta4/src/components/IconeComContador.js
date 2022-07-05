import React from 'react'
import{IconContainer} from "../style"




export function IconeComContador(props) {
	return <IconContainer>
		< img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
		</IconContainer>
}
