import React, { useState } from 'react'
import { Container, Wrapper, Plus, Title, Tab, IconWrapper, TabClone } from './style'
import NavbarIcon1 from '../../../assets/icons/NavbarIcon1.svg'
import NavbarIcon2 from '../../../assets/icons/NavbarIcon2.svg'
import AddOrder from '../AddOrder/index.jsx'

export const Navbar = () => {
  const [isActive, setActive] = useState('Yangi')
  const [isTabActive, setTabActive] = useState('birinchi')
  const [isAddCard, setAddCard] = useState(false)
  return (
    <Container>
      <Wrapper  buyurtma={true}   >

        <Plus onClick={() => setAddCard(!isAddCard)} >+</Plus>

        <Title>Yangi buyurtma qo'shish</Title>
     {/* 
        <TabClone>

          <IconWrapper onClick={() => setTabActive('birinchi')} active={isTabActive === 'birinchi'} >
            <Tab.Icon src={NavbarIcon1} />
          </IconWrapper>
          <IconWrapper onClick={() => setTabActive('ikkinchi')} active={isTabActive === 'ikkinchi'} r>
            <Tab.Icon src={NavbarIcon2} />
          </IconWrapper>

        </TabClone> */}

      </Wrapper>

      <Wrapper  tab={true}   >
        <Tab>
          <Tab.Item onClick={() => setActive('Yangi')} active={isActive === 'Yangi'} >Yangi</Tab.Item>
          <Tab.Item onClick={() => setActive('Qabul qilingan')} active={isActive === 'Qabul qilingan'} >Qabul qilingan</Tab.Item>
          <Tab.Item onClick={() => setActive('Jonatilgan')} active={isActive === 'Jonatilgan'} >Jo'natilgan</Tab.Item>
          <Tab.Item onClick={() => setActive('Yopilgan')} active={isActive === 'Yopilgan'} >Yopilgan</Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper align  toggle={true}   >
        <Tab>
          <IconWrapper onClick={() => setTabActive('birinchi')} active={isTabActive === 'birinchi'} >
            <Tab.Icon src={NavbarIcon1} />
          </IconWrapper>
          <IconWrapper onClick={() => setTabActive('ikkinchi')} active={isTabActive === 'ikkinchi'} r>
            <Tab.Icon src={NavbarIcon2} />
          </IconWrapper>
        </Tab>
      </Wrapper>
      <AddOrder order={isAddCard} />
    </Container>
  )
}
export default Navbar
