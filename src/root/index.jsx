import React,{useState,useContext} from 'react'
import Sidebar from "../components/Sidebar";
import { Container,Sorry, Body } from "./style";
import {HashRouter as Router,BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { sidebar } from "../utils/sidebar";
import Notfound from "../components/Notfound";
import UserContext from '../context/UserContext'
import { filial } from '../utils/filial'
import { mijozlar } from '../utils/mijozlar'
import { kategoriya } from '../utils/kategoriya'
import './root.css'



export const Root = () => {

const [user, setUser] = useState('salom');
const [user1, setUser1] = useState('salom');
// const [sideBar, setSidebar] = useState('');
const [usetoggleCard, settoggleCard] = useState(false);
const [useFilial, setFilial] = useState(filial);
const [useUsers, setUsers] = useState(mijozlar);
const [useProduct, setProduct] = useState(kategoriya);
console.log(window.innerWidth)

  return( 
  
      <UserContext.Provider value={{user, setUser, user1, setUser1, useProduct, setProduct, useFilial ,setFilial,useUsers, setUsers, usetoggleCard,settoggleCard }} >
      <Container>

            <BrowserRouter>
           
                  <div id='sidebar'  >

                 
                        <Routes >   

                  
                  {

                    
                        sidebar.map(({id,path})=>{
                              return(
                                    <Route  key={id}  path={path} element={<Sidebar/>} />
                                    
                              )
                        })
                  }

                  </Routes>
                 </div>

                 <div id='body'>

              <Routes >
    
{
            sidebar.map(({id,path, Component})=>{
            return(
                  <Route  key={id} path={path} element={<Component/>} />
                  
                   )
                   })
}

                

             </Routes>

             </div>


            </BrowserRouter>

          


      </Container>
      <Sorry>Sorry!This is a <mark>adminPanel</mark>, The page is not responsive.
GreenGlow doesn't want you to see his page crashed.
Please, open the page with device that has at least 1100px width.</Sorry>
      </UserContext.Provider>
      
      )
};

export default Root;
