import styled from "styled-components"

export const All = styled.div`
width:100%;
height:80vh;
display:flex;
flex-direction:column;      
align-items:center;
overflow-y: scroll;
`

export const Container = styled.div`
position: relative;
display:flex;
align-items:center;
justify-content:center;
width: 95%;
height: 60px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
margin-top:10px;
transition:0.2s linear;



padding:0 30px;

@media(max-width:1300px){
    padding:0 10px;
    height: 50px;
    margin-top:8px;
}

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
Tab.Icon = styled.img`
width: 45px;
height: 45px
@media(max-width:1300px){
    width: 40px;
    height: 40px
}

`
Tab.Information = styled.div`
width: 100px;
height: 20px;
margin:25px 90px;
font-family: 'SFProDisplay';
font-size: 13px;
line-height: 15px;
color: #2D3A45;
@media(max-width:1300px){
    width: 80px;
    font-size: 11px;
    margin:15px 60px;
}

`

export const  RemoweWrapper1 = styled.div`
display:flex;
align-items:center;
justify-content: center;
width: 80px;
height: 42px;
background: #EDEFF3;
border-radius: 28px;
margin-top:8px;
margin-left: 10px;
@media(max-width:1300px){
    width: 40px;
    height: 37px;
}

&:hover{
    background-color: red;
}
`
export const  RemoweWrapper2 = styled.div`
display:flex;
align-items:center;
justify-content: center;
width: 38px;
height: 38px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 20px;
cursor: pointer;

@media(max-width:1300px){
    width: 30px;
    height: 30px;
}


`


