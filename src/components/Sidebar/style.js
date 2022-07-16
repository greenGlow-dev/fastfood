import styled from "styled-components"

import { NavLink } from 'react-router-dom'

export const Container = styled.div`
display: flex;
flex-direction:column;
height:100vh;
padding:28px 0 40px 0; /// tepasiga:28px yonga 0 pastiga 40px yonga 0;
background-color:white;
`;

export const LogoWrapper = styled.div`
display:flex;
align-items:center;
height:100px;
margin-bottom:64px;
padding:0 24px;
@media(max-width:1300px){
  margin-bottom:54px;
}


`;
LogoWrapper.Img = styled.img`
width:70px;
height:70px;
border-radius:50%;
margin-right:20px;
animation-name: spin;
animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
@keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}
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
@media(max-width:1300px){
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
}
`;

TextWrap.Desc = styled.div`
font-size: 14px;
line-height: 14px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.5;

@media(max-width:1300px){
  font-size: 12px;
  line-height: 12px;
}


`;

export const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 margin-left:12px;
 `

export const Link = styled(NavLink)`
 display:flex;
 align-items:center;
 justify-content: center;
 font-weight: 400;
 font-size: 15px;
 line-height: 18px;
 color: #2D3A45;
 text-decoration:none;
 margin:0 24px 20px 0;
 height: 48px;
 padding-right:120px;
 padding-left:20px;
 background: ${({ active }) => active && '#bf0000;'};
 color: ${({ active }) => active && 'white;'};
 border-radius: 0px 6px 6px 0px;

 @media(max-width:1300px){
  font-weight: 300;
  font-size: 12px;
 line-height: 15px;
 padding-right:100px;
 padding-left:15px;
 margin:0 14px 12px 0;
}

 .icon{
     padding-right:10px;
     float:left;
     width:34px;
     height:34px;
     padding:10px;
     background:#f6f6f6;
     border-radius:6px; 
     margin-right:10px; 

     @media(max-width:1300px){
      width:25px;
      height:25px;
      padding:8px;
      border-radius:5px; 
      margin-right:8px; 
      padding-right:7px;
    }
     
 }
 `

export const Item = styled.div`
 display:flex;
 align-items:center;
 `



export const Icon = styled.img`
width:16px;
height:16px;
padding:10px;
background-color:#f6f6f6;
@media(max-width:1300px){
  width:13px;
  height:136px;
  padding:8px;
}
  `



