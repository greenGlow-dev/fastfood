import React from 'react'
import Navbar from './Navbar'
import Kategoriya from './Kategoriya'
import { Container } from './style';
import Malumotlar from './Malumotlar'




export const KategoriyaComponent = () => {

  return (
    <Container>
        <Navbar/>
        <Kategoriya/>
        <Malumotlar/>
    </Container>
  )
  
}
export default KategoriyaComponent;