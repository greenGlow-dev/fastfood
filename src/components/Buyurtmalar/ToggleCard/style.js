import styled from "styled-components";


export const Container = styled.div`
display:flex;
flex-direction:column;
position:absolute;
display:${({falseTrue})=>falseTrue ? 'flex;':'none;'};
top:80px;
`

export const Wrapper = styled.div`
display: flex;
width: 964px;
height: 150px;
left: 339px;
top: 110px;
top: 110px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
margin:10px 10px;
padding: 22px 38px;
`

export const Number  = styled.div`
display:flex;
align-items:center;
justify-content: center;
color:white;
width: 90px;
height: 36px;
background: #20D472;
border-radius: 18px;
font-family: 'SFProDisplay';
font-size: 20px;
line-height: 16px;
/* identical to box height, or 80% */

letter-spacing: 0.666667px;

color: #FFFFFF;
`
export const SaveBackground  = styled.div`
display:flex;
align-items:center;
justify-content: center;
width: 36px;
height: 36px;
background: #EDEFF3;
border-radius: 18px;
margin-left: 20px;
`
export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 25%;
border-right: 2px solid #EDEFF3;
`
export const Top = styled.div`

display: flex;
width: 100%;

`
export const Bottom = styled.div`
display: flex;
width: 100%;
margin-top: 20px;
`
export const Time = styled.div`
font-family: 'SFProDisplay';
font-size: 20px;
line-height: 16px;
color: #2D3A45;
margin-left: 20px;
`
