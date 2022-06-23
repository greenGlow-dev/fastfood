  import React,{useState,useContext} from 'react'
  import Navbar from './Navbar'
  import Kategoriya from './Kategoriya'
  import { Container } from './style';
  import Malumotlar from './Malumotlar'
  import UserContext from '../context/UserContext';

  
  export const Filial = () => {
    const [user, setUser] = useState('salom');

    return (
      <UserContext.Provider value={{user, setUser}}>
      <Container>
            <Navbar/>
          <Kategoriya/>
          <Malumotlar/>
      </Container>
      </UserContext.Provider>
    )
    
  }
  export default Filial;