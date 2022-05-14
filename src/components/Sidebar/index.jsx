import React, { Component } from 'react'
import { Container, LogoWrapper, TextWrap, Wrapper, Link, Item, Icon} from './style'
import logo from '../../assets/img/logo.png'
import {sidebar} from '../../utils/sidebar'
import { NavLink } from 'react-router-dom'





export const Sidebar = () => {
  return (
    <Container>
        <LogoWrapper>

              <LogoWrapper.Img src = {logo} alt = 'logo' />
               <TextWrap>
                      <TextWrap.Title>
                        FastFood
                      </TextWrap.Title> 

                      <TextWrap.Desc>
                        Online Mahsulot sotuvi
                      </TextWrap.Desc>
               </TextWrap>

          </LogoWrapper>

          <Wrapper>
            
          {


            sidebar.map(({id,title,path,Icon})=>{
              return(
                <Item key={id}>
                      <Link key={id} to={path}>
                        <Icon className='icon' src = {Icon} />
                        {title}
                      </Link>
                        
                </Item>
              )
            })

          
          }
        
           
          </Wrapper>
         
     </Container>
  )
}

export default Sidebar