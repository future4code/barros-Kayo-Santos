import React from "react";
import {Parte1} from "../style";

const Stage1 = ()=>{

    return(
        <Parte1>
            <h1>Etapa 1 - Dados Pessoais</h1>
            <form>
                <label> 1. Qual o seu nome?</label>
                <input type="text"></input>
                <label> 2. Qual a sua idade?</label>
                <input type="number"></input>
                <label> 3. Qual o seu email?</label>
                <input type="email"></input>
                <label> 4. Qual a sua escolaridade?</label>
                <select name="Escolaridade">
                    <option value="MedioIncompleto">Ensino Médio Incompleto</option>
                    <option value="MedioCompleto">Ensino Médio Completo</option>
                    <option value="SuperiorIncompleto">Ensino Superior Incompleto</option>
                    <option value="Mar">Ensino Superior Completo</option>  
                </select>
            </form>

            </Parte1>
    )

}


export default Stage1;