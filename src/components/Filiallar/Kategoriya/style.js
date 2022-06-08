import styled from "styled-components"

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:90%;
height: 46px;
background: #FFFFFF;
box-shadow: 0px 3px 1px rgba(141, 155, 168, 0.35895);
margin:25px 0;
`

export const Tab = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100px;
margin:15px 75px;
border-left:1px solid #8D9BA8;
height: 23px;
font-family: 'SFProDisplay';
font-size: 14px;
font-weight: bold;
line-height: 13px;
text-transform: uppercase;
color: #2D3A45;
border-left: ${({noborder})=> noborder&&'0px solid #D6DADE;'}

`