import React,{useState} from "react";
import Card from "../Card/Card";
import Matchs from "../Matchs/Matchs"


function PageSelect(){
    const[home, setHome] = useState("Get")
    switch(home){
        case "Get":
            return <Card estado={setHome}/>
        case "Matchs":
            return <Matchs estado={setHome}/>
        default:
            return <Card estado={setHome}/>
    }


        

}

export default PageSelect;