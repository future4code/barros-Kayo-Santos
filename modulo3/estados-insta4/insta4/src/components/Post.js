import React, {useState} from 'react'
import{PostHeader,PostFooter,PostContainer,Lista,ImagemPost} from "../style"



import {IconeComContador} from './IconeComContador'
import iconeCoracaoBranco from '../img/favorite-white.svg'
import iconeCoracaoPreto from '../img/favorite.svg'
import iconeComentario from '../img/comment_icon.svg'
import {SecaoComentario} from './SecaoComentario'



function Post(props){
 
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  

  const onClickCurtida = () => {
    setCurtido(!curtido);

    if (curtido) {
      setnumeroCurtidas(numeroCurtidas - 1);
    } else {
      setnumeroCurtidas(numeroCurtidas + 1);
    }
        
     
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
      
    }
    
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }

  
  
  //   const arrayPost = [props.lista];

  // const arrayLista = arrayPost.map((item,index) => {
  //   return (
  //     <Lista key={index}>
  //     <PostHeader>
  //       <img className = 'UserPhoto' src={item.fotoUsuario} alt={'Imagem do usuario'}/>
  //       <p>{item.nomeUsuario}</p>
  //     </PostHeader>
  //     <ImagemPost src={item.fotoPost} alt={'Imagem do post'}/>
  //     </Lista>
  //   );
    
  // });
  
  


  return(
      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
        {componenteComentario}
      </PostFooter>
      
      
  )
}


export default Post