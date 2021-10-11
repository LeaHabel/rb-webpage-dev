import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar-with-dropdown/Navbar';

import Home from './components/pages/mainpage';

import Service1 from './components/pages/Service1';
import Service2 from './components/pages/Service2';
import Service3 from './components/pages/Service3';
import Service4 from './components/pages/Service4';

import Footer from './components/10-Footer';

import Disclaimer from './components/11-Disclaimer';
import Impressum from './components/11-Impressum';

{/*import { Switch, Route } from 'react-router';*/ }
{/* https://www.youtube.com/watch?v=gOQ31Kc8H5E&t=437s&ab_channel=BrianDesign 43:15*/ }



export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('resized')
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home} /> {/* components > pages > mainpage */}

        <Route path='/service1' component={Service1} />
        <Route path='/service2' component={Service2} />
        <Route path='/service3' component={Service3} />
        <Route path='/service4' component={Service4} />

        <Route path='/disclaimer' exact component={withRouter(Disclaimer)} />
        <Route path='/impressum' exact component={withRouter(Impressum)} />
      </Switch>

      <Footer />

    </>
  );
}



