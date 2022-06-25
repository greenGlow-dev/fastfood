    import styled from "styled-components"
    
    const getOrder = ({order}) =>{
        switch(order){
            case 'first': return 1;
            case 'second': return 2;
            case 'third': return 3;
            default:return 1;
        }
    }

    export const Container = styled.div`
    display:flex;
    width:100%;
    @media(max-width:1680px){
        flex-direction:column
    }
    }
    `
    export const Wrapper = styled.div`
    display:flex;
    align-items:${({align})=>'center'};
    width:300px;
    width: ${({align})=>(align ? '300px': '100%')};
    // border: ${({align})=> align && '2px solid #E5E5E5'};
    justify-content:center;
    height:80px;
    padding:22px 40px;
    background:white;
    @media(max-width:1680px){
        order: ${getOrder};
        width:100%;
        flex:1;
        display: ${({order})=> order === 'third'&& 'none'}
    }
    position:relative;
    `
    export const  Plus = styled.div`
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
    cursor:pointer
    `
    export const  Title = styled.div`
    font-family: 'SFProDisplay';
    font-size: 12px;
    line-height: 16px;
    width:83px;
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
    export const TabClone = styled(Tab)`
    display:none;
    @media(max-width:1680px){
        display:flex;
        width:100px;
        margin-left: auto;
    }
    `


    Tab.Icon = styled.img`
    display: flex;
    align-items:center;

    `
    Tab.input = styled.input`
    width: 50%;
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
        // box-shadow: 1px 0px 2px #20D472;
        border:1px solid #20D472;
    }
    `

  
    

    export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: ${({active})=> active && '#FFFFFF;'}  
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 18px;
    transition: all .28s;

    `
    Tab.Search = styled.img`
    position:absolute;
    left:69%;
    width: 17.22px;
    height: 14.22px;
    cursor:pointer;
    `

    export const  FilterWrapper1 = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #EDEFF3;
    border-radius: 28px;
    margin-top:8px;
    `
    export const  FilterWrapper2 = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 36px;
    height: 36px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 18px;
    `
    export const FilterIcon = styled.img`

    `

  
    export const NotVisible = styled.div`
    display:none;
    `
