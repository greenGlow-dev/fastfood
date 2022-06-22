    import styled from "styled-components"

    export const Container = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 92%;
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
    width: 85px;
    height: 20px;
    margin:25px 90px;
    font-family: 'SFProDisplay';
    font-size: 13px;
    line-height: 15px;
    color: #2D3A45;

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

    `

    export const NotVisible = styled.div`
    display:none;
    `
