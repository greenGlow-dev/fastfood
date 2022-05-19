import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Body } from "./style";
import {HashRouter as Router,BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { sidebar } from "../utils/sidebar";
import Notfound from "../components/Notfound";


export const Root = () => {
  return( 
  
      <Container>

            <BrowserRouter>
           

                  <Routes>

                
              {
                    sidebar.map(({id,path})=>{
                          return(
                                <Route  key={id} path={path} element={<Sidebar/>} />
                              
                          )
                    })
              }

                 </Routes>

              <Routes>
    
{
            sidebar.map(({id,path, Component})=>{
            return(
                  <Route  key={id} path={path} element={<Component/>} />
                  
                   )
                   })
}

                  <Route  path="*" element={<Notfound />} />

             </Routes>


            </BrowserRouter>

          


      </Container>
      
      )
};

export default Root;
