import React from "react";
import {Parte3} from "../style";

const Stage3=()=>{
    return(
        <Parte3>
            <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <form>
            <label> 5. Por que você não terminou um curso de graduação?</label>
                <input type="text"></input>
                <label> 6. Você fez algum curso complementar?</label>
                <select name="Escolaridade">
                <option value="Nenhum">Nenhum curso</option>
                    <option value="Tecnico">Curso técnico</option>
                    <option value="Ingles">Cursos de inglês</option>                                          
                </select>
            </form>
        </Parte3>

    )
}

export default Stage3;