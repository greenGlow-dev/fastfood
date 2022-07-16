import styled from "styled-components"

const getOrder = ({ order }) => {
    switch (order) {
        case 'first': return 1;
        case 'second': return 2;
        case 'third': return 3;
        default: return 1;
    }
}

export const Container = styled.div`
display:flex;
width:99.9%;
`
export const Wrapper = styled.div`
display:flex;
background:white;
align-items:${({ align }) => 'center'};
width: ${({ buyurtma }) => buyurtma && '20%'};
width: ${({ tab }) => tab && '60%'};
width: ${({ toggle }) => toggle && '20%'};
border-right: ${({ buyurtma }) => buyurtma && '2px solid whitesmoke'};
border-left: ${({ toggle }) => toggle && '2px solid whitesmoke'};
border-left: ${({ buyurtma }) => buyurtma && '2px solid whitesmoke'};
justify-content:center;
height:80px;
padding:22px 40px;
// @media(max-width:1300px){
//     height:70px;
// }

`
export const Plus = styled.div`
display:flex;
align-items:center;
color:white;
padding:11px;
width: 36px;
height: 34px;
border-radius:50%;
background: #20D472;
font-size:20px;
font-weight:bold;
margin-right:14px;
cursor:pointer;

@media screen and (max-width:1300px){
    width: 33px;
    height: 32px;
    font-size:18px;
}

`
export const Title = styled.div`
font-family: 'SFProDisplay';
font-size: 12px;
line-height: 16px;
width:83px;
@media(max-width:1300px){
    font-size: 10px;
    line-height: 14px;
    width:73px;
}
`
export const Tab = styled.div`
display:flex;
align-items:center;
padding:6px;
justify-content:space-between;
width:100%;
text-align:center;
height: 50px;
background: #EDEFF3;
border-radius: 24px;
@media(max-width:1300px){
    height: 50px;
}

`
export const TabClone = styled(Tab)`
display:none;
@media(max-width:1680px){
    display:flex;
    width:100px;
    margin-left: auto;
}
`
Tab.Item = styled.div`
display: flex;
align-items: center;
font-family: 'SFProDisplay';
justify-content:center;
font-size: 14px;
line-height: 16px;
width: 162px;
height: 36px;
left: 563px;
top: 22px;
mix-blend-mode: normal;
width:170px;
cursor: pointer;
background:${({ active }) => active && 'white'};
box-shadow: ${({ active }) => active && '0px 2px 2px rgba(174, 176, 181, 0.314986)'};
border-radius:  18px;
transition: all .28s;

@media(max-width:1300px)
{
    font-size: 12px;
    line-height: 14px;
    width:142px;
    height: 36px;
}

`

Tab.Icon = styled.img`
display: flex;
align-items:center;

`
export const IconWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 36px;
height: 36px;
background: ${({ active }) => active && '#FFFFFF;'};  
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 18px;
transition: all .28s;
`

