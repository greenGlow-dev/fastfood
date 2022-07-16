 import React, { useState } from 'react'
import { Container, LogoWrapper, TextWrap, Wrapper, Link, Item, Icon} from './style'
import logo from '../../assets/img/two.jpg'
import {sidebar} from '../../utils/sidebar'





export const Sidebar = () => {

const[isActive, setActive] = useState(localStorage.getItem('id'));

const lablab = (id) => {
localStorage.setItem('id', id);
setActive(localStorage.getItem('id'));
}

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
   
                   <Item key={id}>
                   <Link key={id} to={path} onClick = {()=>lablab(id)}  active = {isActive == id} >
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