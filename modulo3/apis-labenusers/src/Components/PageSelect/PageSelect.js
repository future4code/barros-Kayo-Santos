import React, { useState } from "react";
import Registration from "../Registration/Registration";
import UsersList from "../UsersList/UsersList";

function PageSelect() {

    const [inicial, setInicial] = useState("Cadastro")

    switch(inicial) {
        case "Registration":
            return <Registration estado={setInicial}/>
        case "User":
            return <UsersList estado={setInicial}/>
        default:
            return <Registration estado={setInicial}/>
    }

}

export default PageSelect 