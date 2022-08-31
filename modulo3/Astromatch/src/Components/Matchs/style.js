import styled from "styled-components"


export const Container = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: white;
color: #10182f;
/* border: solid 1px; */
border-radius: 0px 20px 0px 20px;
/* box-shadow:  #000 2px 2px 1px; */
box-shadow: 0 4px 4px -2px #989898;
-moz-box-shadow: 0 4px 4px -2px #989898;
-webkit-box-shadow:0 4px 4px -2px #989898;
background-color: #f0f0f0;
border: 1px solid #e0e0e0;
width: 780px;
height: 100%;
margin-left: 400px;
margin-top: 150px;

`

export const BotõesTopo = styled.div`
display: flex;
flex-direction: row;
align-items:center ;
width: 740px;
gap: 280px;

button{
    border: none;
}
p{
    font-weight: bold;
}


`

export const BotõesFundo = styled.div`
display: flex;
width: 740px;
button{
    
    margin-bottom: 20px;
    border: none;
}
`

export const ContainerMatchs = styled.div`
display: flex;
width: 740px;
flex-direction: column;
h3{
    color: black
}
ul{
    list-style: none;
    font-weight: bold;
}

`

export const SpanUm = styled.span`
color: #FF0072;

`

export const SpanDois = styled.span`
color: #FF7F47;
`


export const ImagemP = styled.img`
border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`
export const TextosMatch = styled.div`
display: flex;
align-items: center;
padding-bottom: 15px;
`
