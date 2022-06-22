import React,{useState} from 'react'
import { Container , Wrapper} from './style.js'
import ProductCard from '../ProductCard/index'

export const Body = () => {
  return (
    <Container>
      
        <Wrapper><ProductCard/></Wrapper>
        <Wrapper><ProductCard/></Wrapper>
        <Wrapper><ProductCard/></Wrapper>
        <Wrapper><ProductCard/></Wrapper>
       
    </Container>
  )
}
export default Body
  