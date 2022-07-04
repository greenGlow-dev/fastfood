import React, { useState } from 'react'
import { Container, Wrapper, Plus, Title, Tab, IconWrapper, FilterIcon, TabClone, FilterWrapper1, FilterWrapper2 } from './style'

import qidiruv from '../../../assets/icons/qidiruv.svg'

export const Navbar = () => {
  const [isActive, setActive] = useState('Yangi')
  const [isTabActive, setTabActive] = useState('birinchi')
  const [isAddCard, setAddCard] = useState(false)
  return (
    <Container>
      <Wrapper align order='first' plus = {true} >

        <Plus>+</Plus>
        <Title>Yangi kategoriya qo'shish</Title>

      </Wrapper>
    

      <Wrapper order='second' search = {true} >

        <Tab.input placeholder='Qidiruv'  autoFocus />

        <Tab.Search src={qidiruv} />

      </Wrapper>

     
      <Wrapper >

       

      </Wrapper>


     

    </Container>
  )
}
export default Navbar
