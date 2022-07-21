import styled from "styled-components";

export const CabecalhoHeader=styled.header`
display: flex;
align-items: center;
justify-content: center;
`
export const CabecalhoImagem=styled.img`
width: 40px;
height: 40px;
`
export const CabecalhoTitulo=styled.h1`
width: 15px;
`

export const MainContainer=styled.body`
display: flex;
width: 100%;

`

export const MainBarraEsquerda=styled.div`
background-color: #ffa500;
width: 13%;
height: 100%;
position: fixed;
left: 0;
   
`

export const MainBarraCentral=styled.form`
align-items: center;
display: flex;
width: 100%;
margin-left: 230px;
position: fixed;
bottom: 50px;
gap: 15px;

`

export const MainBarraDireita=styled.div`
background-color: #ffa500;
width: 13%;
position: fixed;
right: 0;
height: 100%;

`
export const MainChat=styled.div`

    margin-left: 166px;
    width: 947px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    

`
export const MainMensagens=styled.li`

    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; 
    padding-bottom:5px ;
    
    
    
    span{
        padding-left: 5px;
        background-color: #f8b14e;
        
    }

`


export const RodapeFooter=styled.footer`
background-color: gray;
position: fixed;
bottom: 0px;
width: 100%;
padding: 0;
height: 20px;


p{
    text-align: center;
   margin-top: 0;
}

`
