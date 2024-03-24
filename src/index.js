import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Who from './components/Who';
import {BrowserRouter,Routes, Route} from 'react-router-dom'


import Contact from './components/Contact';
// import { StyledEngineProvider } from '@mui/material/styles';
// import { useState } from 'react';

//function to get movie details
// const [isMovie,setMovie] = useState(false)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
      
    
    <Header/>
    
        <BrowserRouter>
          <Routes location={window.location}>
            <Route exact path="/" element={<Content/>}/>
            <Route exact path="/Who" element={<Who/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      
    <Footer/>

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

