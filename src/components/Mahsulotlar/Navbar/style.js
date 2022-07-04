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
width:100%;
 }
`
export const Wrapper = styled.div`
display:flex;
background:white;
align-items:${({ align }) => 'center'};
width: ${({ buyurtma }) => buyurtma && '22%'};
width: ${({ tab }) => tab && '60%'};
width: ${({ toggle }) => toggle && '20%'};
border-right: ${({ buyurtma }) => buyurtma && '2px solid whitesmoke'};
border-left: ${({ toggle }) => toggle && '2px solid whitesmoke'};
border-left: ${({ buyurtma }) => buyurtma && '2px solid whitesmoke'};
justify-content:center;
height:80px;
padding:22px 40px;
@media(max-width:1300px){
    height:70px;
}

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
@media(max-width:1300px){
    width: 33px;
    height: 32px;
    font-size:14px;
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

`



// Tab.Icon = styled.img`
// display: flex;
// align-items:center;

// `
export const IconWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 36px;
height: 36px;
background: ${({ active }) => active && '#FFFFFF;'}  
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 18px;
transition: all .28s;

`


Tab.input = styled.input`
width: 90%;
border:none;
display:flex;
align-items:center;
padding-let:20px;
padding:6px;
height: 50px;
background: #EDEFF3;
border-radius: 24px;
outline: none;

&:focus {
    outline: none;
    border:1px solid #20D472;
}
`


Tab.Search = styled.img`
position:absolute;
left:77%;
width: 17.22px;
height: 14.22px;
cursor:pointer;

@media(max-width:1300px){
    left:75%;
}

`

export const FilterWrapper1 = styled.div`
display:flex;
align-items:center;
justify-content: center;
width: 50px;
height: 50px;
background: #EDEFF3;
border-radius: 28px;
margin-top:8px;
cursor:pointer;

@media(max-width:1300px){
    width: 45px;
    height: 45px;
}

`
export const FilterWrapper2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 36px;
height: 36px;
background: white;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 18px;

@media(max-width:1300px){
    width: 34px;
    height: 34px;
}

`
export const FilterIcon = styled.img`

`

