import React from "react";
import{CabecalhoHeader,CabecalhoImagem,CabecalhoTitulo} from "../style"
import Imagem from "../img/download.png";

export default function Cabecalho() {
    return(
        <CabecalhoHeader>
            <CabecalhoImagem src={Imagem}/>
            <CabecalhoTitulo>LabZap</CabecalhoTitulo>
        </CabecalhoHeader>
    )
}