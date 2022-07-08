import React from 'react'
import { useState } from 'react'
import Post from './components/Post';

import{MainContainer,Lista,PostHeader,ImagemPost,PostContainer} from "./style"



function App() {
  
  const [itens,setItens]=useState([
    {nomeUsuario:'paulinha', fotoUsuario: 'https://picsum.photos/id/721/50/50', fotoPost:'https://picsum.photos/id/201/150'},
    {nomeUsuario:'fabi', fotoUsuario: 'https://picsum.photos/id/722/50/51', fotoPost:'https://picsum.photos/id/202/150'},
    {nomeUsuario:'kayn', fotoUsuario: 'https://picsum.photos/id/723/50/52', fotoPost:'https://picsum.photos/id/203/150'}
  ])

  const itensPostagem=itens.map((item,index)=>{
    return(
      <PostContainer><Lista key={index}>
        <PostHeader>
          <img className = 'UserPhoto' src={item.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{item.nomeUsuario}</p>
        </PostHeader>
        <ImagemPost src={item.fotoPost} alt={'Imagem do post'}/>
        </Lista>
        </PostContainer>            
    )
  })

  const [inputName, setInputName]=useState("")
  const [inputFotoUsuario, setInputFotoUsuario]=useState("")
  const [inputPostagem, setInputPostagem]=useState("")
  
  const mudaNome=(e)=>{
    setInputName(e.target.value);
    console.log(inputName);
  }
  
  const mudaFotoUsuario=(e)=>{
    setInputFotoUsuario(e.target.value)
    console.log(inputFotoUsuario);
  }
  
  const mudaPostagem=(e)=>{
    setInputPostagem(e.target.value)
    console.log(inputPostagem);
  }
  
  const adicionar=(e)=>{
    e.preventDefault() 
    const itensAtualizados=[...itens,{nomeUsuario:inputName,fotoUsuario:'https://picsum.photos/id/722/50/51', fotoPost:'https://picsum.photos/id/202/150'}]
    setItens(itensAtualizados)  
    setInputName("")
    setInputFotoUsuario("")
    setInputPostagem("")
  }
  

return(
  <MainContainer>

            <form>
                <input type='text' required placeholder='Nome' value={inputName} onChange={mudaNome}/>
                <input type='text'required placeholder='Foto do Perfil' value={inputFotoUsuario} onChange={mudaFotoUsuario}/>
                <input type='text'required placeholder='Postagem' value={inputPostagem} onChange={mudaPostagem}/>
                <button onClick={adicionar}>Adicionar</button>
            </form>
           
            {itensPostagem}    
                     
                     

</MainContainer>

  

);

}

export default App;