import React, { useState, useContext } from 'react'
import { Container, Wrapper, NotVisible, Plus, Title, Tab, IconWrapper, FilterIcon, TabClone, FilterWrapper1, FilterWrapper2 } from './style'
import NavbarIcon1 from '../../../assets/icons/NavbarIcon1.svg'
import NavbarIcon2 from '../../../assets/icons/NavbarIcon2.svg'
import qidiruv from '../../../assets/icons/qidiruv.svg'
import filter from '../../../assets/icons/filter.svg'
import Malumotlar from '../Malumotlar'
import UserContext from '../../../context/UserContext'
import { filial } from '../../../utils/filial';

export const Navbar = () => {
  const [isActive, setActive] = useState('Yangi')
  const [isTabActive, setTabActive] = useState('birinchi')


  const filtered = () => {

    let obj = filial.filter((item) => item.filialNameUz.toUpperCase().includes(user.toUpperCase()))

    setFilial(obj)

  }


  const { user, setUser, setFilial } = useContext(UserContext);




  return (
    <Container>
      <Wrapper align order='first' plus={true}  >
        <Plus>+</Plus>
        <Title>Yangi mijoz qo'shish</Title>

      </Wrapper>
      <Wrapper order='second' search={true}>

        <Tab.input placeholder='Qidiruv' autoFocus focusable='false' onKeyUp={() => filtered()} onChange={(e) => setUser(e.target.value)} />

        <Tab.Search src={qidiruv} />

      </Wrapper>


      <Wrapper toggle={true}>

        <FilterWrapper1>

          <FilterWrapper2>

            <FilterIcon src={filter} />

          </FilterWrapper2>

        </FilterWrapper1>

      </Wrapper>


    </Container>
  )
}
export default Navbar
