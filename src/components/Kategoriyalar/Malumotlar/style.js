import styled from "styled-components"

export const All = styled.div`
width:100%;
height:80vh;
display:flex;
flex-direction:column;      
align-items:center;
`

export const Container = styled.div`
position: relative;
display:flex;
align-items:center;
justify-content:center;
width: 95%;
padding-right:40px;
height: 60px;   
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
margin-top:10px;
transition:0.2s linear;

@media(max-width:1300px){
    height: 50px;  
};

&:hover{
    transform: scale(1.01);
    box-shadow:0px 0px 10px rgba(0, 0, 0, 0.5);
}

`

export const Tab = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

Tab.Information = styled.div`
width: 150px;
height: 20px;
margin:25px 80px;
font-family: 'SFProDisplay';
font-size: 15px;
line-height: 15px;
color: #2D3A45;

@media(max-width:1300px){
    font-size: 11px;
};

`

export const  RemoweWrapper1 = styled.div`
display:flex;
align-items:center;
justify-content: center;
width: 50px;
height: 50px;
background: #EDEFF3;
border-radius: 28px;
margin-top:8px;
margin-left: 20px;

&:hover{
    background-color: red;
}

@media(max-width:1300px){
    width: 50px;
    height: 35px;
};


`
export const  RemoweWrapper2 = styled.div`
display:flex;
align-items:center;
justify-content: center;
width: 40px;
height: 40px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 20px;
cursor: pointer;
@media(max-width:1300px){
    width: 32px;
    height: 30px;
};
`


