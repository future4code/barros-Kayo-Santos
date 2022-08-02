import React, {useState, useEffect} from "react";
import axios from 'axios';
import { List } from "./style";


function UsersList(props) {


    //UserEffects

    useEffect (() => {
        getAllUsers()
      }, [])


    // states Users

    const [users, setUsers] = useState([])

    const getAllUsers = () => {

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "kayo-ceshar-barros"
            }
        })
        .then((response) => {
            setUsers(response.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }



// Deleting

const deleting = (usuarioId) => {

    const mensagem = "Tem certeza que deseja excluir?"

    if(window.confirm(mensagem)) {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, {
            headers: {
                Authorization: "kayo-ceshar-barros"
            }
        })
        .then((response) => {
            getAllUsers()
            alert("Usuário excluído")
        })
        .catch((error) => {
            alert("Ocorreu um erro")
        })
    } 

    else {
        return getAllUsers()
    }
}




   //Mapping users 


    const listUsers = users.map((user) => {
        return (
            <li key={user.id}>
                <b>{user.name}</b>                
                <button onClick={() => {deleting(user.id)}}>Remover</button>
            </li>
        )
    })

    

    

    

    // button Home

    const home = () => {
        props.estado("Registration")
    }

    return (<div>
        <List>
            <h1>Usuários:</h1>
            {listUsers}            
            <button onClick={home}>Início</button>
        </List>        
        </div>
    )
}


export default UsersList