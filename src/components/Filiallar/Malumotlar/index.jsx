import React,{useState, useContext} from "react";
import {
Container,
RemoweWrapper1,
NotVisible,
RemoweWrapper2,
Tab,
} from "./style";
import { filial } from "../../../utils/filial";
import pen from "../../../assets/icons/pen.svg";
import garbage from "../../../assets/icons/garbage.svg";
import target1 from "../../../assets/icons/target.svg";
import Navbar from "../Navbar/index";
import UserContext from '../../context/UserContext'
export const Malumotlar = () => {
    
    const {user, setUser, useFilial, setFilial} = useContext(UserContext);
    


        
  
        
return (
  <div>
   
    {useFilial.map(({ id, filialNameUz, filialNameRu, target, time }) => {
      return (
        <Container key={id}>
          <Tab.Information>{filialNameUz}</Tab.Information>
          <Tab.Information>{filialNameRu}</Tab.Information>
          <Tab.Information>{target}</Tab.Information>
          <Tab.Information>{time}</Tab.Information>
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
  </div>
);
};

export default Malumotlar;
