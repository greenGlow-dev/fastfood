import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Body } from "./style";
import {HashRouter as Router, Routes, Route, Switch } from "react-router-dom";
import { sidebar } from "../utils/sidebar";

export const Root = () => {
  return( 
  
      <Container>

            <Router>
            <Sidebar/>

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
                  <Route  key={id} path={path} element={Component}  />
                   )
                   })
}


</Routes>


            </Router>

            <h1>Body</h1>


      </Container>
      
      )
};

export default Root;
