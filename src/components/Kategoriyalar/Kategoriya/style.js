import styled from "styled-components"

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height: 46px;
background: #FFFFFF;
box-shadow: 0px 3px 1px rgba(141, 155, 168, 0.35895);
margin:25px 0;
@media(max-width:1300px){
    height: 40px;
}
`

export const Tab = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 170px;
margin:10px 75px;
padding:0 10px;
height: 23px;
font-family: 'SFProDisplay';
font-size: 15px;
font-weight:bold;
line-height: 13px;
text-transform: uppercase;
color: #2D3A45;
border-left: 2px solid #D6DADE;
border-left: ${({noborder})=> noborder&&'0px solid #D6DADE;'};

@media(max-width:1300px){
    font-size: 11px;
}

`