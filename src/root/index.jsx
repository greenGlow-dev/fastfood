import React,{useState,useContext} from 'react'
import Sidebar from "../components/Sidebar";
import { Container, Body } from "./style";
import {HashRouter as Router,BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { sidebar } from "../utils/sidebar";
import Notfound from "../components/Notfound";
import UserContext from '../context/UserContext'
import { filial } from '../utils/filial'
import { kategoriya } from '../utils/kategoriya'
import './root.css'



export const Root = () => {

const [user, setUser] = useState('salom');
const [user1, setUser1] = useState('salom');
// const [sideBar, setSidebar] = useState('');

const [useFilial, setFilial] = useState(filial);
const [useProduct, setProduct] = useState(kategoriya);

  return( 
  
      <UserContext.Provider value={{user, setUser, user1, setUser1, useProduct, setProduct, useFilial ,setFilial}} >
      <Container>

            <BrowserRouter>
           
                  <div id='sidebar'  >

                 
                  <Routes >   

                
              {
                    sidebar.map(({id,path})=>{
                          return(
                                <Route  key={id} path={path} element={<Sidebar/>} />
                              
                          )
                    })
              }

                 </Routes>
                 </div>

                 <div id='body'>

              <Routes   >
    
{
            sidebar.map(({id,path, Component})=>{
            return(
                  <Route  key={id} path={path} element={<Component/>} />
                  
                   )
                   })
}

                  <Route  path="*" element={<Sidebar />} />

             </Routes>

             </div>


            </BrowserRouter>

          


      </Container>
      </UserContext.Provider>
      
      )
};

export default Root;
