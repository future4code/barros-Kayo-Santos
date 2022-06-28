import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return(
        <div className="smallcard-container">
            <img src={props.imagem}/>
            <h4>{props.mensagem}</h4>
            <p>{props.email}</p>
        </div>
    )
}

export default CardPequeno;