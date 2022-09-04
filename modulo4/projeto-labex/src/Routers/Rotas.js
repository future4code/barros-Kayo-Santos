import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage } from "../Pages/LoginPage";
import NewTripPage from "../Pages/NewTripPage";
import { TripsPage } from "../Pages/TripsPage";
import UserPage from "../Pages/UserPage";
const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/user" element={<UserPage/>}/>
                <Route path="/user/newtrip" element={<NewTripPage/>}/>
                <Route path="/user/trips" element={<TripsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
 export default Rotas;