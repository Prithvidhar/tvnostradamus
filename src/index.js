import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Who from './components/Who';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import { TransitionGroup,CSSTransition } from 'react-transition-group'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Header/>
    <TransitionGroup>
      <CSSTransition timeout={300}
          classNames='fade'
          key={window.location.key}>
        <BrowserRouter>
          <Routes location={window.location}>
            <Route exact path="/" element={<Content/>}/>
            <Route exact path="/Who" element={<Who/>}/>
          </Routes>
        </BrowserRouter>
      </CSSTransition>
    </TransitionGroup>
    <Footer/>

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

