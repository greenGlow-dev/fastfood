import styled from "styled-components"

export const All = styled.div`
border:1px solid red;
`

export const Container = styled.div`
display:none;
display: ${({ order }) => order && 'flex;'}
flex-direction:column;
position: absolute;
z-index:1;
width: 366px;
height: 90%;
right: 0;
top: 82px;
background: #FFFFFF;
box-shadow: 0px 20px 15px rgba(176, 177, 181, 0.551191);
padding:0px 30px;

@media(max-width:1300px){
    width: 306px;
    height: 85%;
    padding:0px 20px;
}

`




export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
padding-bottom:25px;
padding-top:25px;   
flex-direction:${({ column }) => column && 'column'};
border-bottom:${({ bottomLine }) => bottomLine && '1.3px solid #ECECEC'};    
// margin-top:${({ column }) => column && '-10px'}
@media(max-width:1300px){
    padding-bottom:20px;
    padding-top:20px; 
}
`


export const Info = styled.div`
display:flex;
align-items:center;
flex-direction:${({ order }) => order && 'column'};
padding:10px 12px;
width: 318px;
height: 93px;
left: 1024px;
top: 170px;
background: #EDEFF3;
mix-blend-mode: normal;
border-radius: 6px;


@media(max-width:1300px){
    width: 268px;
    height: 63px;
    padding:5px 9px;
    top: 100px;
}

`
Info.Wrap = styled.div`
display: flex;
justify-content:space-around;
align-items:center;
width: 100%;
height: 36px;
left: 1000px;
top: 396px;
    background: #F9FAFB;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
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
    font-size: 11px;
    line-height: 15px;
}
`
export const ItemWrap = styled.div`
display:flex;
flex-direction:column;
margin-top:12px;
padding:2px 8px;
@media(max-width:1300px){
    margin-top:2px;
padding:2px 8px;  
}
`
export const Items = styled.div`
display:flex;
justify-content:space-between;
`
Items.Item = styled.div`
font-family: 'SFProDisplay';
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
margin-top:8px;
@media(max-width:1300px){
    font-size: 11px;
    line-height: 15px;
}
`

export const IconWrapper = styled.div`
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
@media(max-width:1300px){
    width: 20px;
    height:20px;
}
`
Info.Clock = styled.div`
font-family: 'SFProDisplay';
font-size: 18px;
line-height: 16px;
color: #2D3A45;
margin-left:10px;
@media(max-width:1300px){
    font-size: 14px;
line-height: 15px;
}

`
export const Timer = styled.div`
display:flex;
align-items: center;
`

Info.User = styled.img`
width: 20px;
height:20px;
`
Info.Name = styled.div`
font-family: 'SFProDisplay';
font-size: 20px;
line-height: 20px;
letter-spacing: 0.533333px;
color: #2D3A45;
margin-left:10px;
@media(max-width:1300px){
    font-size: 15px;
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
    line-height: 14px;
}
`
Info.Total = styled.div`
font-family: 'SFProDisplay';
font-size: 11px;
line-height: 18px;
letter-spacing: 0.366667px;
color: #8D9BA8;
`
Info.Price = styled.div`
font-family: 'SFProDisplay';
font-size: 20px;
line-height: 18px;
letter-spacing: 0.666667px;
color: #2D3A45;
`
Info.PaymeIcon = styled.div`
width:14px;
height:14px;
border-radius: 50%;
background: #14E5E4;
`
Info.Payme = styled.div`
font-family: 'SFProDisplay';
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
margin-left:10px;
`
Info.Box1 = styled.div`
display:flex;
justify-content:space-between;
margin-top:1px;
`
Info.Box2 = styled.div`
display:flex;
`
Info.Remove = styled.img`
width:18px;
height: 13px;
`
export const RemoweWrapper1 = styled.div`
display:flex;
align-items:center;
justify-content: center;
width: 50px;
height: 50px;
background: #EDEFF3;
border-radius: 28px;
margin-top:8px;
`
export const RemoweWrapper2 = styled.div`
display:flex;
align-items:center;
justify-content: center;
width: 40px;
height: 40px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 20px;
@media(max-width:1300px){
    width: 30px;
height: 30px;
}
`
Info.Operator = styled.div`
font-family: 'SFProDisplay';
font-size: 15px;
line-height: 18px;
letter-spacing: 0.366667px;
color: #8D9BA8;
margin-top: 10px;
@media(max-width:1300px){
    font-size: 14px;
    line-height: 15px;
}
`
Info.OperatorName = styled.div`
font-family: 'SFProDisplay';
font-size: 18px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
@media(max-width:1300px){
    font-size: 14px;
    line-height: 15px;
}
`