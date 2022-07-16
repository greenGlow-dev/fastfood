import styled from "styled-components"

export const Container =styled.div`
max-width:1600px;
margin:0 auto;
display: flex;
background-color:black;
background-color:#E5E5E5;
@media(max-width:1200px){
    display:none;
}

`;


export const Body =styled.div`
display: flex;
`;

export const Sorry =styled.div`
display: none;
@media(max-width:1200px){
   position: absolute;
   display: block;
   top:34%;
   left:34%;
    font-size: 22px;
    width: 400px;
    height:400px;

}

`;