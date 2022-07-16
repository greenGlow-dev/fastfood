import React,{useState, useContext} from 'react'
import { Container , Wrapper} from './style.js'
import ProductCard from '../ProductCard/index'
import ToggleCard from '../ToggleCard/index.jsx'
import UserContext from '../../../context/UserContext.js'

export const Body = () => {

  const{settoggleCard, usetoggleCard} = useContext(UserContext);

  return (
    <Container>
      
        <Wrapper  falseTrue = {!usetoggleCard}><ProductCard/></Wrapper>
        <Wrapper  falseTrue = {!usetoggleCard}><ProductCard/></Wrapper>
        <Wrapper  falseTrue = {!usetoggleCard}><ProductCard/></Wrapper>
        <Wrapper  falseTrue = {!usetoggleCard}><ProductCard/></Wrapper>

          <ToggleCard />
       
    </Container>
  )
}
export default Body
  