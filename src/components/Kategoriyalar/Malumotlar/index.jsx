import React from 'react'
import {Container,RemoweWrapper1, RemoweWrapper2,All, Tab} from './style'
import {kategoriya} from '../../../utils/bigKategory'
import pen from '../../../assets/icons/pen.svg'
import garbage from '../../../assets/icons/garbage.svg'
export const Malumotlar = () => {
  return (


 

      <All>

      {

kategoriya.map(({id,categoryUz,categoryRu,mainCategory})=>{
          return (<Container key={id}>
            
           
            <Tab.Information>{categoryUz}</Tab.Information>
            <Tab.Information>{categoryRu}</Tab.Information>
            <Tab.Information>{mainCategory}</Tab.Information>
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
      
      </All>

        

  )
}

export default Malumotlar
