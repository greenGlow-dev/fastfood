
import styled from "styled-components"


import { NavLink } from 'react-router-dom'

export const Container =styled.div`
display: flex;
flex-direction:column;
width:300px;
height:100vh;
padding:28px 0 40px 0; /// tepasiga:28px yonga 0 pastiga 40px yonga 0;
border:2px solid red;
`;

export const LogoWrapper = styled.div`
display:flex;
align-items:center;
height:100px;
margin-bottom:64px;
padding:0 24px;


`;
LogoWrapper.Img = styled.img`
width:70px;
height:70px;
border-radius:50%;
margin-right:20px;
`;



export const TextWrap = styled.div`
display:flex;
flex-direction:column;
font-weight:bold;
`;

TextWrap.Title = styled.div`
font-family: SFProDisplay bold;
font-weight: 900;
font-size: 16px;
line-height: 19px;
color: #2D3A45;
`;

TextWrap.Desc = styled.div`
font-size: 14px;
line-height: 14px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.5;
`;

 export const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
//  background-color:blue;
 `

 export const Link = styled(NavLink)`
 display:flex;
 align-items:center;
 font-weight: 400;
 font-size: 15px;
 line-height: 18px;
 color: #2D3A45;
 text-decoration:none;


 .icon{
     padding-right:10px;
     width:34px;
     height:34px;
     padding:10px;
     background:#f6f6f6;
     border-radius:6px; 
     margin-right:10px; 
 }
 `;

 export const Item = styled.div`
 display:flex;
 align-items:center;
 margin:0 24px 20px 0;
 heifht: 48px;
 padding-left:20px;
//  background-color:#e5e5e5;
.Active{
  background-color:red;
}
 `

 export const Icon  = styled.img`
width:16px;
height:16px;
padding:10px;
background-color:#f6f6f6;
  `



