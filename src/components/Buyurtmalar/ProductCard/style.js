import styled from "styled-components"


export const Container = styled.div`
display:flex;
flex-direction:column;
width:250px;
height: 400px;
background: #FFFFFF;
box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
border-radius: 6px;
padding:0px 20px 20px 20px;
// border:1px solid black;
@media(max-width:1300px){
    width:230px;
    height: 400px;
}


`


export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
padding-bottom:20px;
padding-top:20px;
border-bottom: 1px solid #d9d7d7;
flex-direction:${({column}) => column && 'column'};
margin-top:${({column}) => column && '-10px'}
`


export const Info = styled.div`
display:flex;
 justify-content:space-between;
 margin-top:${({top})=> top && '20px'};
 flex-direction:${({column})=> column&&'column'}
`
Info.OrderId = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 60px;
height: 30px;
background: #20D472;
font-family: 'SFProDisplay';
font-size: 14px;
line-height: 16px;
letter-spacing: 0.466667px;
border-radius: 18px;
color:white;
@media(max-width:1300px){
    width: 50px;
    height: 20px;
    font-size: 12px;
}
`
export const IconWrapper  = styled.div`
display:flex;
justify-content: center;
width: 35px;
height: 35px;
background: #EDEFF3;
border-radius: 18px;
margin-left:15px;
`

Info.Save = styled.img`
width: 14px;
`
Info.Time = styled.img`
width: 24px;
height:24px;
`
Info.Clock = styled.div`
font-family: 'SFProDisplay';
font-size: 18px;
line-height: 16px;
color: #2D3A45;
margin-left:10px;
`
export const Timer = styled.div`
display:flex;
align-items: center;
`

Info.User = styled.img`
width: 24px;
height:24px;
`
Info.Name = styled.div`
font-family: 'SFProDisplay';
font-size: 20px;
line-height: 18px;
letter-spacing: 0.533333px;
color: #2D3A45;
@media(max-width:1300px){
    font-size: 17px;
    line-height: 15px;
}
`
Info.Number = styled.div`
font-family: 'SFProDisplay';
font-size: 16px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;
padding:10px;
mix-blend-mode: normal;
opacity: 0.7;
@media(max-width:1300px){
    font-size: 14px;
    line-height: 15px;
}
`
Info.Total = styled.div`
font-family: 'SFProDisplay';
font-size: 11px;
line-height: 18px;
letter-spacing: 0.366667px;
color: #8D9BA8;
`
Info.Price =styled.div`
font-family: 'SFProDisplay';
font-size: 20px;
line-height: 18px;
letter-spacing: 0.666667px;
color: #2D3A45;
`
Info.PaymeIcon =styled.div`
width:14px;
height:14px;
border-radius: 50%;
background: #14E5E4;
`
Info.Payme =styled.div`
font-family: 'SFProDisplay';
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
margin-left:10px;
`
Info.Box1 =styled.div`
display:flex;
justify-content:space-between;
margin-top:1px;
`
Info.Box2 =styled.div`
display:flex;
`
Info.Remove =styled.img`
width:18px;
height: 13px;
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
`
Info.Operator =styled.div`
font-family: 'SFProDisplay';
font-size: 15px;
line-height: 18px;
letter-spacing: 0.366667px;
color: #8D9BA8;
margin-top: 10px;
`
Info.OperatorName =styled.div`
font-family: 'SFProDisplay';
font-size: 18px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
`