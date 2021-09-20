import React, { useState, useEffect } from 'react';

import './App.css';

import Navigationbar from './components/navbar-simple/NavBar.js';
import Dropdown from './components/navbar-simple/NavBurgerDropdown.js';

import MainPage from './components/pages/mainpage';
import Service from './components/pages/servicepage';
import Personpage from './components/pages/personpage';

import Navbar from './components/navbar-with-dropdown/Navbar';
import Services from './components/navbar-with-dropdown/pages/Services';
import Products from './components/navbar-with-dropdown/pages/Products';
import Marketing from './components/navbar-with-dropdown/pages/Marketing';
import Consulting from './components/navbar-with-dropdown/pages/Consulting';

import Contact from './components/06-Contact.js';
import Footer from './components/10-Footer.js';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      {/* <Navigationbar toggle={toggle} /> passing in  toggle to the Navbar component*/}
      {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path='/MainPage' exact component={MainPage} /> {/* components > pages > mainpage */}
          <Route path='/services' component={Service} />
          <Route path='/products' component={Products} />
          <Route path='/marketing' component={Marketing} />
          <Route path='/consulting' component={Consulting} />
        </Switch>
      </Router>

      <section id='contact'>
        <Contact />
      </section>

      <Footer />

    </>
  );
}



