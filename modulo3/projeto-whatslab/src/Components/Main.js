import React, {useState} from 'react'
import{MainContainer,MainBarraEsquerda,MainBarraCentral,MainBarraDireita,MainChat,MainMensagens} from "../style"

export default function Main() {
    
    //declarando remetente e a mensagem
    const [itens,setItens]=useState([{remetente:""}, {mensagem:""}])
    
    const chat=itens.map((item,index)=>{
        return(
            <MainMensagens key={index}>
                  <div>
                  <span>{item.remetente}:</span>
                  <span>{item.mensagem}</span> 
                  </div> 
            </MainMensagens>
        )
    })
    
    //criando evento do remetente e mensagem.
    const [inputRemetente,setInputRemetente]=useState("")
    const [inputMensagem,setInputMensagem]=useState("")

    const nomeUsuario=(e)=>{
        setInputRemetente(e.target.value)
        console.log(inputRemetente);
    }

    const mensagemUsuario=(e)=>{
        setInputMensagem(e.target.value)
        console.log(inputMensagem);
    }

    const enviar=(e)=>{
        e.preventDefault() 
        const itensAtualizados=[...itens,{remetente:inputRemetente, mensagem:inputMensagem}]
        setItens(itensAtualizados)
        setInputRemetente("")
        setInputMensagem("")
        
    }
    
    return(
       <MainContainer>
        <MainBarraEsquerda></MainBarraEsquerda>
        <MainBarraCentral>
            <input type='text' required placeholder='Usuário' value={inputRemetente} onChange={nomeUsuario}></input>
            <input size={60} type='text'required placeholder='Mensagem' value={inputMensagem} onChange={mensagemUsuario}></input>            
            <button onClick={enviar}>Enviar Mensagem</button>
        </MainBarraCentral>
            <MainChat>
                {chat}
            </MainChat>



        <MainBarraDireita></MainBarraDireita>
       </MainContainer> 
    )
}