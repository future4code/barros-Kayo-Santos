import styled from "styled-components";

export const List = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    li {
        display: flex;
        justify-content: center;
        gap: 5px;
        list-style: none;
        margin: 5px;
    }
    button{
margin-top: 5px;
background: #e8685d;

color: #fff;

border: 1px solid #eee;

border-radius: 20px;

box-shadow: 5px 5px 5px #eee;

text-shadow:none; 
}
button:hover {

background: red;

color: #fff;

border: 1px solid #eee;

border-radius: 20px;

box-shadow: 5px 5px 5px #eee;

text-shadow:none;

}
` 