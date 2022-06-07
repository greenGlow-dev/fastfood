import React from 'react'
import Navbar from './Navbar'
import Kategoriya from './Kategoriya'
import { Container } from './style';
import Malumotlar from './Malumotlar'




export const Filial = () => {

  return (
    <Container>
        <Navbar/>
        <Kategoriya/>
        <Malumotlar/>
    </Container>
  )
  
}
export default Filial;