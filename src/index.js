import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  useParams
} from 'react-router-dom'

import { TransitionGroup,CSSTransition } from 'react-transition-group'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Header/>
    <TransitionGroup>
      <CSSTransition timeout={300}
          classNames='fade'
          key={window.location.key}>
        <Switch location={window.location}>
          <Route exact path="/">
            <Content/>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    <Footer/>

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

