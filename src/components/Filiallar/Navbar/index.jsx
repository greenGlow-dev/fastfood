      import React,{useState} from 'react'
      import { Container, Wrapper ,NotVisible, Plus , Title, Tab,IconWrapper, FilterIcon, TabClone, FilterWrapper1, FilterWrapper2} from './style'
      import NavbarIcon1 from '../../../assets/icons/NavbarIcon1.svg'
      import NavbarIcon2 from '../../../assets/icons/NavbarIcon2.svg'
      import qidiruv from '../../../assets/icons/qidiruv.svg'
      import filter from '../../../assets/icons/filter.svg'
      import Malumotlar from '../Malumotlar'

      export const Navbar = () => {
        const [isActive, setActive] = useState('Yangi')
        const [isTabActive, setTabActive] = useState('birinchi')
        // const [isInput, setInput] = useState('bosh')


    
     

           

        return (
          <Container>
            <Wrapper align   order='first' >

            <Plus>+</Plus>
            <Title>Yangi filial qo'shish</Title>
            <TabClone>
              <IconWrapper    onClick={()=>setTabActive('birinchi')} active = {isTabActive === 'birinchi' } >
          <Tab.Icon  src={NavbarIcon1} />
            </IconWrapper>
            <IconWrapper   onClick={()=>setTabActive('ikkinchi')} active = {isTabActive === 'ikkinchi' } r>
          <Tab.Icon  src={NavbarIcon2} />
          </IconWrapper>
            </TabClone>

            </Wrapper> 
            <Wrapper     order='second'>
        
                <Tab.input  placeholder='Qidiruv' />

                  <Tab.Search src={qidiruv}  />
            
            </Wrapper>

       
          </Container>
        )
      }
      export default Navbar
