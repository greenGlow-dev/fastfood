 import React, { useState } from 'react'
import { Container, LogoWrapper, TextWrap, Wrapper, Link, Item, Icon} from './style'
import logo from '../../assets/img/logo.png'
import {sidebar} from '../../utils/sidebar'





export const Sidebar = () => {

const[isActive, setActive] = useState(1);

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

          <Wrapper >
            
          {


            sidebar.map(({id,title,path,Icon})=>{
              return(
                <Item key={id} onClick = {()=>setActive(id)}  active = {isActive === id}  >
                      <Link key={id} to={path}  >
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