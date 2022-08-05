import React,{useState, useEffect} from "react";
import axios from "axios";
import {Container, BotõesTopo, BotõesFundo,SpanUm, SpanDois, Conteudo, Textos} from '../Card/style'
import combinou from '../../img/match.png'
import limpar from '../../img/dust.png'
import like from '../../img/like.png'
import dislike from '../../img/dislike.png'
function Card (props){
// get perfil

const [perfil,setPerfil]= useState([]);

useEffect(() => {
    getProfileToChoose();
  }, []);


  





  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
      )
      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

//choose person
const [choice, setChoice] = useState(undefined)


const ChoosePerson = (escolha)=>{
    const body = {
        "id": perfil.id,
        "choice": choice 
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
        body
      )
      .then((response) => {
        if (body.choice && response.data.isMatch) alert("Deu Match");
        setChoice(escolha)
      })
      .catch((error) => {
        console.log(error.response.data);
      })
  }

  //clear

  const clearProfile = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
      )
      .then((response) => {
        window.alert("Matches resetados!")
        getProfileToChoose()
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

//teste








  //botões

  const onClickLike = () => {
    getProfileToChoose()
    ChoosePerson(true)
  }

  const onClickDislike = () => {
    getProfileToChoose()
    ChoosePerson(false)
  }

  const change = () => {
    props.estado("Matchs")
    }
  
    const condicional = perfil ? (<Container>
      <BotõesTopo>
          <button onClick={change}><img src={combinou}/></button>
          <p><SpanUm>Astro</SpanUm><SpanDois>match</SpanDois></p>                
          <button onClick={() => {clearProfile();}}><img src={limpar}/></button>
      </BotõesTopo>
      
      <Conteudo>
          <img src= {perfil.photo}/>
      </Conteudo>
      <Textos>
          <h2>{perfil.name},{perfil.age}</h2>
          <h4>{perfil.bio}</h4>
      </Textos>
      <BotõesFundo>
          <button onClick={onClickLike}><img src={like}/></button>
          <button onClick={onClickDislike}><img src={dislike}/></button>
      </BotõesFundo>

    </Container>):(<Container><h3>Acabaram os Perfis! Clique no botão para resetar</h3><button onClick={() => {clearProfile();}}><img src={limpar}/></button></Container>);

return <div>{condicional}</div>
    
};

export default Card;