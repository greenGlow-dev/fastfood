import React,{useState, useContext} from "react";
import {
Container,
RemoweWrapper1,
NotVisible,
RemoweWrapper2,
Tab,
All
} from "./style";
import { filial } from "../../../utils/filial";
import pen from "../../../assets/icons/pen.svg";
import garbage from "../../../assets/icons/garbage.svg";
import target1 from "../../../assets/icons/target.svg";
import Navbar from "../Navbar/index";
import UserContext from '../../../context/UserContext'
export const Malumotlar = () => {
    
    const {useUsers} = useContext(UserContext);
    


        
  
        
return (
  <All>
   
    {useUsers.map(({ id, name, number, orderCount, status }) => {
      return (
        <Container key={id}>
          <Tab.Information>{name}</Tab.Information>
          <Tab.Information  >{number}</Tab.Information>
          <Tab.Information >{orderCount}</Tab.Information>
          <Tab.Information green = {true} >{status}</Tab.Information>
          <Tab>
            <RemoweWrapper1>
              <RemoweWrapper2>
                <img src={target1} />
              </RemoweWrapper2>
            </RemoweWrapper1>
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
          </Tab>
        </Container>
      );
    })}
    <NotVisible>
      <Navbar />
    </NotVisible>
  </All>
);
};

export default Malumotlar;
