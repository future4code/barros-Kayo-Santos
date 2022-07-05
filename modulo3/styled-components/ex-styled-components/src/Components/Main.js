import React from "react";
import{MainContainer,MainBarraEsquerda,MainBarraCentral,MainBarraDireita} from "../style"

export default function Main() {
    return(
       <MainContainer>
            <MainBarraEsquerda/>          
            <MainBarraCentral>
                <form>
                    <label>Remetente <input type="text"/></label>
                    <label>Msg <input type="text" size={60} /></label>
                    <button>Enviar Mensagem</button>
                </form>
            </MainBarraCentral>    
            <MainBarraDireita/>         
        </MainContainer> 
    )
}