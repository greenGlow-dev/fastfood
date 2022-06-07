import React from 'react'
import {Container,RemoweWrapper1, RemoweWrapper2, Tab} from './style'
import {kategoriya} from '../../../utils/kategoriya'
import pen from '../../../assets/icons/pen.svg'
import garbage from '../../../assets/icons/garbage.svg'
export const Malumotlar = () => {
  return (


 

      <>

      {

        kategoriya.map(({id,icon,product,category,additional})=>{
          return (<Container key={id}>
            
            <Tab.Icon src ={icon} />
            <Tab.Information>{product}</Tab.Information>
            <Tab.Information>{category}</Tab.Information>
            <Tab.Information>{additional}</Tab.Information>
            <RemoweWrapper1>
                   <RemoweWrapper2>
                        <img src={pen} />
                   </RemoweWrapper2>
            </RemoweWrapper1>
            <RemoweWrapper1>
                   <RemoweWrapper2>
                        <img src={garbage} />
                   </RemoweWrapper2>
            </RemoweWrapper1>

                </Container>)
        })
      }
      
      </>

        

  )
}

export default Malumotlar
