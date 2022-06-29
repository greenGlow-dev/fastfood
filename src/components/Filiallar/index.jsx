  import React,{useState,useContext} from 'react'
  import Navbar from './Navbar'
  import Kategoriya from './Kategoriya'
  import { Container } from './style';
  import Malumotlar from './Malumotlar'
  import UserContext from '../../context/UserContext';
  import { filial } from '../../utils/filial';

  
  export const Filial = () => {
  


     
          // filtered()

    return (
      <Container>
            <Navbar/>
          <Kategoriya/>
          <Malumotlar/>
      </Container>
    )
    
  }
  export default Filial;