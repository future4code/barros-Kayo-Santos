import React from "react";
import LastStage from "./components/LastStage";
import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";
import Stage3 from "./components/Stage3";
import { useState } from "react";
import {Botao} from "./style";

function App() {
  
  
 const[etapa,setEtapa]=useState(1)

 
let renderizaEtapa;
  switch(etapa){
    case 1:
      renderizaEtapa = <Stage1/>
      break;
    case 2:
      renderizaEtapa = <Stage2/>
      break;
    case 3:
        renderizaEtapa = <Stage3/>
        break;
    case 4:
      renderizaEtapa = <LastStage/>
      break;
    default:
      renderizaEtapa = <LastStage/>
      break;
  }
  

  function irParaProximaEtapa (){
    
    return setEtapa(etapa + 1)
  }

  return (
    <div>
      {renderizaEtapa}
      <Botao>{etapa < 4? <button onClick={irParaProximaEtapa}>Próxima Etapa</button> :  null} </Botao>          
    </div>
  );
}

export default App;
