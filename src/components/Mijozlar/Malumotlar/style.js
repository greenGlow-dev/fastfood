    import styled from "styled-components"

    export const All  = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:75vh;
    overflow-y: scroll;
    @media(max-width:1300px){
        height:70vh;
    }
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


    &:hover{
        transform: scale(1.01);
        box-shadow:0px 0px 10px rgba(0, 0, 0, 0.5);
    }


    @media(max-width:1300px){
        height: 60px;
        margin-top:8px;
        border-radius: 5px;
    }
    

    `

    export const Tab = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:15px;
    `
    Tab.Icon = styled.img`
    width: 50px;
    height: 50px
    `
    Tab.Information = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 175px;
    height: 20px;
    margin:25px 45px;
    font-family: 'SFProDisplay';
    font-size: 13px;
    line-height: 15px;
    color: #2D3A45;
    @media(max-width:1300px){
        font-size: 11px;
        width: 125px;
        margin:15px 35px;
    }
    color:${({green})=> green&&'green'}

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
    margin-left: 30px;

    &:hover{
        background-color: red;
    }

    @media(max-width:1300px){
        width: 40px;
        height: 40px;
    }

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
        width: 30px;
        height: 30px;
    }

    `

    export const NotVisible = styled.div`
    display:none;
    `
