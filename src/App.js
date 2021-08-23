import React, { useState, useEffect } from 'react';

import './App.css';

import Navigationbar from './components/Navigationbar.js';
import Dropdown from './components/Dropdown.js';
import References from './components/References.js';
import Person from './components/Person.js';

import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

import Home from './pages';
import Service from './pages/servicepage';
import Personpage from './pages/personpage';

import { Switch, Route } from 'react-router';
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
      <Navigationbar toggle={toggle} /> {/* passing in  toggle to the Navbar component*/}
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch> {/* switch makes sure that only one Route will be shown*/}
        {/* This will be extra pages for further information. Addition to Onepager.  */}
        <Route path="/" exact component={Home} /> {/*path is the path in the URL name. example: website.com/pathname*/}
        <Route path="/service" component={Service} />
        <Route path="/person" component={Personpage} />
      </Switch>
      <References />
      <Person />
      <Contact />
      <Footer />

    </>
  );
}



