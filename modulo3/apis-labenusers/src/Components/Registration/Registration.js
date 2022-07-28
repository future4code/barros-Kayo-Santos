import React, {useState} from "react";
import axios from 'axios';
import { PageRegistration } from './style';

function Registration(props) {

// states
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")

//events onClick

const change = () => {
    props.estado("User")
    }
    const newUser = (event) => {
    setInputName(event.target.value)
    }

    const newEmail = (event) => {
    setInputEmail(event.target.value)
    }

    const addInfo = (event) => {
    event.preventDefault()
    createUsers()
    setInputEmail("")
    setInputName("")
    }


// creating users

    const createUsers = () => {

    const body = {
        "name": inputName,
        "email": inputEmail
    }
    axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
    body, 
    {
        headers: {
        Authorization: "kayo-ceshar-barros"
        }
    })
    .then((response) => {
        alert("Usuário Cadastrado")
    })
    .catch((error) => {
        alert("Ops! Informações incompletas :(")
    })
    }

    

    return (
    <PageRegistration>
        <form>
        <h1>Crie sua conta:</h1>
        <label>Informe seu nome:</label>
        <input placeholder="Nome" type="text" value={inputName} onChange={newUser}/>
        <label>Informe o seu melhor E-mail:</label>
        <input placeholder="nome@email.com" type="email" value={inputEmail} onChange={newEmail}/>
        <button onClick={addInfo}>Enviar</button>
        </form>
        <br/>
        <button onClick={change}>Usuários Cadastrados</button>
    </PageRegistration>
    )
}

export default Registration;