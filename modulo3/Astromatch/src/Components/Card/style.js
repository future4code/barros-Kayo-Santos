import styled from "styled-components"





export const Container = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #f0f0f0;
color: #10182f;
/* border: solid 1px; */
border-radius: 0px 20px 0px 20px;
/* box-shadow:  #000 2px 2px 1px; */
box-shadow: 0 4px 4px -2px #989898;
-moz-box-shadow: 0 4px 4px -2px #989898;
-webkit-box-shadow:0 4px 4px -2px #989898;

border: 1px solid #e0e0e0;
width: 780px;
height: 100%;
margin-left: 400px;
margin-top: 0;

`

export const BotõesTopo = styled.div`
display: flex;
flex-direction: row;
align-items:center ;
justify-content: space-between;
width: 740px;
button{
    border: none;
}

p{
    font-weight: bold;
}

`

export const BotõesFundo = styled.div`
display: flex;
flex-direction: row;
align-items:center ;
justify-content: space-between;
width: 100px;
button{
    border: none;
    margin-bottom: 20px;
}
`

export const SpanUm = styled.span`
color: #FF0072;

`

export const SpanDois = styled.span`
color: #FF7F47;

`

export const Conteudo = styled.div`

img{
    width: 300px;
    height: 300px;
}

`

export const Textos = styled.div`

h2, h4{
  font-size  : 15px ;
}

`