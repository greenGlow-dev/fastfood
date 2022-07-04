import styled from "styled-components"

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height: 46px;
background: #FFFFFF;
box-shadow: 0px 3px 1px rgba(141, 155, 168, 0.35895);
margin:17px 0;
`

export const Tab = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 120px;
margin:10px 75px;
padding-left:4px;
height: 23px;
font-weight:bold;
border-left: 2px solid #EDEFF3;
border-left: ${({noborder})=>noborder &&'none;'};
padding-left: ${({noborder})=>noborder &&'0px;'};
font-family: 'SFProDisplay';
font-size: 15px;
line-height: 13px;
text-transform: uppercase;
color: #2D3A45;
@media(max-width:1300px){
    font-size: 11px;
    border-left: ${({noborder})=>noborder &&'none;'};
padding-left: ${({noborder})=>noborder &&'0px;'};
}

`