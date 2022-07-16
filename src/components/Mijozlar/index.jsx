  import React,{useState,useContext} from 'react'
  import Navbar from './Navbar'
  import Kategoriya from './Kategoriya'
  import { Container } from './style';
  import Malumotlar from './Malumotlar'

  
  export const Mijoz = () => {
  


    return (
      <Container>
            <Navbar/>
          <Kategoriya/>
          <Malumotlar/>
      </Container>
    )
    
  }
  export default Mijoz;