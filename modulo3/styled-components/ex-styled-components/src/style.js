import styled from "styled-components";

export const CabecalhoHeader=styled.header`
display: flex;
align-items: center;
justify-content: center;
margin-left: 1px;
`
export const CabecalhoImagem=styled.img`
width: 40px;
height: 40px;
`
export const CabecalhoTitulo=styled.h1`
width: 15px;
`

export const MainContainer=styled.div`

display: flex;
height: 470px;


`

export const MainBarraEsquerda=styled.aside`
background-color: #ffa500;
width: 12%;



    
`

export const MainBarraCentral=styled.main`
width: 76%;
form{
    position: fixed;
    bottom: 25px;
    display: flex;
    gap: 5px;
    margin-left: 15px;
}

`

export const MainBarraDireita=styled.aside`
background-color: #ffa500;
width: 12%;


`

export const RodapeFooter=styled.footer`
background-color: gray;

width: 100%;
padding: 0;
height: 20px;
position: fixed;
bottom: 0;


p{
    text-align: center;
   margin-top: 0;
}



`
