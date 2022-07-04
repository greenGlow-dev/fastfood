import React from 'react'
import {Container, Tab} from './style'

export const Kategoriya = () => {
  return (
    <Container>

        <Tab noborder = {true} >Maxsulot</Tab>
        <Tab>Kategoriya</Tab>
        <Tab>Qo'shimcha</Tab>
        <Tab>Narxi</Tab>
        <Tab>Action</Tab>
        
    </Container>
  )
}

export default Kategoriya
