import React, { useState, useContext } from "react";
import { Container, RemoweWrapper1, RemoweWrapper2, All,Tab } from './style'
import { kategoriya } from '../../../utils/kategoriya'
import pen from '../../../assets/icons/pen.svg'
import garbage from '../../../assets/icons/garbage.svg'
import UserContext from "../../../context/UserContext";
export const Malumotlar = () => {


  const { useProduct } = useContext(UserContext);

  return (

    <All>

      {

useProduct.map(({ id, icon, product,price, category, additional }) => {
          return (<Container key={id}>

            <Tab.Icon src={icon} />
            <Tab.Information>{product}</Tab.Information>
            <Tab.Information>{category}</Tab.Information>
            <Tab.Information>{additional}</Tab.Information>
            <Tab.Information>{price}</Tab.Information>
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
