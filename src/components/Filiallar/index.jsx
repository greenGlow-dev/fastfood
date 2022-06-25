  import React,{useState,useContext} from 'react'
  import Navbar from './Navbar'
  import Kategoriya from './Kategoriya'
  import { Container } from './style';
  import Malumotlar from './Malumotlar'
  import UserContext from '../context/UserContext';
  import { filial } from '../../utils/filial';

  
  export const Filial = () => {
    const [user, setUser] = useState('salom');
    const [useFilial, setFilial] = useState(filial);
    const [runFunc, setFunc] = useState(' ');


     
          // filtered()

    return (
      <UserContext.Provider value={{user, setUser, useFilial ,setFilial,runFunc , setFunc}}  >
      <Container>
            <Navbar/>
          <Kategoriya/>
          <Malumotlar/>
      </Container>
      </UserContext.Provider>
    )
    
  }
  export default Filial;