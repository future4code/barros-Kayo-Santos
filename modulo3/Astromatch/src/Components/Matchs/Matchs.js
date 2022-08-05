import React,{useState, useEffect} from "react";
import axios from "axios";
import voltar from '../../img/de-volta.png'
import {Container,TextosMatch, BotõesTopo, BotõesFundo, ContainerMatchs, SpanUm,SpanDois,ImagemP} from '../Matchs/style'
import limpar from '../../img/dust.png'


function Matchs (props){
    const [lista, setLista] = useState([])
    


    const GetMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
        .then((response) => {
            const listaPerfis = response.data.matches

            const definirLista = listaPerfis.map((perfil) => {
                return <li key={perfil.id}> 
                <TextosMatch><ImagemP src={perfil.photo} alt={perfil.photo_alt}></ImagemP><span>{perfil.name}</span></TextosMatch> 
                       </li>
            })

            setLista(definirLista)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }
    
    useEffect (() => {
        GetMatches()
      }, [])

      const clearProfile = () => {
        axios
          .put(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
          )
          .then((response) => {
            window.alert("Matches resetados com sucesso!")
            GetMatches();
            
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
      
      
      
    
      const change = () => {
        props.estado("Get")
        }
         
    
    return (
        <Container>
            <BotõesTopo>
            <button onClick={change}><img src={voltar}/></button>  
            <p><SpanUm>Astro</SpanUm><SpanDois>match</SpanDois></p>
            
            </BotõesTopo>
            <ContainerMatchs>
            <h3>Matchs</h3>
            <ul>
                {lista}
            </ul>
            </ContainerMatchs>

            <BotõesFundo>
            <button onClick={clearProfile}><img src={limpar}/></button>
            </BotõesFundo>
        </Container>
        
    )
}

export default Matchs;