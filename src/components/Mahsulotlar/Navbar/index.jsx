import React, { useState, useContext } from 'react'
import { Container, Wrapper, Plus, Title, Tab, IconWrapper, FilterIcon, TabClone, FilterWrapper1, FilterWrapper2 } from './style'
import NavbarIcon1 from '../../../assets/icons/NavbarIcon1.svg'
import NavbarIcon2 from '../../../assets/icons/NavbarIcon2.svg'
import qidiruv from '../../../assets/icons/qidiruv.svg'
import filter from '../../../assets/icons/filter.svg'
import FilterCard from './filterCard/index'
import { kategoriya } from '../../../utils/kategoriya'
import UserContext from '../../../context/UserContext'

export const Navbar = () => {
  const [isActive, setActive] = useState('Yangi')
  const [isTabActive, setTabActive] = useState('birinchi')
  const [isAddCard, setAddCard] = useState(false)


  const { user1, setUser1, setProduct } = useContext(UserContext);

  const filtered = (e) => {

    setUser1(e.target.value);

    let obj = kategoriya.filter((item) => item.productSearch.toUpperCase().includes(user1.toUpperCase()))

    setProduct(obj)


  }



  return (
    <Container>
      <Wrapper align order='first' buyurtma={true} >

        <Plus>+</Plus>
        <Title>Yangi buyurtma qo'shish</Title>

      </Wrapper>
      <Wrapper order='second' tab={true} >

        <Tab.input placeholder='Qidiruv' onChange={(e) => filtered(e)} autoFocus />

        <Tab.Search src={qidiruv} />

      </Wrapper>
      <Wrapper align order='third' toggle={true} >

        <FilterWrapper1 onClick={() => setAddCard(!isAddCard)} >

          <FilterWrapper2>

            <FilterIcon src={filter} />

          </FilterWrapper2>

        </FilterWrapper1>


      </Wrapper>
      <FilterCard order={isAddCard} />
    </Container>
  )
}
export default Navbar
