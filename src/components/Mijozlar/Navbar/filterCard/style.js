import styled from "styled-components"

export const Container = styled.div`
position: absolute;
z-index:1;
width: 383px;
height: 247px;
background: #FFFFFF;
box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
border-radius: 6px;
padding:23px 30px;
left:70%;
top:10%;
display:none;
display:${({order1})=> order1 ? 'inline-block;' : 'none;'}
`
export const CategoryText = styled.div`
height: 18px;
left: 0%;
top: calc(50% - 18px/2 - 24.5px);
font-family: 'SFProDisplay';
font-size: 12px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.6;
`
export const Category = styled.div`
display: flex;
align-items:center;
margin-top:5px;
width:300px;
height:40px;
border: 1px solid #EDEFF3;
border-radius: 6px;
font-size:12px;
padding:0px 10px; 
`
export const Check = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
margin:5px 0px;
`
Check.InputRadio = styled.input`
border: 1px solid #EDEFF3;
border-radius: 2px;
width: 16px;
height: 16px;
.radio{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
`
Check.InputLabel = styled.label`
display: flex;
margin:8px 0px;

`
Check.Span = styled.span`
margin:0px 8px;
font-family: 'SFProDisplay';
font-size: 13px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;

`

export const Form = styled.form`

`

export const Label = styled.label`
height: 18px;
left: 0%;
top: calc(50% - 18px/2 - 24.5px);
font-family: 'SFProDisplay';
font-size: 12px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.6;
`
export const Select = styled.select`
display: flex;
align-items:center;
margin-top:5px;
width:300px;
height:40px;
border: 1px solid #EDEFF3;
border-radius: 6px;
font-size:12px;
padding:0px 10px; 
outline:none;
transtion:06s;
`
export const Option = styled.option`
height: 28px;
left: 0%;
top: calc(50% - 18px/2 - 24.5px);
font-family: 'SFProDisplay';
font-size: 12px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.6;
transition: .9s;    
`
